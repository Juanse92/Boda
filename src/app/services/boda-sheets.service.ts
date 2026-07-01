import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface GuestInfo {
  name: string;
  /** Fila real en el Google Sheet (ej. 7 para C7) */
  row: number;
}

@Injectable({ providedIn: 'root' })
export class BodaSheetsService {

  // La API Key solo permite LECTURA en este sheet público.
  // Para escritura (RSVP), se usa un Google Apps Script Web App como proxy
  // (ver comentario en submitRsvp).
  private readonly apiKey = 'AIzaSyDpUjpw42UX-w6eL6J63ywCI2l2mPxjLxY';
  private readonly spreadsheetId = '1VNULfBOzhyKwuoSIQuXDCZE2iTC-ZLWPWYcU2EfxgFY';
  private readonly sheetName = 'Hoja1';

  // -------------------------------------------------------
  // URL del Google Apps Script Web App para escritura.
  // Pasos para obtenerla:
  //   1. Abre el sheet → Extensiones → Apps Script
  //   2. Pega el código doPost() del comentario de abajo
  //   3. Implementar → Nueva implementación → Tipo: App web
  //      Ejecutar como: Yo mismo · Quién tiene acceso: Cualquier usuario
  //   4. Copia la URL y reemplaza el valor de abajo
  //
  // Código Apps Script (doPost) — escribe columnas H(8) a O(15):
  // function doPost(e) {
  //   var ss = SpreadsheetApp.openById('1VNULfBOzhyKwuoSIQuXDCZE2iTC-ZLWPWYcU2EfxgFY');
  //   var sheet = ss.getSheetByName('Hoja 1');
  //   var data = JSON.parse(e.postData.contents);
  //   // H=RESPUESTA BODA | I=# PERSONAS BODA | J=NOMBRES CONFIRMADOS BODA
  //   // K=RESPUESTA DESENGUAYABE | L=# PERSONAS DESENGUAYABE | M=NOMBRES CONFIRMADOS DESENGUAYABE
  //   // N=RESTRICCIÓN ALIMENTARIA | O=MENSAJE
  //   sheet.getRange(data.row, 8, 1, 8).setValues([[
  //     data.asisteBoda, data.personasBoda, data.nombresBoda,
  //     data.asisteDesenguayabe, data.personasDesenguayabe, data.nombresDesenguayabe,
  //     data.restriccion, data.mensaje
  //   ]]);
  //   return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
  // }
  // -------------------------------------------------------
  private readonly appsScriptUrl = 'https://script.google.com/macros/s/AKfycbwAmtZ8TLtkqyc3jBlGlOV8u7kmokIxhDYWEYNMJpOhzQJbIwoo1NgTcvPVJYIizHY/exec';

  constructor(private http: HttpClient) {}

  /**
   * Decodifica la clave de la URL → lee la celda C{fila} del sheet
   * y devuelve el nombre del invitado y su número de fila.
   */
  getGuestByKey(key: string): Observable<GuestInfo | null> {
    try {
      // Restaurar padding base64 si fue removido
      const padded = key + '==='.slice((key.length + 3) % 4);
      const decoded = atob(padded); // espera "wk_N"
      const match = decoded.match(/^wk_(\d+)$/);
      if (!match) { return of(null); }

      const index = parseInt(match[1], 10);
      const row = this.indexToSheetRow(index);
      // Sin prefijo de hoja → usa la primera hoja del spreadsheet
      const range = `C${row}`;
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/`
        + `${range}?key=${this.apiKey}`;
      console.log('[BodaSheets] key:', key, '→ índice:', index, '→ fila:', row, '→ URL:', url);

      return this.http.get<any>(url).pipe(
        map(res => {
          const values = res && res.values;
          const row0 = values && values[0];
          const cell = row0 && row0[0];
          const name: string = cell ? String(cell).trim() : '';
          console.log('[BodaSheets] Respuesta:', res, '→ nombre:', name, '| fila:', row);
          return name ? { name, row } : null;
        }),
        catchError(err => {
          console.error('[BodaSheets] Error al leer el sheet:', err);
          return of(null);
        })
      );
    } catch {
      return of(null);
    }
  }

  /**
   * Escribe la respuesta del RSVP en la fila del invitado:
   *   H(8)  = Respuesta Boda          I(9)  = # Personas Boda
   *   J(10) = Nombres Confirmados Boda
   *   K(11) = Respuesta Desenguayabe  L(12) = # Personas Desenguayabe
   *   M(13) = Nombres Confirmados Desenguayabe
   *   N(14) = Restricción Alimentaria
   *   O(15) = Mensaje
   */
  submitRsvp(
    row: number,
    asisteBoda: string,
    nombresBoda: string[],
    asisteDesenguayabe: string,
    nombresDesenguayabe: string[],
    restriccion: string,
    mensaje: string
  ): Observable<any> {
    const body = {
      row,
      asisteBoda: asisteBoda === 'si' ? 'Sí' : 'No',
      personasBoda: nombresBoda.length,
      nombresBoda: nombresBoda.join(', '),
      asisteDesenguayabe: asisteDesenguayabe === 'si' ? 'Sí' : 'No',
      personasDesenguayabe: nombresDesenguayabe.length,
      nombresDesenguayabe: nombresDesenguayabe.join(', '),
      restriccion: restriccion || 'Sin restricción',
      mensaje
    };
    return this.http.post(this.appsScriptUrl, body, {
      headers: { 'Content-Type': 'text/plain' }
    }).pipe(
      catchError(err => {
        console.error('Error al guardar RSVP en Sheet:', err);
        return of({ ok: false });
      })
    );
  }

  /**
   * Lee los datos RSVP previamente guardados para una fila (columnas H-O).
   * Devuelve null si la fila no tiene respuesta aún.
   */
  getRsvpData(row: number): Observable<any | null> {
    const range = `H${row}:O${row}`;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${range}?key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map(res => {
        const values = res && res.values && res.values[0];
        if (!values || !values[0]) { return null; }
        return {
          asisteBoda:          values[0] === 'Sí' ? 'si' : 'no',
          nombresBoda:         values[2] ? (values[2] as string).split(', ').filter((n: string) => n) : [],
          asisteDesenguayabe:  values[3] === 'Sí' ? 'si' : 'no',
          nombresDesenguayabe: values[5] ? (values[5] as string).split(', ').filter((n: string) => n) : [],
          restriccion:         values[6] || '',
          mensaje:             values[7] || ''
        };
      }),
      catchError(() => of(null))
    );
  }

  /**
   * Convierte índice de invitado (1-based) a número de fila real.
   * Invitados 1-86 → filas 9-94 (columna C9:C94, sin gaps)
   */
  private indexToSheetRow(index: number): number {
    return index + 8;
  }
}

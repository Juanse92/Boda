import { Component, OnInit, OnDestroy, HostListener,AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BodaSheetsService } from '../services/boda-sheets.service';

import { HttpClient } from '@angular/common/http';

import Swiper from 'swiper';

interface Countdown {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

// Definimos una interfaz sencilla para tipar tus datos
interface FotoPreboda {
  id: number;
  url: string;
}

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss']
})
export class WeddingComponent implements OnInit, OnDestroy, AfterViewInit {

  fotosPreboda: FotoPreboda[] = [];
  selectedPhoto: FotoPreboda | null = null;

  scrolled = false;
  menuOpen = false;
  rsvpEnviado = false;
  rsvpError = false;
  isMuted = false;

  private audio: HTMLAudioElement | null = null;

  /** Nombre del invitado leído desde sessionStorage (viene de LandingComponent) */
  guestName = '';
  /** Lista de nombres individuales derivada de guestName (separados por coma) */
  guestNames: string[] = [];
  private guestRow: number | null = null;

  countdown: Countdown = { days: '00', hours: '00', minutes: '00', seconds: '00' };

  rsvp = {
    nombre: '',
    email: '',
    asisteBoda: null,
    nombresBoda: [] as string[],
    asisteDesenguayabe: null,
    nombresDesenguayabe: [] as string[],
    restriccion: '',
    restriccionOtros: '',
    mensaje: ''
  };

  private countdownInterval: any;
  private weddingDate = new Date('2026-11-16T15:00:00');

constructor(
    private sheetsService: BodaSheetsService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}


  ngOnInit() {
    this.updateCountdown();
    this.countdownInterval = setInterval(() => this.updateCountdown(), 1000);

    // Inicia música de fondo
    this.audio = new Audio('assets/musica/Reik - Creo en Ti.mp3');
    this.audio.loop = true;
    this.audio.volume = 0.5;
    this.audio.play().catch(() => {
      // El navegador bloqueó el autoplay; el usuario puede activarla con el botón
    });

    // Recupera datos del invitado si llegó desde la página de bienvenida
    this.guestName = sessionStorage.getItem('guestName') || '';
    this.guestNames = this.guestName
      ? this.guestName.split(',').map(n => n.trim()).filter(n => n.length > 0)
      : [];
    const savedRow = sessionStorage.getItem('guestRow');
    this.guestRow = savedRow ? parseInt(savedRow, 10) : null;

    // Si ya existe una respuesta guardada, precarga el formulario y muestra el resumen
    if (this.guestRow) {
      this.sheetsService.getRsvpData(this.guestRow).subscribe(data => {
        if (data) {
          this.rsvp.asisteBoda          = data.asisteBoda;
          this.rsvp.nombresBoda         = data.nombresBoda;
          this.rsvp.asisteDesenguayabe  = data.asisteDesenguayabe;
          this.rsvp.nombresDesenguayabe = data.nombresDesenguayabe;
          this.rsvp.mensaje             = data.mensaje;
          if (data.restriccion.startsWith('Otros: ')) {
            this.rsvp.restriccion      = 'Otros';
            this.rsvp.restriccionOtros = data.restriccion.replace('Otros: ', '');
          } else {
            this.rsvp.restriccion = data.restriccion;
          }
          this.rsvpEnviado = true;
        }
      });
    }

    this.http.get<{ fotosPreboda: FotoPreboda[] }>('assets/Fotos Pre-Boda/fotosPreboda.json')
      .subscribe({
        next: (data) => {
          this.fotosPreboda = data.fotosPreboda;

          // 🚨 Magia de Angular: Forzamos a que dibuje el HTML de las fotos ahora mismo
          this.cdr.detectChanges();

          // Ahora sí, inicializamos Swiper
          this.initSwiper();
        },
        error: (err) => console.error('Error cargando las fotos de preboda:', err)
      });
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }

  ngAfterViewInit(): void {
    // Inicializamos Swiper asegurando el movimiento continuo y las 3 columnas
  }

  toggleMute() {
    if (!this.audio) { return; }
    this.isMuted = !this.isMuted;
    this.audio.muted = this.isMuted;
    // Si el audio estaba detenido por autoplay bloqueado, intenta reproducirlo
    if (!this.isMuted && this.audio.paused) {
      this.audio.play().catch(() => {});
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 60;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.menuOpen = false;

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (!section) { return; }

      const nav = document.querySelector('.nav') as HTMLElement;
      const navHeight = nav ? nav.getBoundingClientRect().height : 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }, 80);
  }

  private pad(n: number): string {
    return n < 10 ? '0' + n : String(n);
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const distance = this.weddingDate.getTime() - now;

    if (distance <= 0) {
      this.countdown = { days: '00', hours: '00', minutes: '00', seconds: '00' };
      clearInterval(this.countdownInterval);
      return;
    }

    this.countdown = {
      days: this.pad(Math.floor(distance / (1000 * 60 * 60 * 24))),
      hours: this.pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
      minutes: this.pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
      seconds: this.pad(Math.floor((distance % (1000 * 60)) / 1000))
    };
  }

  validationModal = '';

  submitRsvp() {
    this.rsvpError = false;

    if (this.rsvp.asisteBoda === null && this.rsvp.asisteDesenguayabe === null) {
      this.validationModal = 'Por favor marca la casilla de asistencia Boda/Desenguayabe.';
      return;
    }
    else if (this.rsvp.asisteBoda === null && this.rsvp.asisteDesenguayabe != null) {
      this.validationModal = 'Por favor marca la casilla de asistencia Boda.';
      return;
    }
    else if (this.rsvp.asisteBoda != null && this.rsvp.asisteDesenguayabe === null) {
      this.validationModal = 'Por favor marca la casilla de asistencia Desenguayabe.';
      return;
    }

    if (this.rsvp.asisteBoda === 'si' && this.guestNames.length > 0 && this.rsvp.nombresBoda.length === 0) {
      this.validationModal = 'Marca quiénes asistirán a la boda.';
      return;
    }
    if (this.rsvp.asisteDesenguayabe === 'si' && this.guestNames.length > 0 && this.rsvp.nombresDesenguayabe.length === 0) {
      this.validationModal = 'Marca quiénes asistirán al desenguayabe.';
      return;
    }

    const restriccionFinal = this.rsvp.restriccion === 'Otros'
      ? `Otros: ${this.rsvp.restriccionOtros}`
      : this.rsvp.restriccion;

    if (this.guestRow) {
      this.sheetsService.submitRsvp(
        this.guestRow,
        this.rsvp.asisteBoda,
        this.rsvp.nombresBoda,
        this.rsvp.asisteDesenguayabe,
        this.rsvp.nombresDesenguayabe,
        restriccionFinal,
        this.rsvp.mensaje
      ).subscribe({
        next: () => { this.rsvpEnviado = true; },
        error: () => { this.rsvpEnviado = true; } // Mostramos éxito aunque el sheet falle (fallback local)
      });
    } else {
      // Sin fila conocida (acceso directo sin link personalizado): solo muestra éxito local
      this.rsvpEnviado = true;
    }
  }

  get rsvpClosed(): boolean {
    return new Date() >= new Date('2026-08-04T00:00:00');
  }

  editRsvp(): void {
    this.rsvpEnviado = false;
  }

  toggleGuestName(name: string, list: string[]): void {
    const idx = list.indexOf(name);
    if (idx > -1) { list.splice(idx, 1); } else { list.push(name); }
  }

  isGuestSelected(name: string, list: string[]): boolean {
    return list.includes(name);
  }

  openPhoto(foto: FotoPreboda): void {
    this.selectedPhoto = foto;
  }

  closePhoto(): void {
    this.selectedPhoto = null;
  }

  initSwiper(): void {
    new Swiper('.myPrebodaSwiper', {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
      freeMode: true,
      grabCursor: true,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      speed: 6000,
      breakpoints: {
        320: { slidesPerView: 1.5 },
        640: { slidesPerView: 2 },
        960: { slidesPerView: 3 }
      }
    });
  }
}


import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BodaSheetsService } from '../services/boda-sheets.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @ViewChild('videoEl', { static: true }) videoEl: ElementRef<HTMLVideoElement>;

  guestName = '';
  playing = false;
  transitioning = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sheetsService: BodaSheetsService
  ) {}

  get guestNameFormatted(): string {
    const names = this.guestName
      ? this.guestName.split(',').map(n => n.trim()).filter(n => n.length > 0)
      : [];
    if (names.length === 0) { return ''; }
    if (names.length === 1) { return names[0]; }
    return names.slice(0, -1).join(', ') + ' y ' + names[names.length - 1];
  }

  ngOnInit() {
    const key = this.route.snapshot.paramMap.get('id') || '';
    this.sheetsService.getGuestByKey(key).subscribe(info => {
      this.guestName = info ? info.name : '';
      // Persiste en sessionStorage para que WeddingComponent lo use en el RSVP
      if (info) {
        sessionStorage.setItem('guestName', info.name);
        sessionStorage.setItem('guestRow', String(info.row));
      }
    });
  }

  onVideoClick() {
    if (this.transitioning) { return; }
    const video = this.videoEl.nativeElement;

    if (!this.playing) {
      video.currentTime = 0;
      this.playing = true;
      video.play().catch(() => {});

      // Stop at exactly 3 seconds
      const onTime = () => {
        if (video.currentTime >= 5) {
          video.pause();
          video.removeEventListener('timeupdate', onTime);
          this.startTransition();
        }
      };
      video.addEventListener('timeupdate', onTime);

      // Fallback: if video is shorter than 3s
      video.addEventListener('ended', () => {
        video.removeEventListener('timeupdate', onTime);
        this.startTransition();
      }, { once: true });
    }
  }

  private startTransition() {
    this.transitioning = true;
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 900);
  }
}


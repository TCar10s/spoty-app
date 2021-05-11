import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() items: any[] = [];

  constructor(private router: Router) {}

  idRoute(item): any {
    if (item.type === 'track') {
      const songId = item.id;
      this.router.navigate(['/song', songId]);
    } else {
      const songId = item.id;
      this.router.navigate(['/artist', songId]);
    }
  }
}

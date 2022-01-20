import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/services/interfaces/artist';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  artists: Artist[] = [];
  loading: boolean;
  showAlert: boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.getArtists();
  }

  getArtists(): void {
    this.spotify.getArtists().subscribe(
      (artists) => {
        this.artists = artists;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.showAlert = true;
      }
    );
  }
}

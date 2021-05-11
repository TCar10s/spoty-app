import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  tracks: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.getArtists();
  }

  getArtists(): any {
    this.spotify.getArtists().subscribe((data: any) => {
      console.log(data);
      this.tracks = data;
      this.loading = false;
    });
  }
}

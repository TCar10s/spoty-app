import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent {
  artist: any = {};
  topTraks: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService, private router: ActivatedRoute) {
    this.loading = true;
    this.router.params.subscribe((params) => {
      this.getArtist(params.id);
      this.getTopTraks(params.id);
    });
  }

  getTopTraks(id: string): any {
    this.spotify.getTopTracks(id).subscribe((topTraks) => {
      this.topTraks = topTraks;
      this.loading = false;
    });
  }

  getArtist(id: string): any {
    this.spotify.getArtist(id).subscribe((artist) => {
      this.artist = artist;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  tracks: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {}

  search(term: string): any {
    this.loading = true;
    this.spotify.getSongs(term).subscribe((data): any => {
      this.tracks = data;
      this.loading = false;
    });
  }
}

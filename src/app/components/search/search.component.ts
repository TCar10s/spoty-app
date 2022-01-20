import { Component } from '@angular/core';
import { Track } from 'src/app/services/interfaces/top-traks';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  tracks: Track[];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    this.tracks = [];
  }

  search(term: string): any {
    this.loading = true;
    this.spotify.getSongs(term).subscribe((data): any => {
      this.tracks = data;
      this.loading = false;
    });
  }
}

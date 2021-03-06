import { Component, OnInit } from '@angular/core';
// Importamos el activatedRoute para saber cuál es la ruta activa.
import { ActivatedRoute } from '@angular/router';
import { Track } from 'src/app/services/interfaces/top-traks';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styles: [],
})
export class SongComponent {
  track: Track;
  loading: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    /*
      Nos suscribimos a los parametros de la ruta
      para ver los cambios y obtener el ID.
    */
    this.loading = true;
    this.router.params.subscribe((params) => {
      this.getSong(params.id);
    });
  }

  getSong(id: string): any {
    this.spotify.getSong(id).subscribe((song) => {
      this.track = song;
      this.loading = false;
    });
  }
}

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SongComponent } from './components/song/song.component';
import { ArtistComponent } from './components/artist/artist.component';

// Este archivo solo contiene la definición de rutas que usaré en mi APP.

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    // Recibiremos el parametro ID
    { path: 'song/:id', component: SongComponent },
    { path: 'artist/:id', component: ArtistComponent },
    // Cualquier otro parth vacio será redirigido al Home.
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
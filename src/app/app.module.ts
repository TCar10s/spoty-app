import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SongComponent } from './components/song/song.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TruncatePipe } from '../pipes/truncate.pipe';
/* ---Rutas---
  En este archivo 'app.module.ts' se debe agregar el modulo de routes.

  Para ello tambiém es necesario importar el RouterModule y luego definirlo en
  los imports como 'RouterModule.forRoot(nombreRoutes)'
*/
import { ROUTES } from './app.routes';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

// Components
import { CardComponent } from './components/card/card.component';
import { ArtistComponent } from './components/artist/artist.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    SongComponent,
    NavbarComponent,
    TruncatePipe,
    NoimagePipe,
    CardComponent,
    LoadingComponent,
    ArtistComponent,
    DomseguroPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    /*
      Añadimos el literal {useHash: true} esto añadirá un # a la ruta, que es un viejo truco de 
      los navegadores para evitar que el navegador recargue la pagina. 
    */
    RouterModule.forRoot(ROUTES, { useHash: true }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

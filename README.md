# Spotiapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Bearer Spotify API

Haciendo uso de la [API de spotify](https://developer.spotify.com/documentation/web-api/quick-start/) se debe generar el `access_token` ( Bearer ) y enviarlo en el header en cada petición, herramientas como `Postman` pueden ayudarte con ello. Debes proporcionar el `grant_type`, `client_id` y `client_secret` en el body
de la petición `POST`.

```
const headers = new HttpHeaders({
      Authorization:
        'Bearer ...',
    });
```
El `access_token` generado expira cada hora.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

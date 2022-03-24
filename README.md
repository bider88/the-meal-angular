# TheMeal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Requisitos para probar la aplicación
  - Crear una aplicación de firebase.
  - Copiar el objeto con los valores de conexión, projectId, apiKey, storageBucket, etc... En `src/environments/config-firebase.ts`.
  - Activar la opción de Firestore en Firebase (Sólo se usa para guardar información del usuario).
  - Instalar dependencias con:
  ```
  $ npm install
  ```
  - Levantar la aplicación:
  ```
  $ ng serve --open
  ```
  - Crear una cuenta con un correo y contraseña para acceder (Correo: user@user.com  Contraseña: rootroot).

  PD: También se puede probar la aplicación deployada en Firebase con la URL [https://the-meal-test.web.app](the-meal-test.web.app)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

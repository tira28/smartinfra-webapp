# Port of Rotterdam Frontend Application 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

## Installation 
List of prerequisite softwares that needs to be installed: 
1. NodeJS and Node Package Manager (NPM)
2. TypeScript 
3. AngularCLI 

#### NodeJS and NPM (Node Package Manager)
Please refer to this webpage: https://nodejs.org/en/ to install NodeJS 

#### TypeScript 
* Please refer to this webpage: https://www.typescriptlang.org/index.html#download-links to install TypeScript. 
* In case you need to use node/javascript library, you can find the definition file on the following page, so that you can use the module on TypeScript way. 

#### Angular CLI 
Please refer to this webpage: https://cli.angular.io/ to install Angular CLI

#### NPM modules
After these softwares are installed, install npm modules dependencies by using ```$
npm install``` on the root folder of the angular application. This needs to be done, whenever new modules are installed on Angular application.  


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

* Example of testing for Angular application can be seen on the following page: 
  * https://angular.io/guide/testing (examples from Angular 2 team)
  * http://www.discoversdk.com/blog/writing-unit-tests-in-angular-2 (example from community)
* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Development 
### CSS library 
* This app utilized Materialize CSS library: http://materializecss.com/getting-started.html
* In order to find typescript definition for materialize-css library, please find the documentation here: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/materialize-css

### DOM Manipulation 
If you need to do DOM manipulation on angular, the following page describes that explains how to modify DOM: https://blog.angularindepth.com/exploring-angular-dom-abstractions-80b3ebcfc02

### GIT Management 
There will be two branches in the remote: 
1. Master
2. Development 

* Master is a branch for being used as one of toolchains for production. 
* Development is a branch where people use it to develop the app. Every pull and push request related to de elopment is made to development branch. Once reviewed, changes on development branch will be merged on master branch. 



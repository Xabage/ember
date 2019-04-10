# twitch-app

## Fuente: 
* https://github.com/betocantu93/twitch-app
* https://www.youtube.com/watch?v=eHOSY_gNPKI


<img src="https://github.com/Xabage/ember/blob/master/twitch-app/app/imagenes/top20.png" width="50%">



<img src="https://github.com/Xabage/ember/blob/master/twitch-app/app/imagenes/gta.png" width="50%">

## Demo

* http://xabage-twitch.surge.sh/

## Funciones

Aplicación en ember que utiliza la API de Twitch (htt://dev.twitch.tv) para mostrar el top 20 de juegos y ver que jugadores están
jugando en estos momentos y acceder a todos sus videos.

Para poder acceder es necesario tener una cuenta de Twitch y entrar en Twitch developers. Crear un nuevo proyecto y con la clave (your dashboard/tu aplicación/manage/Client-ID)
sustituirla en app/adapters/application y en Client-ID poner tu propia clave.


## Tecnología
* ember-cli: 3.8.1
* Ember js : https://emberjs.com/
* Ember paper: http://miguelcobain.github.io/ember-paper/
* Twitch: htt://dev.twitch.tv
* Surge: https://surge.sh/
* Yarn: https://yarnpkg.com/lang/en/


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd twitch-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

# winstons npm-build-boilerplate


* [Checklista nya projekt](#Checklista-nya-projekt)
* [Introduktion](#Introduktion)
* [Beroenden (dependencies)](#Beroenden-(dependencies))
* [Lokal setup](#Lokal-setup)
* [Paket som används](#Paket-som-används)
* [Tasks som kan köras](#Tasks-som-kan-köras)
* [Konfiguration](#Konfiguration)
* [Versionshantering](#Versionshantering)
* [Versioner som används](#Versioner-som-används)
* [Extra steg för Windows](#Extra steg för Windows)

## Checklista nya projekt

- Uppdatera readme
- Byt title i <header>
- Uppdatera jQuery cdn inn-länkning från google https://developers.google.com/speed/libraries/#jquery

## Introduktion
Exempelprojekt som visar på hur [npm](https://www.npmjs.com) kan användas som task runner för att automatisera och effektivisera arbetet. 

ursprunglig källa: [https://github.com/damonbauer/npm-build-boilerplate/blob/master/README.md](https://github.com/damonbauer/npm-build-boilerplate/blob/master/README.md)

## Beroenden (dependencies)
### Node.js
[https://nodejs.org](https://nodejs.org)

### node package manager (npm)
[https://www.npmjs.com](https://www.npmjs.com)

## Lokal 'setup'
För att komma igång:
### Installera node.js och npm

Om node.js och npm inte redan är installerat på din dator så ladda ner node.js från [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
Välj det paket som mappar ditt behov.

För att testa om node.js är installerat öppna ett terminal-fönster och kör:

`node -v`

Så bör den installerade node-versionen skrivas ut; tex:

`v4.3.0`

npm kommer med node.js. för att kontrollera version kör:

`npm -v`

och du bör se vilken version av npm du har installerat; tex:

`3.7.1`

(vid behov) för att uppdatera till senaste version av npm kör:

`npm install npm -g`

(vid behov) för att tömma npm-cache kör:

`npm cache clear`

När node.js och npm är installerat ställ dig i projektmappen i terminal-fönstret och kör för att se om det finns nyare versioner av paketen:

`npm outated`

Ersätt alla versioner i package.json (OBS, ej "juice-pack") med *, e.g:

`"browser-sync": "*"`

För att uppdatera paketen till senaste vertionerna kör:

`npm update --save-dev`

Kör sist för att installera paketen:

`npm install`

så hämtas och installeras de paket som behövs. Kommandot startar även en watch-service som automatiskt kompilerar din sass till css samt uppdaterar webbläsaren när ändringar sker i sass, js och html-filer.

## Extra steg för Windows
###node-gyp
...

...

[node-gyp](https://github.com/nodejs/node-gyp) (**Windows kräver oftast flera manuella steg**)


##Paket som används
* [browser-sync](https://github.com/Browsersync/browser-sync) 
* [imagemin-cli](https://github.com/imagemin/imagemin-cli)
* [node-sass](https://github.com/sass/node-sass)
* [npm-run-all](https://github.com/mysticatea/npm-run-all)
* [onchange](https://github.com/Qard/onchange)


##Tasks som kan köras
Följande 'tasks' kan köras genom att skriva 

`npm run task`

i terminalen där `task` kan ersättas av:

### `clean`
  `rm -f gui/{css/*,js/*,images/*}`

  Tar bort alla filer i gui-mappen om man vill bygga om från start.

### `scss`
  `node-sass -o gui/css gui-source/scss`

  Kompilerar Scss to CSS utan några inställningar


### `imagemin`
  `imagemin src/images`

  Komprimerar alla bilder.


### `serve`
  `browser-sync start --server --files 'dist/css/*.css, dist/js/*.js, **/*.html, !node_modules/**/*.html'`

  Startar en ny server and kollar efter html- css- och js-ändringar i gui-mappen

### `build:css`
  `npm run scss`

  Alias till `scss`. Kompilerar Scss to CSS utan några inställningar. (Kan i framtiden kombinera med andra tasks tex preprefix, minify, lint etc)

### `build:images`
  `npm run imagemin && npm run icons`

  Alias till `imagemin`. Komprimerar alla bilder. (Kan i framtiden kombinera med andra tasks tex skapa sprites etc)

### `build:all`
  `npm run build:css && npm run build:images`

  Alias för att köra alla `build`-kommandon

### `watch:css`
  `onchange 'src/**/*.scss' -- npm run build:css`

  Kollar efter ändringar i .scss-filer i `gui-source`-mappen och kör `build:css` om någon ändring upptäcks.

### `watch:js`
  `onchange 'src/**/*.js' -- npm run build:js`

  Kollar efter ändringar i .js-filer i `gui-source`-mappen och kör `build:js` om någon ändring upptäcks.

### `watch:all`
  `npm-run-all -p serve watch:css watch:js`

  Kör följande tasks: `serve`, `watch:css` & `watch:js` när en .scss or .js fil ändras i `gui-src`, tasken kompilerar ändringarna till  `gui`-mappen, och meddelar servern vilket innebär att en ansluten webbläsare kommer att uppdateras med ändringarna.

### `postinstall`
  `npm run build:all && npm run watch:all`

  Kör `watch:all` efter `npm install` kört klart

##Versioner som används
### SASS
Version 3.4.2 eller senare kompatibel version

##Versionshantering
GIT/SVN etc... 
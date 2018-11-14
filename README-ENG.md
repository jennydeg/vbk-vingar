# Winston's npm-boilerplate

* [Introduction](#Introduction)
* [Dependencies](#Dependencies)
* [Local setup - Getting started](#Local-setup---Getting-started)
* [Project installation](#Project-installation)
* [Packages includeds](#Packages-included)
* [Tasks available in boilerplate](#Tasks-available-in-boilerplate)
* [Code repository](#Code-repository)

## Introduction

**Customer:** Active solution

**Work description:** Static responsive frontend templates

**Developer:** Camilla Kümpel [Frontend developer]

## Dependencies
- **Node.js** [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

- **Node package manager (npm)** available in your `PATH`

- **Sass** [http://sass-lang.com/install](http://sass-lang.com/install) Current project version: 3.4.2 

## Local setup - Getting started:

### Installing node.js and npm

Check your local environment for pre-installed node.js/npm versions:

#### node.js

`$ node -v` ..should return.. `vX.X.X`

- **Current project version: v.5.4.1**

#### npm

`$ npm -v` ..should return.. `X.X.X`

- **Current project version: 3.8.0**

---

In the case where node.js and npm are not already installed, links to their sites can be found in [dependencies](#Dependencies) list.

---

#### Updating versions

Despite current project version it is best to stay up to date to avoid bugs and security issues. Updating can be done through the following command:

`$ npm install npm -g`

### Extra setup for Windows

Windows does not come pre-installed with pyton (like a mac does) that in this setup is needed for running the npm sass compiler.
Since sass is a ruby component and does not use javascript like less does, depending on your computer's configuration you might need to install extra dependencies.

Node-gyp is an example of needed packages:

`$ npm install -g node-gyp` [https://github.com/nodejs/node-gyp](https://github.com/nodejs/node-gyp)

## Project installation

When installed and up to date, select your favourite terminal, cd to the project location folder and run the following command:

`$ npm install`

This will install all the dependencies for the project and put the in the project folder. These folders are pre-ignored in the git ignore file and should not be included at check-in.


## Packages included
* [browser-sync](https://github.com/Browsersync/browser-sync) 
* [imagemin-cli](https://github.com/imagemin/imagemin-cli)
* [node-sass](https://github.com/sass/node-sass)
* [npm-run-all](https://github.com/mysticatea/npm-run-all)
* [onchange](https://github.com/Qard/onchange)

## Tasks available in boilerplate

All tasks available can be found in the package.json under section `scripts`. Listed here for convenience.

The most basic to get the server running and if you don't need anything else, all you need to run is the following:

#### `$ npm start`

---

### Detailed tasks

The basic command is:

`$ npm run ´task´`

where the following commands are to be replaced by `´task´` and are often shortcuts for other commands for convenience. The full command can be found in the package.json file.

- `clean` - Removes all files from the output gui folder.

- `scss` - Compiles sass/scss to CSS without setting to destination folder

- `imagemin` - Compress images

- `serve` - Starts a new server and watches for html- css- och js-changes in the gui-source folder. Updates browser on detected changes

- `build:css` - An alias for `scss`. For custom configuration

- `build:images` - An alias for `imagemin`. For custom configuration

- `build:all` - An alias for all `build`. Add to this line in the config if added.

- `watch:css` - Watches for `scss` changes in any `gui-source` folder. Runs `build:css` on changes

- `watch:js` - Watches for changes in any `js` files in the `gui-source` folder. Runs `build:js` on changes

- `watch:all` - Runs `serve`, `watch:css` & `watch:js` which 

- `postinstall` - Runs `watch:all` after `npm install` has finished

## Code repository

Active solution is currently being stored in Bitbucket

- [https://bitbucket.org/winstondcab/active-solution-webb](https://bitbucket.org/winstondcab/active-solution-webb)
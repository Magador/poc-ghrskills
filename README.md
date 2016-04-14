# Proof-of-Concept GHRSkills

## Start up

### Prerequisites

This project requires [NodeJS](https://nodejs.org/en/), [Node Package Manager (NPM)](https://www.npmjs.com/) (normally comes with NodeJS), [Bower](http://bower.io), ang [Gulp](http://gulpjs.com/).

To install Bower and Gulp through NPM:

```
npm install -g bower
npm install -g gulp-cli
```
NPM will install Bower and Gulp globally, so you can reuse them in other projects !

```
git clone https://github.com/Magador/poc-ghrskills.git
cd poc-ghrskills
npm install
bower install
```

### Run the proof of concept

```
gulp
```

It will serve the app through [`browser-sync`](https://browsersync.io) then open a new tab with the default OS Internet app to [`http://localhost:3000`](http://localhost:3000)
Each time a `.css`, `.html`, `.js`, `.json` or images change, the tab reloads.

## Changes from [w20-material-theme default app](https://github.com/Magador/w20-material-theme/tree/demo)

### Changes in order for the default app to run

- Change `bower.json` and `package.json` manifest names to "poc-ghrskills"
- Change `application.id` to `poc-ghrskills` in `w20.app.json`
- Change main fragment filename to `poc-ghrskills-app`
  - Propagate name changed to `w20.app.json`
  - Rename fragment manifest name to `poc-ghrskills-app.w20.json`
- Change main fragment manifest id to `poc-ghrskills-app`
- Change i18n message keys to match new fragment name
- Change fragment id to all scripts inside the fragment
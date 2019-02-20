# Wem gehört der Boxi?

Libaries used:

Bootstrap 4
https://github.com/russellgoldenberg/scrollama#scrollamajs
Mapbox 0.52.0



## Prerequisites on local computer

install node js:
https://nodejs.org/en/

install git:
https://git-scm.com/

install code editor like atom or sublime:
https://www.sublimetext.com/

download this repository:

```
git clone LINKTOTHISPAGE
```

to edit files open directory in terminal:

type "cd" and then drag folder inside and hit enter

then type:
```
sublime .
```

and hit enter again


### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

this file will create a static version that works without all this inside a new order "build".
these files can be uploaded to a webserver via ftp and used.
They dont work offline.

### Git Hub commands:

nachdem änderungen gemacht wurden:

```
git add .
```
dann commite mit kommentar:

```
git commit -m "WAS HAST DU GEMACH"
```

Hochladen zu git hub:
```
git push
```

### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.

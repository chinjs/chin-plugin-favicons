# chin-plugin-favicons

[![npm](https://img.shields.io/npm/v/chin-plugin-favicons.svg?longCache=true&style=flat-square)](https://www.npmjs.com/package/chin-plugin-favicons)
[![npm](https://img.shields.io/npm/dm/chin-plugin-favicons.svg?longCache=true&style=flat-square)](https://www.npmjs.com/package/chin-plugin-favicons)
[![Build Status](https://img.shields.io/travis/chinjs/chin-plugin-favicons.svg?longCache=true&style=flat-square)](https://travis-ci.org/chinjs/chin-plugin-favicons)
[![Coverage Status](https://img.shields.io/codecov/c/github/chinjs/chin-plugin-favicons.svg?longCache=true&style=flat-square)](https://codecov.io/github/chinjs/chin-plugin-favicons)

[chin](https://github.com/chinjs/chin) plugin using [favicons](https://github.com/evilebottnawi/favicons).

## Installation
```shell
yarn add -D chin chin-plugin-favicons
```

## Usage

```js
import favicons from 'chin-plugin-favicons'

const ext = favicons({ nameAsDir: true, config: {} })

export default {
  processors: { png: ext }
  after: () => {
    const html = ext.after()
  }
}
```

- `nameAsDir: boolean` [default: false] (ex. `[name].png` => `[name]/**`)

- `config: {}` favicons's.

- `ext.after()` return `response.html` (Array of html elements strings).

## License
MIT (http://opensource.org/licenses/MIT)

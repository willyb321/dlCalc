# dlcalc [![Build Status](https://travis-ci.org/willyb321/dlCalc.svg?branch=master)](https://travis-ci.org/willyb321/dlcalc)

> Calculate DL time in the commandline


## Install

```
$ npm install --save dlcalc
```


## Usage

```js
const dlcalc = require('dlcalc');

dlcalc('unicorns');
//=> 'unicorns & rainbows'
```


## API

### dlcalc(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global dlcalc
```

```
$ dlcalc --help

  Usage
    dlcalc [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ dlcalc
    unicorns & rainbows
    $ dlcalc ponies
    ponies & rainbows
```


## License

MIT © [willyb321](http://tehsuperwilly.tech)

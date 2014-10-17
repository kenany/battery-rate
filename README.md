# battery-rate

Get a battery's (dis)charge rate. Probably only works on Linux.

## Example

``` javascript
var batteryRate = require('battery-discharge');

batteryRate('BAT1', function(error, rate) {
  if (error) {
    throw error;
  }

  console.log(rate);
  // => -9.106
});
```

## Installation

``` bash
$ npm install battery-rate
```

## API

``` javascript
var battery-rate = require('battery-rate');
```

### `battery-rate([battery='BAT0'], callback)`

Calls `callback(error, rate)`, where `error` is any _Error_ encountered and
_Number_ `rate` is the current rate of charge/discharge in watts of _String_
`battery` (which defaults to `'BAT0'`).
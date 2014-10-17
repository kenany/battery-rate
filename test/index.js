var batteryDischarge = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var isNumber = require('lodash.isnumber');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(batteryDischarge));
});

test('returns discharge rate in watts', function(t) {
  t.plan(2);
  batteryDischarge('BAT1', function(error, discharge) {
    t.error(error);
    t.ok(isNumber(discharge));
  });
});
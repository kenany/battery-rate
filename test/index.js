'use strict';

const test = require('tape');
const isFunction = require('lodash.isfunction');
const isNumber = require('lodash.isnumber');

const batteryDischarge = require('../');

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

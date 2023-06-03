'use strict';

const path = require('path');
const firstLine = require('first-line');
const isFunction = require('lodash.isfunction');
const batteryStatus = require('battery-status');
const batteryPath = require('battery-path');

function batteryRate(battery, callback) {
  if (isFunction(battery)) {
    callback = battery;
    battery = 'BAT0';
  }

  var bstr = path.resolve(batteryPath(battery), 'power_now');
  getRate(bstr, function(error, rate) {
    if (error) {

      // try alternate location
      bstr = path.resolve(batteryPath(battery), 'current_now');
      getRate(bstr, callback);
      return;
    }

    callback(null, rate);
  });

  function getRate(location, callback) {
    firstLine(location, function(error, rate) {
      if (error) {
        callback(error);
        return;
      }

      batteryStatus(battery, function(error, status) {
        if (error) {
          callback(error);
          return;
        }

        rate = parseFloat(rate.toString());

        // rate is in muWatts, so convert to Watts
        rate *= Math.pow(10, -6);

        if (status === 'Discharging') {
          callback(null, -rate);
          return;
        }
        callback(null, rate);
      });
    });
  }
}

module.exports = batteryRate;

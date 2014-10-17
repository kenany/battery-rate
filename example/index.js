var batteryRate = require('../');

batteryRate('BAT1', function(error, rate) {
  if (error) {
    throw error;
  }

  console.log(rate);
  // => -9.106
});
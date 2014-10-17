var batteryRate = require('../');

batteryRate('BAT1', function(error, batteryRate) {
  if (error) {
    throw error;
  }

  console.log(batteryRate);
});
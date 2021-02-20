const NodeGeocoder = require('node-geocoder');
const options = {
  provider: `mapquest`,
  apiKey: `2KGyp0yw2UIa3N2YjAOKCiZyhFX8q3eB`,
  formatter: null,
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;

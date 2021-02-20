const Property = require('../models/Property');
const geocoder = require('../utils/geocoder');
exports.createProperty = async data => {
  const { address } = data;

  const [loc] = await geocoder.geocode(address);
  const lati = loc.latitude;
  const long = loc.longitude;
  const location = {
    type: 'Point',
    coordinates: [long, lati],
    formatedAddress: loc.formattedAddress,
  };
  const property = await Property.create({ ...data, location });
  return property;
};

exports.getProperties = async filter => {
  const properties = await Property.find({});
  return properties;
};
exports.getProperty = async id => {
  const property = await Property.findById(id);
  if (!property) {
    throw new Error('Property Not Found');
  }
  return property;
};

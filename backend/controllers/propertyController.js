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
  console.log(filter);
  let { sort, page, limit } = filter;
  let query;
  //Copy filter
  const reqQuery = { ...filter };
  if (reqQuery.title) {
    // const q = new RegExp(reqQuery.title);
    const q = reqQuery.title;
    reqQuery.title = {
      $regex: q,
      $options: 'i',
    };
  }
  // Fields to exclude
  const removeFields = ['sort', 'page', 'limit'];
  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach(param => delete reqQuery[param]);
  let queryStr = JSON.stringify(reqQuery);
  // Create operators ($gt, $gte, etc)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
  // Finding resource
  query = Property.find(JSON.parse(queryStr));
  // Srot
  if (sort) {
    const sortBy = sort.join(' ');
    query = query.sort(sortBy);
  }
  // Pagination
  page = page || 1;
  limit = limit || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Property.countDocuments();
  query = query.skip(startIndex).limit(limit);

  // Executing query
  const results = await query;
  return results;
};

exports.getProperty = async id => {
  const property = await Property.findById(id);
  if (!property) {
    throw new Error('Property Not Found');
  }
  return property;
};

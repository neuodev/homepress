export const getLocations = properties => {
  const features = [];
  for (let i = 0; i < properties.length; i++) {
    let property = properties[i];
    const location = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: property.location.coordinates,
      },
    };
    features.push(location);
  }
  return features;
};

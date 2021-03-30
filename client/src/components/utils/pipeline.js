export const pipeline = filterValues => {
  const {
    title,
    status,
    amenities,
    countery,
    price,
    area,
    beds,
    baths,
    sort,
  } = filterValues;

  let filter = {};
  if (title) {
    filter.title = title;
  }
  if (amenities) {
    filter.amenities = {
      in: [...amenities],
    };
  }
  if (countery) {
    filter.city = countery;
  }

  if (price) {
    filter.price = {
      gte: price[0],
      lte: price[1],
    };
  }
  if (area) {
    filter.area = {
      gte: area[0],
      lte: area[1],
    };
  }

  if (beds) {
    filter.beds = beds;
  }
  if (baths) {
    filter.baths = baths;
  }
  if (status) {
    filter.status = status;
  }
  if (sort) {
    filter.sort = sort;
  }
  return filter;
};

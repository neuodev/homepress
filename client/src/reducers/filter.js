import {
  ADD_AMENITIES,
  AREA,
  BATHS,
  BEDS,
  CITY,
  PRICE,
  RESET_FILTER,
  SORT,
  STATUS,
  TITLE,
} from '../actions/actionsType';

export const filter = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_AMENITIES:
      return {
        ...state,
        amenities: payload,
      };
    case TITLE:
      return {
        ...state,
        title: payload,
      };

    case CITY:
      return {
        ...state,
        city: payload,
      };

    case PRICE:
      return {
        ...state,
        price: payload,
      };

    case AREA:
      return {
        ...state,
        area: payload,
      };

    case BEDS:
      return {
        ...state,
        beds: payload,
      };

    case BATHS:
      return {
        ...state,
        baths: payload,
      };

    case STATUS:
      return {
        ...state,
        status: payload,
      };
    case SORT:
      return {
        ...state,
        sort: payload,
      };

    case RESET_FILTER:
      return {};
    default:
      return state;
  }
};

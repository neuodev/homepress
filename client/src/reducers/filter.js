import {
  ADD_AMENITIES,
  AREA,
  BATHS,
  BEDS,
  COUNTERY,
  PRICE,
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

    case COUNTERY:
      return {
        ...state,
        countery: payload,
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
    default:
      return state;
  }
};

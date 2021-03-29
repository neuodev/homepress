import {
  ADD_AMENITIES,
  AREA,
  BATHS,
  BEDS,
  COUNTERY,
  PRICE,
  STATUS,
} from '../actions/actionsType';

export const filter = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_AMENITIES:
      const isExist = state.amenities.find(a => a === payload);
      let amenities;
      if (isExist) {
        amenities = state.amenities.filter(a => a !== payload);
      } else {
        amenities = [...state.amenities, payload];
      }
      return {
        ...state,
        amenities,
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

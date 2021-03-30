import { GET_LOCATIONS } from '../actions/actionsType';

export const locations = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_LOCATIONS:
      return {
        locations: payload,
      };
    default:
      return state;
  }
};

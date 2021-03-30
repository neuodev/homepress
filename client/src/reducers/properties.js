import {
  GET_SEACH_PROPERTY_FAIL,
  GET_SEACH_PROPERTY_SUCCESS,
} from '../actions/actionsType';
export const searchProperties = (
  state = {
    proprties: [],
  },
  { type, payload }
) => {
  switch (type) {
    case GET_SEACH_PROPERTY_SUCCESS:
      return {
        properties: payload,
      };
    case GET_SEACH_PROPERTY_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

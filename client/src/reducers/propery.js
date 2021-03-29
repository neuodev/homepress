import {
  GET_HOME_PROPERTY_FAIL,
  GET_HOME_PROPERTY_REQUEST,
  GET_HOME_PROPERTY_SUCCESS,
} from '../actions/actionsType';
export const homeProperty = (
  state = {
    proprties: [],
  },
  { type, payload }
) => {
  switch (type) {
    case GET_HOME_PROPERTY_REQUEST:
      return {
        loading: true,
      };
    case GET_HOME_PROPERTY_SUCCESS:
      return {
        loading: false,
        proprties: payload,
      };
    case GET_HOME_PROPERTY_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

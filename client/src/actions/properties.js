import { getLocations } from '../utils/getLocations';
import { GET_LOCATIONS, GET_SEACH_PROPERTY_SUCCESS } from './actionsType';

export const searchPropertiesAction = properties => dispatch => {
  const features = getLocations(properties);
  dispatch({ type: GET_SEACH_PROPERTY_SUCCESS, payload: properties });
  dispatch({ type: GET_LOCATIONS, payload: features });
};

import { combineReducers } from 'redux';
import { homeProperty, getProperty } from './propery';
import { filter } from './filter';
import { locations } from './locations';
export default combineReducers({
  homeProperty,
  getProperty,
  filter,
  locations,
});

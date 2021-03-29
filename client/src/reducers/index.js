import { combineReducers } from 'redux';
import { homeProperty, getProperty } from './propery';
import { filter } from './filter';
export default combineReducers({
  homeProperty,
  getProperty,
  filter,
});

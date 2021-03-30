import { combineReducers } from 'redux';
import { homeProperty, getProperty } from './propery';
import { filter } from './filter';
import { locations } from './locations';
import { searchProperties } from './properties';
import { favoriteList } from './favorite';
export default combineReducers({
  homeProperty,
  getProperty,
  filter,
  locations,
  searchProperties,
  favoriteList,
});

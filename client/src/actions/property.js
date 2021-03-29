import {
  GET_HOME_PROPERTY_FAIL,
  GET_HOME_PROPERTY_REQUEST,
  GET_HOME_PROPERTY_SUCCESS,
} from './actionsType';

import { gql } from '@apollo/client';
export const getHomeProperty = useQuery => dispatch => {
  dispatch({ type: GET_HOME_PROPERTY_REQUEST });
  const GET_PROPERTY = gql`
    query {
      properties(filter: { limit: 6 }) {
        id
        title
        beds
        baths
        area
        features {
          builtYear
        }
        price
        discount
        images
      }
    }
  `;


};

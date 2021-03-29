import { gql } from '@apollo/client';

export const GET_PROPERTY = gql`
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

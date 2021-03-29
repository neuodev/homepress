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

export const GET_PROPERTY_DETAILS = gql`
  query  {
    property(id: "606175707139ca1918ec5997") {
      title
      beds
      baths
      area
      price
      discount
      images
      description
      address
      location {
        type
        coordinates
      }

      features {
        parking
        security
        cctv
        conferenceHall
        heating
        cooling
        status
        stories
        swimmingPool
        garage
        builtYear
      }
      amenities
    }
  }
`;

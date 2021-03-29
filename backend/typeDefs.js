const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    properties(filter: FilterInput!): [Property]!
    property(id: ID!): Property!
  }

  type Mutation {
    createProperty(data: createPropertyInput): Property!
  }

  type Property {
    id: ID!
    type: String!
    title: String!
    price: Int!
    discount: Int
    description: String!
    address: String!
    images: [String!]!
    rooms: Int!
    builtYear: Int!
    area: Int!
    beds: Int!
    baths: Int!
    priceForSqft: Int!
    features: Features!
    amenities: [String!]!
    location: Location!
  }

  type Location {
    type: String!
    coordinates: [String]!
  }

  type Features {
    parking: Boolean
    security: Boolean
    cctv: Boolean
    conferenceHall: Boolean
    heating: Boolean
    cooling: Boolean
    status: String
    stories: String
    swimmingPool: Int
    garage: Int
    builtYear: Int
  }

  input createPropertyInput {
    title: String!
    price: Int!
    discount: Int
    description: String!
    address: String!
    images: [String!]!
    rooms: Int!
    builtYear: Int!
    area: Int!
    beds: Int!
    baths: Int!
    priceForSqft: Int!
    features: FeaturesInput!
    amenities: [String!]!
  }

  input FeaturesInput {
    parking: Boolean
    security: Boolean
    cctv: Boolean
    conferenceHall: Boolean
    heating: Boolean
    cooling: Boolean
    status: String
    stories: String
    swimmingPool: Int
    garage: Int
    builtYear: Int
  }

  input FilterInput {
    sort: [String!]
    page: Int
    limit: Int
    amenities: In
    city: String
    price: RangeInput
    area: RangeInput
    beds: Int
    baths: Int
    status: String
    title: String
  }
  input In {
    in: [String!]
  }
  input RangeInput {
    gte: Int
    lte: Int
  }
`;

module.exports = typeDefs;

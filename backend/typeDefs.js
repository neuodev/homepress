const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    properties: [Property]!
    property(id: ID!): Property!
  }

  type Mutation {
    createProperty(data: createPropertyInput): Property!
  }
  type Property {
    id: ID!
    title: String!
    price: Int!
    discount: Int
    description: String!
    address: String!
    images: [String!]!
    rooms: Int!
    builtYear: Int!
    area: Int!
    priceForSqft: Int!
    features: Features!
    amenities: [String!]!
    near: Near!
  }
  type Features {
    parking: Boolean
    security: Boolean
    cctv: Boolean
    conferenceHall: Boolean
    heating: Boolean
    cooling: Boolean
    status: Boolean
  }

  type Food {
    name: String!
    rating: Int!
  }
  type Education {
    name: String!
    rating: Int!
  }
  type homeservices {
    name: String!
    rating: Int!
  }

  type Near {
    food: [Food]!
    education: [Education]!
    homeservices: [homeservices]!
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
    priceForSqft: Int!
    features: FeaturesInput!
    amenities: [String!]!
    near: NearInput!
  }

  input NearInput {
    food: [FoodInput]!
    education: [EducationInput]!
    homeservices: [homeservicesInput]!
  }
  input FoodInput {
    name: String!
    rating: Int!
  }
  input EducationInput {
    name: String!
    rating: Int!
  }
  input homeservicesInput {
    name: String!
    rating: Int!
  }

  input FeaturesInput {
    parking: Boolean
    security: Boolean
    cctv: Boolean
    conferenceHall: Boolean
    heating: Boolean
    cooling: Boolean
    status: Boolean
  }
`;

module.exports = typeDefs;

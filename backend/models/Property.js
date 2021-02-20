const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const featuresSchema = new Schema({
  parking: {
    type: Boolean,
    default: false,
  },
  security: {
    type: Boolean,
    default: false,
  },
  cctv: {
    type: Boolean,
    default: false,
  },
  conferenceHall: {
    type: Boolean,
    default: false,
  },
  heating: {
    type: Boolean,
    default: false,
  },
  cooling: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['Active', 'Sold'],
  },
});
const PropertySchema = new Schema({
  title: {
    type: String,
    required: [true, 'Property Title is required'],
  },
  price: {
    type: Number,
    required: [true, 'Property price  is required'],
  },
  discount: {
    type: Number,
    required: true,
    default: 0,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere',
    },
    formatedAddress: String,
  },
  images: [
    {
      type: String,
      required: [true, 'Images is requries'],
      trim: true,
    },
  ],
  rooms: {
    type: Number,
    required: [true, 'Rooms Number is required'],
  },
  builtYear: {
    type: Number,
    required: [true, 'Built Year Number is required'],
  },
  area: {
    type: Number,
    required: [true, 'Area  is required'],
  },
  priceForSqft: {
    type: Number,
    required: [true, 'Rooms Number is required'],
  },
  features: featuresSchema,
  amenities: [{ type: String, required: true }],
  near: {
    food: [
      {
        name: {
          type: String,
          required: [true, 'Restaurant Name is required'],
        },
        rating: {
          type: Number,
          requried: [true, 'Rating is required'],
        },
      },
    ],
    education: [
      {
        name: {
          type: String,
          required: [true, 'Name is required'],
        },
        rating: {
          type: Number,
          requried: [true, 'Rating is required'],
        },
      },
    ],
    homeservices: [
      {
        name: {
          type: String,
          required: [true, 'Name is required'],
        },
        rating: {
          type: Number,
          requried: [true, 'Rating is required'],
        },
      },
    ],
  },
});

const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;

import React from 'react';
import Steps from './Steps';

const types = [
  {
    path: '/addListing/create?type=apartment',
    image: '/images/aparment.jpg',
  },
];

const Listingtype = () => {
  return (
    <div>
      <Steps activeStep={1} />
    </div>
  );
};

export default Listingtype;

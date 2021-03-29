import React from 'react';
import { Link } from 'react-router-dom';
import Steps from './Steps';

const types = [
  {
    path: '/addListing/create?type=apartment',
    image: '/images/apartment.jpg',
    title: 'Apartment',
  },
  {
    path: '/addListing/create?type=offices',
    image: '/images/office.jpg',
    title: 'Offices',
  },
  {
    path: '/addListing/create?type=townhome',
    image: '/images/donwhome.jpg',
    title: 'Townhome',
  },
  {
    path: '/addListing/create?type=houses',
    image: '/images/house.jpg',
    title: 'Houses',
  },
];

const Listingtype = () => {
  return (
    <div>
      <Steps activeStep={1} />

      <div className='container mx-auto max-w-screen-lg'>
        <div className='grid gap-5 grid-cols-12 px-4 my-10'>
          {types.map((type, idx) => (
            <Link
              to={type.path}
              className='col-span-12 sm:col-span-6 md:col-span-4 h-40 flex items-center justify-center relative shadow-lg  rounded-tl-xl rounded-br-xl  hover:shadow-2xl  transition-shadow duration-300 overflow-hidden  cursor-pointer'
              id='overlay'
              style={{
                background: `url(${type.image}) center center/cover`,
              }}
              key={idx}>
              <h1 className='text-white hover:bg-white transition-all duration-300 hover:text-gray-800 w-full h-full flex items-center justify-center text-4xl absolute z-50'>
                <p> {type.title}</p>
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listingtype;

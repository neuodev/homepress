import React from 'react';
import PropertyCard from './PropertyCard';

const Properties = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex items-center flex-col justify-center mt-6'>
        <h1 className='text-5xl font-medium text-gray-800 mb-3'>Properties</h1>
        <p className='text-lg font-light max-w-xl px-5'>
          Sartorial chicharrones blue bottle taxidermy helvetica ethical, beard
          swag offal kinfolk. You probably haven’t heard of them hell of offal
          mlkshk messenger bag squid plaid tousled.
        </p>
      </div>

      <div className='grid grid-cols-12 gap-4 px-3 my-10 max-w-screen-xl mx-auto'>
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
      <div className='flex items-center justify-center mb-3'>
        <button className='bg-blue-600 text-white  px-6 py-3 rounded-md font-medium lg:text-xl focus:outline-none focus:ring uppercase tracking-wider   '>
          view more
        </button>
      </div>
    </div>
  );
};

export default Properties;

import React from 'react';
import Form from './Form';

const Description = ({ description }) => {
  return (
    <div className='bg-white'>
      <div className='container mx-auto max-w-screen-lg px-5 py-9 grid grid-cols-12 gap-5'>
        <div className='col-span-12 lg:col-span-8'>
          <h1 className='text-3xl font-semibold  text-gray-700  mb-4  '>
            {' '}
            Description
          </h1>
          <p>{description}</p>
        </div>
        <div className='hidden lg:block lg:col-span-4 '>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Description;

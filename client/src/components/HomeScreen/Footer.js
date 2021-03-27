import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white py-10  px-5'>
      <div className='md:flex flex-row-reverse justify-between items-center container mx-auto  max-w-screen-lg '>
        <div className='mb-8 w-full md:w-1/2 max-w-xl'>
          <h1 className='text-xl font-semibold mb-3'>Subscribe</h1>
          <div className='flex items-center   w-full bg-gray-700 px-4 mb-2  '>
            <i class='fa fa-user  mr-3 ' aria-hidden='true'></i>
            <input
              className='bg-gray-700  w-full py-2 px-4 focus:outline-none focus:ring-blue-300'
              type='text'
              placeholder='First Name , Last Name *'
            />
          </div>
          <div className='flex items-center   w-full bg-gray-700 px-4 mb-2  '>
            <i class='fa fa-envelope  mr-3 ' aria-hidden='true'></i>
            <input
              className='bg-gray-700  w-full py-2 px-4 focus:outline-none focus:ring-blue-300'
              type='text'
              placeholder='your Email Address'
            />
          </div>
          <button className='w-full py-3 px-5 bg-blue-700 text-sm  uppercase tracking-wider '>
            subscribe
          </button>
        </div>
        <div className='flex flex-col items-start mb-6'>
          <h1 className='text-xl font-semibold tracking-wide mb-4'>
            Popular Searches
          </h1>
          <p className='border-b border-transparent text-sm  hover:border-gray-300 cursor-pointer   inline-block  text-gray-300 '>
            Apartment for Rent Apartment
          </p>
          <p className='border-b border-transparent text-sm  hover:border-gray-300 cursor-pointer   inline-block text-gray-300  '>
            {' '}
            Low to hide Offices
          </p>{' '}
          <p className='border-b  border-transparent text-sm  hover:border-gray-300 cursor-pointer  inline-block text-gray-300  '>
            for Buy
          </p>
          <p className='border-b  border-transparent text-sm  hover:border-gray-300 cursor-pointer  inline-block text-gray-300  '>
            Offices for Rent
          </p>
          <p className='border-b border-transparent text-sm  hover:border-gray-300 cursor-pointer   inline-block  text-gray-300 '>
            More
          </p>
        </div>
      </div>
      <div className='md:flex items-center justify-between container mx-auto border-t pt-6 max-w-screen-lg'>
        <p>
          Copyright © 2021. HomePress – Real Estate WordPress Theme by Ahmed
          Ibrahim.
        </p>
        <div className='flex items-center space-x-4  my-3'>
          <i class='fa fa-facebook cursor-pointer ' aria-hidden='true'></i>
          <i class='fa fa-twitter cursor-pointer ' aria-hidden='true'></i>
          <i class='fa fa-youtube cursor-pointer ' aria-hidden='true'></i>
          <i class='fa fa-linkedin cursor-pointer ' aria-hidden='true'></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;

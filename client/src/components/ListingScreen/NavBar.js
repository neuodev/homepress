import React from 'react';

const NavBar = ({ title }) => {
  return (
    <>
      <div className='text-gray-700  bg-white shadow-lg '>
        <div class='p-5'>
          <div className=' md:flex items-center justify-between container mx-auto  max-w-screen-lg '>
            <img
              class='bg-gray-500'
              className='mb-4'
              src='/images/logo-dark.svg'
              alt='homepress'
            />
            <div className='flex items-center justify-center space-x-3 '>
              <button className='border  px-3 py-2 rounded-full focus:outline-black  hover:text-white hover:bg-blue-500 transition-colors duration-300 '>
                Add Listing
              </button>
              <button className='border  px-3 py-2 rounded-full focus:outline-black  '>
                <i class='fa fa-heart' aria-hidden='true'></i>
              </button>
              <button className='border  px-3 py-2 rounded-full focus:outline-black  '>
                <i class='fa fa-retweet' aria-hidden='true'></i>
              </button>
            </div>
          </div>
        </div>
        <div class='flex  items-center space-x-3 text-gray-400 border-t px-5 py-2 text-sm mx-auto container max-w-screen-lg'>
          <h1>Homepress</h1>
          <i class='fa fa-chevron-right' aria-hidden='true'></i>
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;

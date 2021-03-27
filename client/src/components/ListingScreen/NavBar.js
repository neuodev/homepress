import React from 'react';

const NavBar = () => {
  return (
    <>
      <div className='text-gray-700  bg-white shadow-lg '>
        <div class='p-5'>
          <div className=' md:flex items-center justify-between container mx-auto  max-w-screen-lg '>
            <img
              class='bg-gray-500'
              className='mb-4'
              src='./images/logo-dark.svg'
              alt=''
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
          <p>Listing Name</p>
        </div>
      </div>
      <div className='lg:flex lg:items-center lg:justify-between lg:pb-5 container mx-auto max-w-screen-lg'>
        <div className='p-5 pb-0 flex items-center justify-center space-x-3'>
          <h1 className='bg-green-200 text-green-600 font-semibold uppercase tracking-wider py-1 px-3 rounded-md '>
            houses
          </h1>
          <h1 className='bg-red-200 text-red-600 font-semibold uppercase tracking-wider py-1 px-3 rounded-md '>
            Rent
          </h1>
          <div className='flex items-center justify-center space-x-1'>
            <i class='fa fa-clock-o' aria-hidden='true'></i>
            <p>1 year ago</p>
          </div>
          <div className='flex items-center justify-center space-x-1'>
            <i class='fa fa-eye' aria-hidden='true'></i>
            <p>1416</p>
          </div>
        </div>
        <div className='flex items-center  justify-center  p-5 text-lg  text-gray-400 '>
          <div className='flex items-center  justify-center mr-4'>
            <i class='fa fa-envelope-o mr-2' aria-hidden='true'></i>
            <p>Email</p>
          </div>
          <div className='flex items-center  justify-center  mr-4'>
            <i class='fa fa-heart-o mr-2' aria-hidden='true'></i>
            <p>save</p>
          </div>
          <div className='flex items-center  justify-center'>
            <i class='fa fa-share-square-o mr-2' aria-hidden='true'></i>
            <p>share</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

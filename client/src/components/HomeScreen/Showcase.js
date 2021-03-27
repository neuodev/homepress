import React from 'react';
import './style.css';
const Showcase = () => {
  return (
    <div
      className='w-full h-72 showcase relative flex items-center '
      style={{
        background: 'url(./images/showcase.jpg) no-repeat center center/cover ',
      }}
      id='overlayd'>
      <div className='p-5 absolute z-10 w-full top-0   '>
        <div className=' md:flex items-center justify-between container mx-auto'>
          <img className='mb-9' src='./images/logo-dark.svg' alt='' />
          <div className='flex items-center justify-center space-x-3'>
            <button className='border border-gray-900 text-black px-3 py-2 rounded-full focus:outline-black  '>
              Add Listing
            </button>
            <button className='border border-gray-900 text-black px-3 py-2 rounded-full focus:outline-black  '>
              <i class='fa fa-heart' aria-hidden='true'></i>
            </button>
            <button className='border border-gray-900 text-balck px-3 py-2 rounded-full focus:outline-black  '>
              <i class='fa fa-retweet' aria-hidden='true'></i>
            </button>
          </div>
        </div>
      </div>
      <div className=' container mx-auto   hidden md:block'>
        <p className='text-blue-500 text-xl'>PASADENA REALTOR & BROKER</p>
        <h1 className='text-4xl max-w-sm lg:text-6xl  lg:max-w-xl  font-extrabold text-gray-800 '>
          Making Good things happen.
        </h1>
        <button className=' uppercase tracking-wider text-sm py-4 px-5 focus:outline-none focus:ring bg-blue-600 text-white  font-semibold my-5 '>
          reqest a property appraisal
        </button>
      </div>
    </div>
  );
};

export default Showcase;

import React from 'react';
import './style.css';
const Showcase = () => {
  return (
    <div
      className='w-full h-72 '
      style={{
        background: 'url(./images/slide-1.jpg) no-repeat center center/cover ',
      }}
      id='overlay'>
      <div className='p-5 absolute z-10 w-full  '>
        <div className=' md:flex items-center justify-between container mx-auto'>
          <img className='mb-9' src='./images/logo-white.svg' alt='' />
          <div className='flex items-center justify-center space-x-3'>
            <button className='border text-white px-3 py-2 rounded-full focus:outline-black  '>
              Add Listing
            </button>
            <button className='border text-white px-3 py-2 rounded-full focus:outline-black  '>
              <i class='fa fa-heart' aria-hidden='true'></i>
            </button>
            <button className='border text-white px-3 py-2 rounded-full focus:outline-black  '>
              <i class='fa fa-retweet' aria-hidden='true'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

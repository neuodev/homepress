import Slider from './Slider';
import React from 'react';
import Description from './Description';
import Location from './Location';
import Features from './Features';
import Amenities from './Amenities';
import Form from './Form';

const Details = () => {
  return (
    <div>
      <div className='container mx-auto border-t pt-5 max-w-screen-lg'>
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
              <i class='far fa-envelope  mr-2 '></i>
              <p>Email</p>
            </div>
            <div className='flex items-center  justify-center  mr-4'>
              <i class='far fa-heart mr-2' aria-hidden='true'></i>
              <p>save</p>
            </div>
            <div className='flex items-center  justify-center'>
              <i class='far fa-share-alt mr-2 '></i>
              <p>share</p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center flex-col  lg:flex-row lg:justify-between lg:pb-5 lg:px-5'>
          <div>
            <h1 className='text-2xl font-semibold   mb-5'>
              798 Talbot St. Bridgewater, NJ 08807
            </h1>
            <div className='flex items-center justify-center '>
              <div className='flex items-center justify-center mr-4 '>
                <i
                  class='fa fa-bed mr-2 text-green-500 text-lg '
                  aria-hidden='true'></i>
                <p>4 Beds</p>
              </div>
              <div className='flex items-center justify-center mr-4 '>
                <i
                  class='fa fa-bath mr-2  text-green-500 text-lg '
                  aria-hidden='true'></i>
                <p>4 Beds</p>
              </div>
              <div className='flex items-center justify-center mr-4 '>
                <i class='fas fa-layer-group   mr-2  text-green-500 text-lg  '></i>
                <p> 3600 sqft</p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center '>
            <div className='flex items-center justify-center my-4  '>
              <p className='mr-4 text-lg line-through text-gray-400 '>$4,200</p>
              <h1 className='font-semibold text-2xl'>$3,800</h1>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <Slider />
        </div>
      </div>
      <div className='mb-10'>
        <Description />
        <Location />
        <Features />
        <Amenities />
        <div className='max-w-lg   mx-auto my-10 block lg:hidden'>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Details;

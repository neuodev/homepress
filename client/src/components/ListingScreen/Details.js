import React from 'react';

const Details = () => {
  return (
    <div>
      <div className='container mx-auto border-t pt-5'>
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
      </div>
    </div>
  );
};

export default Details;

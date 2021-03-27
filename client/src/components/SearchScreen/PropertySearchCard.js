import React from 'react';

const features = [
  {
    name: 'Beds',
    number: 4,
    icon: <i class='far fa-bed' aria-hidden='true'></i>,
  },
  {
    name: 'Baths',
    number: 4,
    icon: <i class='far fa-bath' aria-hidden='true'></i>,
  },
  {
    name: 'sq ft',
    number: 4200,
    icon: <i class='far fa-layer-group    '></i>,
  },
  {
    name: false,
    number: 2017,
    icon: <i class='far fa-building' aria-hidden='true'></i>,
  },
];

const PropertySearchCard = () => {
  return (
    <div
      className='border-b-2 md:pb-4 mb-5 sm:flex  sm:justify-center  max-w-md sm:max-w-none mx-auto lg:block xl:flex '
      id='height-search-card'>
      <div className='mb-5 h-5/12 sm:h-full sm:w-1/2 sm:flex-none lg:w-full lg:h-2/4  sm:mr-4 xl:h-full xl:w-1/2 flex items-center justify-center'>
        <img
          className='w-full h-full  xl:h-3/4 object-cover block'
          src='./images/pro-1.jpg'
          alt=''
        />
      </div>
      <div className='md:flex md:flex-col  md:justify-center'>
        <div className='flex items-center mb-5 xl:mb-2 xl:mt-4'>
          <p className='mr-3 xl:text-sm bg-green-200 text-green-800 p-2  rounded-md font-semibold'>
            Featured
          </p>
          <p className='mr-3 xl:text-sm bg-red-400 text-red-900 py-2 px-3  rounded-md font-semibold'>
            Buy
          </p>
        </div>
        <h1 className='text-xl xl:text-lg font-semibold mb-4 xl:mb-2 '>
          Apartment in 6 NE 7th Victory Palace
        </h1>
        <div className='flex items-center mb-4 '>
          <span className='mr-1 text-gray-300'>Price: </span>
          <span className='text-xl font-semibold '>$134,000</span>
        </div>
        <div className='flex items-center flex-wrap mb-5'>
          {features.map((item, idx) => (
            <div key={idx} className='flex items-center w-32 mb-2'>
              <div className='mr-2'>{item.icon}</div>
              <div className='mr-1'>{item.number}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
        <div>
          <h1 className=''>Call: (865) 222-8888 </h1>
          <div className='flex items-center mb-5 '>
            <i class='fas fa-shield-check mr-2 text-green-400    '></i>
            <p>Demo Agency</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearchCard;

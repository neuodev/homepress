import React from 'react';
import { Link } from 'react-router-dom';

// const features = [
//   {
//     name: 'Beds',
//     number: 4,
//     icon: <i class='far fa-bed' aria-hidden='true'></i>,
//   },
//   {
//     name: 'Baths',
//     number: 4,
//     icon: <i class='far fa-bath' aria-hidden='true'></i>,
//   },
//   {
//     name: 'sq ft',
//     number: 4200,
//     icon: <i class='far fa-layer-group    '></i>,
//   },
//   {
//     name: false,
//     number: 2017,
//     icon: <i class='far fa-building' aria-hidden='true'></i>,
//   },
// ];

const PropertySearchCard = ({ property }) => {
  const {
    area,
    baths,
    beds,
    discount,
    features,
    id,
    images,
    title,
    price,
  } = property;
  const newPrice = price - price * (discount / 100);
  return (
    <div
      className='border-b-2 pb-4 xl:pb-4 sm:pb-0 grid grid-cols-12  grid-rows-6 gap-1 sm:gap-4 xl:gap-5  mb-5   mx-auto  '
      id='height-search-card'>
      <div className='mb-2 lg:mb-0   col-span-12 row-span-3 sm:col-span-6  sm:row-span-6 lg:col-span-12 lg:row-span-3 xl:col-span-6 xl:row-span-full '>
        <Link to={`/listing/${id}`}>
          <img
            className='w-full h-full  object-cover block'
            src={images[0]}
            alt=''
          />
        </Link>
      </div>
      <div className='col-span-12 sm:col-span-6  lg:col-span-12 lg:row-span-3  xl:col-span-6 xl:row-span-3  '>
        <div className='flex items-center mb-2 lg:mb-1 '>
          <p className='mr-3 text-xs  bg-green-200 text-green-800 p-2  rounded-md font-semibold'>
            Featured
          </p>
          <p className='mr-3 text-xs bg-red-400 text-red-900 py-2 px-3  rounded-md font-semibold'>
            Buy
          </p>
        </div>
        <Link to={`/listing/${id}`}>
          <h1 className='text-xl  font-semibold mb-2 lg:mb-1  truncate'>
            {title}
          </h1>
        </Link>
        <div className='flex items-center mb-2 lg:mb-1'>
          <span className='mr-1 text-gray-300'>Price: </span>
          <span className='text-xl font-semibold '>${newPrice}</span>
        </div>
        <div className='grid grid-cols-12 gap-2 lg:gap-1 mb-2 lg:mb-1 '>
          <div className='col-span-6 flex items-center text-gray-400 md:text-lg  '>
            <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
              <i class='far fa-bed' aria-hidden='true'></i>
            </div>
            <div className='mr-1'>{beds}</div>
            <p>Beds</p>
          </div>
          <div className='col-span-6 flex items-center text-gray-400 md:text-lg  '>
            <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
              <i class='far fa-bath' aria-hidden='true'></i>
            </div>
            <div className='mr-1'>{baths}</div>
            <p>Baths</p>
          </div>
          <div className='col-span-6 flex items-center text-gray-400 md:text-lg  '>
            <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
              <i class='far fa-layer-group'></i>
            </div>
            <div className='mr-1'>{area}</div>
            <p>sqft</p>
          </div>
          <div className='col-span-6 flex items-center text-gray-400 md:text-lg  '>
            <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
              <i class='far fa-building' aria-hidden='true'></i>
            </div>
            <div className='mr-1'>{features.builtYear}</div>
          </div>
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

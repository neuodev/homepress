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
      className='border-b-2 md:pb-4 mb-5 sm:flex  sm:justify-center  max-w-md sm:max-w-none mx-auto lg:block xl:flex '
      id='height-search-card'>
      <div className='mb-5 h-5/12 sm:h-full sm:w-1/2 sm:flex-none lg:w-full lg:h-2/4  sm:mr-4 xl:h-full xl:w-1/2 flex items-center justify-center'>
        <Link to={`/listing/${id}`}>
          <img
            className='w-full h-full  xl:h-3/4 object-cover block'
            src={images[0]}
            alt=''
          />
        </Link>
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
        <Link to={`/listing/${id}`}>
          <h1 className='text-xl xl:text-lg font-semibold mb-4 xl:mb-2 '>
            {title}
          </h1>
        </Link>
        <div className='flex items-center mb-4 '>
          <span className='mr-1 text-gray-300'>Price: </span>
          <span className='text-xl font-semibold '>${newPrice}</span>
        </div>
        <div className='flex flex-wrap items-center justify-start mb-4 '>
          <div className='w-1/2 flex items-center text-gray-400 md:text-lg  '>
            <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
              <i class='far fa-bed' aria-hidden='true'></i>
            </div>
            <div className='mr-1'>{beds}</div>
            <p>Beds</p>
          </div>
          <div className='w-1/2 flex items-center text-gray-400 md:text-lg  '>
            <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
              <i class='far fa-bath' aria-hidden='true'></i>
            </div>
            <div className='mr-1'>{baths}</div>
            <p>Baths</p>
          </div>
          <div className='w-1/2 flex items-center text-gray-400 md:text-lg  '>
            <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
              <i class='far fa-layer-group'></i>
            </div>
            <div className='mr-1'>{area}</div>
            <p>sqft</p>
          </div>
          <div className='w-1/2 flex items-center text-gray-400 md:text-lg  '>
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

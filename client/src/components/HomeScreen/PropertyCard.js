import React from 'react';
import { Link } from 'react-router-dom';



const PropertyCard = ({ property }) => {
  const {
    area,
    baths,
    beds,
    discount,
    features,
    images,
    price,
    title,
    id,
  } = property;

  const newPrice = price - price * (discount / 100);
  return (
    <div
      className='col-span-6 lg:col-span-4 xl:col-span-6  rounded-lg overflow-hidden  shadow-lg hover:shadow-2xl border xl:flex transition-shadow duration-500'
      id='card-height'>
      <div className=' w-full h-1/2 xl:h-full xl:w-1/2 xl:flex-none bg-blue-50 rounded-md xl:mr-3'>
        <Link to={`/listing/${id}`}>
          <img
            className='object-cover block w-full h-full'
            src={images[0]}
            alt='property name'
          />
        </Link>
      </div>
      <div className='px-3 py-4 mt-1 h-1/2 '>
        <Link to={`/listing/${id}`}>
          <h1 className='mb-4 text-lg font-semibold md:text-2xl '>{title}</h1>
        </Link>
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
        <div className='flex items-end space-x-2'>
          <p className='font-bold text-xl text-blue-500 '>
            ${Math.floor(newPrice)}
          </p>
          <p className='text-sm  line-through font-semibold text-gray-400 '>
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

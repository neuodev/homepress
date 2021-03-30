import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FAVORITE_ADD_ITEM } from '../../actions/actionsType';
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
  const [showFavorite, setShowFavorite] = useState(false);
  const newPrice = price - price * (discount / 100);
  const dispatch = useDispatch();
  const { favoriteItems } = useSelector(state => state.favoriteList);

  const isExist = favoriteItems.find(item => item.id === id);
  const addToFavorite = () => {
    dispatch({ type: FAVORITE_ADD_ITEM, payload: property });
  };
  return (
    <div
      onMouseEnter={() => setShowFavorite(true)}
      onMouseLeave={() => setShowFavorite(false)}
      className='col-span-6 lg:col-span-4 xl:col-span-6  rounded-lg overflow-hidden  shadow-lg hover:shadow-2xl border xl:flex transition-shadow duration-500 relative'
      id='card-height'>
      <button
        onClick={addToFavorite}
        className={` absolute  right-3 top-2 xl:left-3  cursor-pointer text-white text-xl z-50 focus:outline-none  focus:ring-gray-400 rounded-full  ${
          showFavorite ? 'showFavorite' : 'hideFavorite'
        }`}>
        {isExist ? (
          <i className='fa fa-heart' aria-hidden='true'></i>
        ) : (
          <i className={`far fa-heart`} aria-hidden='true'></i>
        )}
      </button>
      <Link to={`/listing/${id}`} className='xl:w-1/2 flex-none  '>
        <div
          className=' relative w-full h-1/2 xl:h-full xl:w-full xl:flex-none  bg-blue-50 rounded-md xl:mr-3'
          id={showFavorite ? 'overlay' : ''}>
          <Link to={`/listing/${id}`}>
            <img
              className='object-cover block w-full h-full'
              src={images[0]}
              alt='property name'
            />
          </Link>
        </div>
      </Link>
      <div className='px-3 py-4 mt-1 h-1/2 xl:h-full flex-none  '>
        <Link to={`/listing/${id}`} className=''>
          <h1 className='mb-4 text-lg font-semibold md:text-2xl truncate  xl:w-72'>
            {title}
          </h1>
        </Link>
        <div className='flex flex-wrap items-center justify-start mb-4 '>
          <div className='w-1/2 flex items-baseline text-gray-400 md:text-lg  '>
            <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
              <i class='fa fa-bed' aria-hidden='true'></i>
            </div>
            <div className='mr-1'>{beds}</div>
            <p>Beds</p>
          </div>
          <div className='w-1/2 flex items-baseline text-gray-400 md:text-lg  '>
            <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
              <i class='fa fa-bath' aria-hidden='true'></i>
            </div>
            <div className='mr-1'>{baths}</div>
            <p>Baths</p>
          </div>
          <div className='w-1/2 flex items-baseline text-gray-400 md:text-lg  '>
            <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
              <i class='fa fa-layer-group'></i>
            </div>
            <div className='mr-1'>{area}</div>
            <p>sqft</p>
          </div>
          <div className='w-1/2 flex items-baseline text-gray-400 md:text-lg  '>
            <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
              <i class='fa fa-building' aria-hidden='true'></i>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FAVORITE_REMOVE_ITEM } from '../../actions/actionsType';
const FavoriteCard = ({ property }) => {
  const { title, images, price, discount, id, beds, baths } = property;
  const newPrice = price - price * (discount / 100);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch({ type: FAVORITE_REMOVE_ITEM, payload: id });
  };
  return (
    <div className='grid grid-cols-12 grid-rows-6 gap-4 mb-5 h-28 '>
      <div className='col-span-6 row-span-full '>
        <Link to={`/listing/${id}`}>
          <img
            className='h-full w-full inline-block object-cover'
            src={images[0]}
            alt={title}
          />
        </Link>
      </div>
      <div className='col-span-6 h-full'>
        <Link to={`/listing/${id}`}>
          <h1 className='truncate text-lg  font-semibold '>{title}</h1>
        </Link>
        <div className='flex  items-baseline'>
          <p className='text-lg  mr-1 font-semibold text-gray-600 '>
            ${newPrice}
          </p>
          <p className='text-sm line-through '>${price}</p>
        </div>
        <div className='col-span-6'>
          <div className='flex items-center '>
            <i className='far fa-bed  text-gray-500 mr-2 '></i>
            <p>{beds} Beds</p>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center '>
              <i className='far fa-bath  text-gray-500 mr-2 '></i>
              <p>{baths} Baths</p>
            </div>
            <button
              onClick={onClick}
              className='focus:outline-none text-red-400'>
              <i class='far fa-trash' aria-hidden='true'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;

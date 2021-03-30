import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteCard from './FavoriteCard';
const Favorite = ({ children }) => {
  const { favoriteItems } = useSelector(state => state.favoriteList);
  return (
    <div className=''>
      <div className='relative'>
        <p
          className='absolute -top-2 -right-2 bg-blue-100  rounded-full text-blue-600
        text-xs font-semibold px-2 py-1 shadow-lg border 
        '>
          {favoriteItems.length}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Favorite;

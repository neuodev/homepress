import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FavoriteCard from './FavoriteCard';
const Favorite = ({ children }) => {
  const { favoriteItems } = useSelector(state => state.favoriteList);
  const [show, setShow] = useState(true);

  document.addEventListener('click', e => {
    if (!e.target.closest('#favorite-list')) {
      setShow(false);
    }
  });
  return (
    <div className='relative' id='favorite-list'>
      <div className='relative'>
        <p
          className='absolute -top-2 -right-2 bg-blue-100  rounded-full text-blue-600
        text-xs font-semibold px-2 py-1 shadow-lg border 
        '>
          {favoriteItems.length}
        </p>
        <p onClick={() => setShow(!show)}> {children}</p>
      </div>
      <div
        className={`${
          show ? 'showFavoriteList' : 'hideFavoriteList'
        } top-12 right-0 absolute 
      w-96 bg-gray-50 shadow-xl
      `}>
        <div className='px-5 py-7 '>
          {favoriteItems.map((property, idx) => (
            <div key={idx}>
              <FavoriteCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;

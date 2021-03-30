import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FAVORITE_CLEAR_ITEMS } from '../../actions/actionsType';
import FavoriteCard from './FavoriteCard';
const Favorite = ({ children }) => {
  const { favoriteItems } = useSelector(state => state.favoriteList);
  const [show, setShow] = useState(true);

  const dispatch = useDispatch();
  const clearFavoriteList = () => {
    dispatch({ type: FAVORITE_CLEAR_ITEMS });
  };

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
          show ? 'showFavoriteList z-50' : 'hideFavoriteList z-0'
        } top-12 right-0 absolute 
      w-96 bg-gray-50 shadow-xl pb-5 
      `}>
        <div className=' '>
          <div className='flex items-baseline justify-between mb-2 px-5 py-7'>
            <h1 className='uppercase wider font-semibold   tracking-wider '>
              Favorite ({favoriteItems.length})
            </h1>
            <button
              onClick={clearFavoriteList}
              className='uppercase tracking-wider text-sm border-red-400 border text-red-400 hover:bg-red-200 hover:text-red-700 px-2 py-1 
            focus:outline-none focus:ring focus:ring-red-300
            '>
              Clear{' '}
            </button>
          </div>
          {favoriteItems.length === 0 ? (
            <div className='bg-yellow-200 px-4 py-7 my-4 text-yellow-600 font-semibold uppercase tracking-wider'>
              <p>You favorite list is Empty</p>
              <Link
                className='bg-yellow-300 px-3 py-2 inline-block mt-4 focus:outline-none '
                to='/search'>
                Visite New Properties
              </Link>
            </div>
          ) : (
            <div className='px-5 ' id='favorite-list-height'>
              {favoriteItems.map((property, idx) => (
                <div key={idx}>
                  <FavoriteCard property={property} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;

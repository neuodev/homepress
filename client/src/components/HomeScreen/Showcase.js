import React from 'react';
import { Link } from 'react-router-dom';
import { RESET_FILTER } from '../../actions/actionsType';
import { useDispatch } from 'react-redux';
import './style.css';
import Favorite from '../Favorite/Favorite';

const Showcase = ({ history }) => {
  const dispatch = useDispatch();
  const viewMore = () => {
    dispatch({ type: RESET_FILTER });
    history.push('/search');
  };
  return (
    <div
      className='w-full h-72 showcase relative flex items-center '
      style={{
        background: 'url(./images/showcase.jpg) no-repeat center center/cover ',
      }}
      id='overlay-showcase'>
      <div className='p-5 absolute z-10 w-full top-24 sm:top-0   '>
        <div className=' flex items-center justify-between container mx-auto'>
          <Link to='/'>
            <img
              className=' md:mb-0'
              src='./images/logo-dark.svg'
              alt='homepress'
            />
          </Link>
          <div className='flex items-center justify-center space-x-3  '>
            <Link
              to='/addListing'
              className='border border-blue-600  bg-blue-100  text-blue-500 px-3 py-2 rounded-full focus:outline-none focus:ring focus:ring-blue-300  font-semibold '>
              Add Listing
            </Link>
            <Favorite>
              <button className='border border-blue-600  bg-blue-100  text-blue-500 px-3 py-2 rounded-full focus:outline-none focus:ring focus:ring-blue-300   '>
                <i class='fa fa-heart' aria-hidden='true'></i>
              </button>
            </Favorite>
            <button className='border border-blue-600  bg-blue-100  text-blue-500 px-3 py-2 rounded-full focus:outline-none focus:ring focus:ring-blue-300   '>
              <i class='fa fa-retweet' aria-hidden='true'></i>
            </button>
          </div>
        </div>
      </div>
      <div className=' container mx-auto   hidden md:block px-5'>
        <p className='text-blue-500 text-xl'>PASADENA REALTOR & BROKER</p>
        <h1 className='text-4xl max-w-sm lg:text-6xl  lg:max-w-xl  font-extrabold text-gray-800 '>
          Making Good things happen.
        </h1>
        <button
          onClick={viewMore}
          className=' uppercase tracking-wider text-sm py-4 px-5 focus:outline-none focus:ring bg-blue-600 text-white  font-semibold my-5 '>
          reqest a property appraisal
        </button>
      </div>
    </div>
  );
};

export default Showcase;

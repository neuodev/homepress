import React, { useEffect } from 'react';
import PropertyCard from './PropertyCard';
import { useQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import { GET_PROPERTY } from '../../querys/querys';
import {
  GET_HOME_PROPERTY_FAIL,
  GET_HOME_PROPERTY_SUCCESS,
  RESET_FILTER,
} from '../../actions/actionsType';
import PropertySkeleton from './PropertySkeleton';
const Properties = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_PROPERTY);

  if (error) {
    dispatch({ type: GET_HOME_PROPERTY_FAIL, payload: error });
  } else if (data) {
    dispatch({ type: GET_HOME_PROPERTY_SUCCESS, payload: data });
  }

  const viewMore = () => {
    dispatch({ type: RESET_FILTER });
    history.push('/search');
  };
  return (
    <div className='container mx-auto'>
      <div className='flex items-center flex-col justify-center mt-6'>
        <h1 className='text-5xl font-medium text-gray-800 mb-3'>Properties</h1>
        <p className='text-lg font-light max-w-xl px-5'>
          Sartorial chicharrones blue bottle taxidermy helvetica ethical, beard
          swag offal kinfolk. You probably haven’t heard of them hell of offal
          mlkshk messenger bag squid plaid tousled.
        </p>
      </div>

      <div className='grid grid-cols-12 gap-5 px-3 my-10 max-w-screen-xl mx-auto'>
        {loading ? (
          <>
            <PropertySkeleton />
            <PropertySkeleton />
            <PropertySkeleton />
            <PropertySkeleton />
            <PropertySkeleton />
            <PropertySkeleton />
          </>
        ) : error ? (
          <div>error</div>
        ) : (
          data.properties.map(property => (
            <PropertyCard property={property} key={property.id} />
          ))
        )}
      </div>
      <div className='flex items-center justify-center mb-3'>
        <button
          onClick={viewMore}
          className='bg-blue-600 text-white  px-6 py-3 rounded-md font-medium lg:text-xl focus:outline-none focus:ring uppercase tracking-wider   '>
          view more
        </button>
      </div>
    </div>
  );
};

export default Properties;

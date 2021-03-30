import React, { useEffect } from 'react';
import NavBar from '../components/ListingScreen/NavBar';
import Filter from '../components/SearchScreen/Filter';
import Map from '../components/SearchScreen/Map';
import Properties from '../components/SearchScreen/Properties';
import { useDispatch, useSelector } from 'react-redux';
import { pipeline } from '../components/utils/pipeline';
import { useQuery } from '@apollo/client';
import { SEARCH_PROPERTY } from '../querys/querys';
import { searchPropertiesAction } from '../actions/properties';
import Alert from '../components/utils/Alert';

const SearchScreen = () => {
  const advancedFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterPipeline = pipeline(advancedFilter);

  const { data, loading, error } = useQuery(SEARCH_PROPERTY, {
    variables: {
      filter: filterPipeline,
    },
  });

  return (
    <div className='h-screen'>
      <NavBar title='Query search' />
      <Filter />
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <Alert />
      ) : (
        data && (
          <div className='grid grid-cols-12 '>
            <Map properties={data.properties} />
            <Properties properties={data.properties} />
          </div>
        )
      )}
    </div>
  );
};

export default SearchScreen;

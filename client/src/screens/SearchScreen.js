import React, { useEffect } from 'react';
import NavBar from '../components/ListingScreen/NavBar';
import Filter from '../components/SearchScreen/Filter';
import Map from '../components/SearchScreen/Map';
import Properties from '../components/SearchScreen/Properties';
import { useDispatch, useSelector } from 'react-redux';
import { pipeline } from '../components/utils/pipeline';
import { useQuery } from '@apollo/client';
import { SEARCH_PROPERTY } from '../querys/querys';
import Alert from '../components/utils/Alert';
import SearchSkeleton from '../components/SearchScreen/SearchSkeleton';

const SearchScreen = ({ history }) => {
  const advancedFilter = useSelector(state => state.filter);

  const filterPipeline = pipeline(advancedFilter);

  const { data, loading, error } = useQuery(SEARCH_PROPERTY, {
    variables: {
      filter: filterPipeline,
    },
  });

  return (
    <div className='h-screen'>
      <NavBar title={advancedFilter.title ? advancedFilter.title : 'Search'} />
      <Filter />
      {loading ? (
        <div>
          <SearchSkeleton />
        </div>
      ) : error ? (
        <div className='px-3'>
          <Alert serverity='error' message={error.message} />
        </div>
      ) : (
        data && (
          <div className='grid grid-cols-12 '>
            <Map properties={data.properties} />
            <Properties history={history} properties={data.properties} />
          </div>
        )
      )}
    </div>
  );
};

export default SearchScreen;

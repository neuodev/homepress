import React from 'react';
import NavBar from '../components/ListingScreen/NavBar';
import Filter from '../components/SearchScreen/Filter';
import Map from '../components/SearchScreen/Map';
import Properties from '../components/SearchScreen/Properties';

const SearchScreen = () => {
  return (
    <div className='h-screen'>
      <NavBar title='Query search' />
      <Filter />
      <div className='grid grid-cols-12 mt-6'>
        <Map />
        <Properties />
      </div>
    </div>
  );
};

export default SearchScreen;

import React from 'react';
import Details from '../components/ListingScreen/Details';
import NavBar from '../components/ListingScreen/NavBar';

const ListingScreen = () => {
  return (
    <div className='bg-gray-100'>
      <NavBar />
      <Details />
    </div>
  );
};

export default ListingScreen;

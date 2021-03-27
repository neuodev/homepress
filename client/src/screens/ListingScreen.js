import React from 'react';
import Details from '../components/ListingScreen/Details';
import NavBar from '../components/ListingScreen/NavBar';
import Footer from '../components/HomeScreen/Footer';
const ListingScreen = () => {
  return (
    <div className='bg-gray-100'>
      <NavBar title='Listing Name' />
      <Details />

      <Footer />
    </div>
  );
};

export default ListingScreen;

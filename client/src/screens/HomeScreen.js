import React from 'react';
import Footer from '../components/HomeScreen/Footer';
import Partners from '../components/HomeScreen/Partners';
import Properties from '../components/HomeScreen/Properties';
import Search from '../components/HomeScreen/Search';
import Showcase from '../components/HomeScreen/Showcase';
import Testimonials from '../components/HomeScreen/Testimonials';
import Why from '../components/HomeScreen/Why';

const HomeScreen = ({ history }) => {
  return (
    <div className='bg-gray-50'>
      <Showcase />
      <Search history={history} />
      <Properties />
      <Why />
      <Testimonials />
      <Partners />
      <Footer />
    </div>
  );
};

export default HomeScreen;

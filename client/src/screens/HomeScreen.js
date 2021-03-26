import React from 'react';
import Properties from '../components/HomeScreen/Properties';
import Search from '../components/HomeScreen/Search';
import Showcase from '../components/HomeScreen/Showcase';
import Testimonials from '../components/HomeScreen/Testimonials';
import Why from '../components/HomeScreen/Why';

const HomeScreen = () => {
  return (
    <div>
      <Showcase />
      <Search />
      <Properties />
      <Why />
      <Testimonials />
    </div>
  );
};

export default HomeScreen;

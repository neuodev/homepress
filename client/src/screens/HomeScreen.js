import React from 'react';
import Properties from '../components/HomeScreen/Properties';
import Search from '../components/HomeScreen/Search';
import Showcase from '../components/HomeScreen/Showcase';
import Why from '../components/HomeScreen/Why';

const HomeScreen = () => {
  return (
    <div>
      <Showcase />
      <Search />
      <Properties />
      <Why />
    </div>
  );
};

export default HomeScreen;

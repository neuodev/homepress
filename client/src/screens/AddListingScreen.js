import React from 'react';
import { Route, Switch } from 'react-router';
import Listingtype from '../components/AddListingScreen/Listingtype';
import NavBar from '../components/ListingScreen/NavBar';

const AddListingScreen = () => {
  return (
    <div>
      <NavBar title='Add New Property' />
      <Switch>
        <Route path='/' exact component={Listingtype} />
      </Switch>
    </div>
  );
};

export default AddListingScreen;

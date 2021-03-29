import React from 'react';
import { Route, Switch } from 'react-router';
import CreateListing from '../components/AddListingScreen/CreateListing';
import Done from '../components/AddListingScreen/Done';
import Listingtype from '../components/AddListingScreen/Listingtype';
import Footer from '../components/HomeScreen/Footer';
import NavBar from '../components/ListingScreen/NavBar';

const AddListingScreen = () => {
  return (
    <div>
      <NavBar title='Add New Property' />
      <div>
        <Switch>
          <Route path='/addListing/' exact component={Listingtype} />

          <Route path='/addListing/create' exact component={CreateListing} />
          <Route path='/addListing/done' exact component={Done} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
};

export default AddListingScreen;

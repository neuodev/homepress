import React from 'react';
import Details from '../components/ListingScreen/Details';
import NavBar from '../components/ListingScreen/NavBar';
import Footer from '../components/HomeScreen/Footer';
import { useQuery } from '@apollo/client';
import { GET_PROPERTY_DETAILS } from '../querys/querys';
import ListingSkeleton from '../components/ListingScreen/ListingSkeleton';
const ListingScreen = ({ match }) => {
  const id = match.params.id;
  const { data, error, loading } = useQuery(GET_PROPERTY_DETAILS, {
    variables: {
      id,
    },
  });
  console.log(data);

  return (
    <div className='bg-gray-100'>
      <NavBar title={data && data.property.title} />
      {loading ? (
        <div>
          <ListingSkeleton />
        </div>
      ) : true ? (
        <div>error</div>
      ) : (
        <Details property={data.property} />
      )}
      <Footer />
    </div>
  );
};

export default ListingScreen;

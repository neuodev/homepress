import React, { useEffect, useRef, useState } from 'react';
import Map from './Map';

const Location = ({ location, address }) => {
  return (
    <div>
      <div className='container mx-auto max-w-screen-lg p-5 pt-7'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold '>Location</h1>
          <div className='flex items-center '>
            <i
              class='fa fa-map-marker text-blue-500  mr-2'
              aria-hidden='true'></i>
            <p>{address}</p>
          </div>
        </div>
        <div className='w-full h-96 bg-blue-300 mt-7'>
          <Map location={location} />
        </div>
      </div>
    </div>
  );
};

export default Location;

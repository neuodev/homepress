import React from 'react';

const Location = () => {
  return (
    <div>
      <div className='container mx-auto max-w-screen-lg p-5 pt-7'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold '>Location</h1>
          <div className='flex items-center '>
            <i
              class='fa fa-map-marker text-blue-500  mr-2'
              aria-hidden='true'></i>
            <p>392 S Hill Dr, Brisbane, CA 94005, USA</p>
          </div>
        </div>
        <div className='w-full h-96 bg-blue-300 mt-7'></div>
      </div>
    </div>
  );
};

export default Location;

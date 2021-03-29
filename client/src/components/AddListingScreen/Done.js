import React from 'react';
import Steps from './Steps';

const Done = () => {
  return (
    <div>
      <Steps activeStep={3} />
      <div className='container max-w-screen-lg mx-auto px-5 flex flex-col items-center justify-center py-32'>
        <div className='flex flex-col items-center justify-center '>
          <div className='p-2 bg-blue-100 rounded-full  animate-bounce'>
            <i
              class='fa fa-check-circle text-blue-600 text-5xl p-10 bg-blue-100 rounded-full '
              aria-hidden='true'></i>
          </div>
          <h1 className='text-6xl uppercase tracking-wider mt-5 lg:text-7xl text-blue-500 font-bold'>
            done
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Done;

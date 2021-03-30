import React from 'react';
import { Link } from 'react-router-dom';
const steps = [
  {
    stepNumber: 1,
    heading: 'Listing Type',
    path: '/addListing',
  },
  {
    stepNumber: 2,
    heading: 'Create Listing',
    path: '/addListing/create',
  },
  {
    stepNumber: 3,
    heading: 'Done',
    path: '/addListing/done',
  },
];

const Steps = ({ activeStep }) => {
  return (
    <div className='hidden sm:block mt-16 container mx-auto max-w-screen-lg px-4'>
      <div className='text-center mb-10'>
        <h1 className='text-5xl font-bold text-gray-700'>Add New Property</h1>
      </div>
      <div className='flex items-center justify-between'>
        {steps.map(({ heading, stepNumber, path }) => (
          <Link
            to={path}
            className={`${
              activeStep === stepNumber && 'border-blue-400'
            } border-b-4 w-full mr-4 py-3 text-xl text flex items-center font-semibold text-gray-700 cursor-pointer `}
            key={stepNumber}>
            <p
              className={`${
                activeStep == stepNumber && 'bg-blue-400 text-white'
              } px-2 rounded-full bg-gray-300 mr-3 `}>
              {stepNumber}
            </p>
            <h1>{heading}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Steps;

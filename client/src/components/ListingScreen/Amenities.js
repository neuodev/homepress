import React from 'react';

const amenities = [
  'Basement',
  'Car garage',
  'Central Heating ',
  'Cleaning Service',
  'Doorman',
  'Elevator ',
  ' Fireplace  ',
  'Hardwood Flows ',
  'Onsite Parking',
  'Stunning views ',
  'Stunning views ',
  'Unit Washer/Dryer ',
];
const Amenities = () => {
  return (
    <div className='container  mx-auto max-w-screen-lg border-t py-8 px-5 md:px-6'>
      <h1 className='text-2xl mb-4 font-semibold '>Apartments Amenities</h1>
      <div className='flex items-center justify-center flex-wrap'>
        {amenities.map((item, idx) => (
          <div
            className='w-1/2 md:w-1/3 flex items-center  px-2 py-1 mb-1 '
            key={idx}>
            <i
              class='fa fa-check-square mr-2 text-blue-500'
              aria-hidden='true'></i>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;

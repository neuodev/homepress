import React from 'react';

// const features = [
//   {
//     heading: 'stories',
//     value: 'Multi Family',
//   },
//   {
//     icon: ,
//     heading: '',
//     value: '2008',
//   },
//   {
//     icon:
//     heading: 'Carage',
//     value: '1',
//   },
//   {
//     icon: ,
//     heading: 'SWIMMING POOL',
//     value: '1',
//   },
//   {
//     icon: ,
//     heading: 'Heating',
//     value: 'No',
//   },
//   {
//     icon:,
//     heading: 'Cooling',
//     value: 'No',
//   },
//   {
//     icon: ,
//     heading: '$/sqft',
//     value: 'No',
//   },
//   {
//     icon:
//     heading: 'Status',
//     value: 'Active',
//   },
// ];

const Features = ({ features }) => {
  const {
    stories,
    builtYear,
    garage,
    swimmingPool,
    heating,
    cooling,
    status,
    security,
  } = features;
  return (
    <div className='p-5  '>
      <div
        className='grid gap-7 lg:gap-14 grid-cols-12 max-w-screen-lg  mx-auto
        md:px-6  border-t-2 py-7 '>
        <h1 className='col-span-12 text-2xl  font-semibold lg:-mb-4'>
          Facts and Features
        </h1>

        <div className='col-span-6 lg:col-span-3 justify-start flex items-center '>
          <div className='mr-3 text-4xl text-blue-500 '>
            <i class='far fa-hotel    '></i>
          </div>
          <div className=' text-left  '>
            <p className='font-light uppercase tracking-wider text-xs'>
              stories
            </p>
            <p className='font-semibold text-gray-800'>{stories}</p>
          </div>
        </div>
        <div className='col-span-6 lg:col-span-3 justify-start flex items-center '>
          <div className='mr-3 text-4xl text-blue-500 '>
            <i class='fal fa-user-hard-hat'></i>
          </div>
          <div className=' text-left  '>
            <p className='font-light uppercase tracking-wider text-xs'>
              Year Built
            </p>
            <p className='font-semibold text-gray-800'>{builtYear}</p>
          </div>
        </div>
        <div className='col-span-6 lg:col-span-3 justify-start flex items-center '>
          <div className='mr-3 text-4xl text-blue-500 '>
            <i class='far fa-car-building    '></i>
          </div>
          <div className=' text-left  '>
            <p className='font-light uppercase tracking-wider text-xs'>
              Garage
            </p>
            <p className='font-semibold text-gray-800'>{garage}</p>
          </div>
        </div>
        <div className='col-span-6 lg:col-span-3 justify-start flex items-center '>
          <div className='mr-3 text-4xl text-blue-500 '>
            <i class='far fa-swimming-pool '></i>
          </div>
          <div className=' text-left  '>
            <p className='font-light uppercase tracking-wider text-xs'>
              Swimming pool
            </p>
            <p className='font-semibold text-gray-800'>{swimmingPool}</p>
          </div>
        </div>
        <div className='col-span-6 lg:col-span-3 justify-start flex items-center '>
          <div className='mr-3 text-4xl text-blue-500 '>
            <i class='far fa-fireplace' aria-hidden='true'></i>
          </div>
          <div className=' text-left  '>
            <p className='font-light uppercase tracking-wider text-xs'>
              Heating
            </p>
            <p className='font-semibold text-gray-800'>
              {heating ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
        <div className='col-span-6 lg:col-span-3 justify-start flex items-center '>
          <div className='mr-3 text-4xl text-blue-500 '>
            <i class='far fa-fan-table'></i>
          </div>
          <div className=' text-left  '>
            <p className='font-light uppercase tracking-wider text-xs'>
              Cooling
            </p>
            <p className='font-semibold text-gray-800'>
              {cooling ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
        <div className='col-span-6 lg:col-span-3 justify-start flex items-center '>
          <div className='mr-3 text-4xl text-blue-500 '>
            <i class='far fa-lock-alt    '></i>
          </div>
          <div className=' text-left  '>
            <p className='font-light uppercase tracking-wider text-xs'>
              security
            </p>
            <p className='font-semibold text-gray-800'>
              {security ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
        <div className='col-span-6 lg:col-span-3 justify-start flex items-center '>
          <div className='mr-3 text-4xl text-blue-500 '>
            <i class='far fa-file' aria-hidden='true'></i>,
          </div>
          <div className=' text-left  '>
            <p className='font-light uppercase tracking-wider text-xs'>
              Status
            </p>
            <p className='font-semibold text-gray-800'>{status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

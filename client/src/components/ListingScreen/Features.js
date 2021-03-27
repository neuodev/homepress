import React from 'react';

const features = [
  {
    icon: <i class='far fa-hotel    '></i>,
    heading: 'stories',
    value: 'Multi Family',
  },
  {
    icon: <i class='fal fa-user-hard-hat'></i>,
    heading: 'Year Built',
    value: '2008',
  },
  {
    icon: <i class='far fa-car-building    '></i>,
    heading: 'Carage',
    value: '1',
  },
  {
    icon: <i class='far fa-swimming-pool    '></i>,
    heading: 'SWIMMING POOL',
    value: '1',
  },
  {
    icon: <i class='far fa-fireplace' aria-hidden='true'></i>,
    heading: 'Heating',
    value: 'No',
  },
  {
    icon: <i class='far fa-fan-table    '></i>,
    heading: 'Cooling',
    value: 'No',
  },
  {
    icon: <i class='far fa-money-bill-alt   '></i>,
    heading: '$/sqft',
    value: 'No',
  },
  {
    icon: <i class='far fa-file' aria-hidden='true'></i>,
    heading: 'Status',
    value: 'Active',
  },
];

const Features = () => {
  return (
    <div className='p-5  '>
      <div
        className='grid gap-7 lg:gap-14 grid-cols-12 max-w-screen-lg  mx-auto
        md:px-6  border-t-2 py-7 '>
        <h1 className='col-span-12 text-2xl  font-semibold lg:-mb-4'>
          Facts and Features
        </h1>
        {features.map((item, idx) => (
          <div
            className='col-span-6 lg:col-span-3 justify-start flex items-center '
            key={idx}>
            <div className='mr-3 text-4xl text-blue-500 '>{item.icon}</div>
            <div className=' text-left  '>
              <p className='font-light uppercase tracking-wider text-xs'>
                {item.heading}
              </p>
              <p className='font-semibold text-gray-800'>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

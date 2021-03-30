import React from 'react';

const items = [
  {
    icon: <i className='far fa-building fa-lg ' aria-hidden='true'></i>,
    h1: 'WIDE RANGE OF PROPERTIES',
    p:
      'With a robust selection of popular properties on hand, as well as leading properties from experts.',
  },
  {
    icon: <i className='fa fa-coins  px-1 '></i>,
    h1: 'FINANCING MADE EASY',
    p:
      'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    icon: <i className='fa fa-users' aria-hidden='true'></i>,
    h1: 'TRUSTED BY THOUSANDS',
    p:
      '10 new offers every day. 350 offers on site, trusted by a community of thousands of users.',
  },
  {
    icon: <i class='far fa-clock  px-1   '></i>,
    h1: 'NEAR BY ME',
    p: 'Search near top-rated schools and explore neighborhoods.',
  },
];

const Why = () => {
  return (
    <div className='container mx-auto'>
      <div className='mt-14 flex items-center justify-center flex-col px-5'>
        <h1 className='text-5xl text-center '>Why Choose Us</h1>
        <div className=' grid grid-cols-12 gap-7  text-center my-10'>
          {items.map((item, idx) => (
            <div
              className=' flex items-center flex-col justify-center mb-8 col-span-12 md:col-span-6 max-w-lg lg:flex-row lg:text-left lg:mr-4  '
              key={idx}>
              <p className='text-blue-500 text-3xl bg-blue-100 p-7 lg:p-5 mb-4 rounded-full lg:mr-4 '>
                {item.icon}
              </p>
              <div>
                <h1 className='text-xl font-semibold  text-gray-700 mb-4 lg:mb-1'>
                  {item.h1}
                </h1>
                <p className='text-gray-500 lg:max-w-sm'>{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;

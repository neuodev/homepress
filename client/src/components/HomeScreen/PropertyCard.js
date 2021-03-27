import React from 'react';

const features = [
  {
    name: 'Beds',
    number: 4,
    icon: <i class='far fa-bed' aria-hidden='true'></i>,
  },
  {
    name: 'Baths',
    number: 4,
    icon: <i class='far fa-bath' aria-hidden='true'></i>,
  },
  {
    name: 'sq ft',
    number: 4200,
    icon: <i class='far fa-layer-group    '></i>,
  },
  {
    name: false,
    number: 2017,
    icon: <i class='far fa-building' aria-hidden='true'></i>,
  },
];

const PropertyCard = () => {
  return (
    <div
      className='col-span-6 lg:col-span-4 xl:col-span-6  rounded-lg overflow-hidden  shadow-xld hover:shadow-2xld border xl:flex '
      id='card-height'>
      <div className=' w-full h-1/2 xl:h-full xl:w-1/2 xl:flex-none bg-red-50 rounded-md'>
        <img
          className='object-cover block w-full h-full'
          src='./images/p-1.jpg'
          alt='property name'
        />
      </div>
      <div className='px-3 py-4 mt-1 h-1/2 '>
        <h1 className='mb-4 text-lg font-semibold md:text-2xl '>
          Sartorial chicharrones blue bottle
        </h1>
        <div className='flex flex-wrap items-center justify-start mb-4 '>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className='w-1/2 flex items-center text-gray-400 md:text-lg  '>
              <div className='w-5 h-5 text-gray-400 mr-1 md:mr-2'>
                {feature.icon}
              </div>
              <div className='mr-1'>{feature.number}</div>
              {feature.name}
            </div>
          ))}
        </div>
        <div className='flex items-end space-x-2'>
          <p className='font-bold text-xl text-blue-500 '>$2,000</p>
          <p className='text-sm  line-through font-semibold text-gray-400 '>
            $2,300
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

import { SwipeableDrawer, Slider, Checkbox } from '@material-ui/core';
import React, { useState } from 'react';

const amenities = [
  'Balcony (12)',
  'Basement (3)',
  'Car garage (2)',
  'Central Heating (3)',
  'Cleaning Service (3)',
  'Dining Room (2)',
  'Dishwasher (14)',
  'Doorman (9)',
  'Elevator (8)',
  'Family Room (15)',
  'Fireplace (16)',
  'Gym (14)',
  'Hardwood Flows (6)',
  'Onsite Parking (12)',
  'Parking (10)',
  'Pets Allowed (11)',
  'Spa (5)',
  'Stunning views (6)',
  'Unit Washer/Dryer (2)',
  'Waterfront (0)',
];

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState([10000, 880000]);
  const [area, setArea] = useState([10000, 880000]);
  const priceHandler = (e, value) => {
    setPrice(value);
  };
  const areaHandler = (e, value) => {
    setArea(value);
  };
  return (
    <div className='mt-5 mx-2'>
      <button
        className='text-center bg-gray-100  py-2 w-full  focus:outline-none focus:ring focus:ring-gray-300 shadow-lg rounded-md'
        onClick={() => setOpen(!open)}>
        <i class='far fa-filter    '></i>
        Filter
      </button>

      <SwipeableDrawer onClose={() => setOpen(false)} open={open}>
        <div className='w-96 py-8'>
          <button
            className='text-center bg-green-100 text-green-800 font-semibold   py-2 w-full  focus:outline-none focus:ring focus:ring-gray-300 mb-5'
            onClick={() => setOpen(!open)}>
            <i class='fad fa-filter  mr-2 '></i>
            Get Results
          </button>
          <div className=' px-5 border-b  '>
            <h1 className='text-lg font-semibold text-blue-600 text-center  mb-3 '>
              Price ${price[0]} - ${price[1]}
            </h1>
            <div className='flex items-center justify-between'>
              <p className='px-10  py-3 w-40 text-center bg-gray-100 rounded-md font-medium shadow-sm'>
                ${price[0]}
              </p>
              <p className='px-10 py-3 w-40 text-center bg-gray-100 rounded-md font-medium shadow-sm'>
                ${price[1]}
              </p>
            </div>
            <div className='mt-3 mb-5'>
              <Slider
                min={10000}
                step={2000}
                max={880000}
                value={price}
                onChange={priceHandler}
              />
            </div>
          </div>
          <div className=' px-5  border-b pt-5 '>
            <h1 className='text-lg font-semibold text-blue-600 text-center  mb-3 '>
              Area (sqft) {area[0]} - {area[1]}
            </h1>
            <div className='flex items-center justify-between'>
              <p className='px-10  py-3 w-40 text-center bg-gray-100 rounded-md font-medium shadow-sm'>
                {area[0]}
              </p>
              <p className='px-10 py-3 w-40 text-center bg-gray-100 rounded-md font-medium shadow-sm'>
                {area[1]}
              </p>
            </div>
            <div className='mt-3 mb-5'>
              <Slider
                min={10000}
                step={2000}
                max={880000}
                value={area}
                onChange={areaHandler}
              />
            </div>
          </div>
          <div className='border-t py-5 px-5 '>
            <h1 className='text-2xl font-semibold  text-blue-500'>Beds</h1>
            {[1, 2, 3, 4, 5].map(item => (
              <div className='flex items-center -mb-2' key={item}>
                <Checkbox />
                <h1>{item}</h1>
              </div>
            ))}
          </div>
          <div className='border-t py-5 px-5'>
            <h1 className='text-2xl font-semibold  text-blue-500'>Bath</h1>
            {[1, 2, 3, 4, 5].map(item => (
              <div className='flex items-center -mb-2' key={item}>
                <Checkbox />
                <h1>{item}</h1>
              </div>
            ))}
          </div>
          <div className='px-5  border-t py-5'>
            <h1 className='text-2xl font-semibold  text-blue-500'>Amenities</h1>
            <div className='flex  items-center flex-wrap '>
              {amenities.map((item, idx) => (
                <div className='flex  items-center -mb-2 w-1/2' key={idx}>
                  <Checkbox />
                  <h1>{item}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Filter;

import { Checkbox, Slider } from '@material-ui/core';
import React, { useState } from 'react';

const amenities = [
  'Balcony',
  'Basment',
  'Car garage',
  'Centeral Heating',
  'Cleaning Service',
  'Dishwasher',
  'Elevator',
];

const cities = [
  'Cleveland',
  'Los Angeles',
  'Las Vegas',
  'Philadelphia',
  'Sacrmento',
  'San Diego',
  'San Frncisco',
  'San Jose',
];

const AdvancedSearch = ({ children }) => {
  const [city, setCity] = useState(cities[0]);
  const [showList, setShowlist] = useState(false);
  const [price, setPrice] = React.useState([345, 880000]);
  const [area, setArea] = React.useState([1478, 34000]);
  const [bathRoom, setBathRoom] = useState('');
  const [showRoomList, setShowRoomList] = useState(true);
  const [beds, setBeds] = useState('');
  const [showBeds, setShowBeds] = useState(true);
  const [status, setStatus] = useState('');
  const [showStatus, setShowStatus] = useState(true);

  const updateCity = city => {
    setCity(city);
    setShowlist(false);
  };
  const priceHandler = (event, newValue) => {
    setPrice(newValue);
  };
  const areaHandler = (event, newValue) => {
    setArea(newValue);
  };

  return (
    <div>
      {children}
      <div className='bg-gray-200 w-full rounded-md  py-4 shadow-sm mt-5 px-4'>
        <div>
          {amenities.map(item => (
            <div className='flex items-center font-medium text-gray-600'>
              <Checkbox value={item} defaultChecked disableRipple />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className='w-full flex flex-col items-center relative mb-5 '>
          <p
            onClick={() => setShowlist(!showList)}
            className='border font-medium  w-full bg-white py-3 rounded-md  shadow-sm px-7 flex items-center justify-between'>
            {city}
            <i
              class={`fa fa-chevron-down transform ${
                showList && 'rotate-180'
              } transition-transform duration-300`}
              aria-hidden='true'></i>
          </p>
          <ul
            className={`absolute ${
              !showList ? ' opacity-0 hidden' : 'opacity-100'
            } top-14 bg-gray-50 w-full rounded-md shadow-md  py-5 border transition-all duration-200 z-10`}>
            {cities.map((city, idx) => (
              <li
                onClick={() => updateCity(city)}
                className='py-1 hover:bg-gray-100 px-7 cursor-pointer text-gray-600 hover:text-gray-700'
                key={idx}>
                {city}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className='text-lg font-medium text-gray-800 mb-2'>Price</h1>
          <div className='flex items-center justify-between'>
            <p className='px-10  py-3 w-40 text-center bg-gray-50 rounded-md font-medium shadow-sm'>
              ${price[0]}
            </p>
            <p className='px-10 py-3 w-40 text-center bg-gray-50 rounded-md font-medium shadow-sm'>
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
        <div>
          <h1 className='text-lg font-medium text-gray-800 mb-2'>Area</h1>
          <div className='flex items-center justify-between'>
            <p className='px-4  py-3 w-40 text-center bg-gray-50 rounded-md font-medium shadow-sm'>
              ${price[0]}
            </p>
            <p className='px-4 w-40 text-center py-3 bg-gray-50 rounded-md font-medium shadow-sm'>
              ${price[1]}
            </p>
          </div>
          <div className='mt-3 mb-5'>
            <Slider
              min={10000}
              step={2000}
              max={34000}
              value={area}
              onChange={areaHandler}
            />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default AdvancedSearch;

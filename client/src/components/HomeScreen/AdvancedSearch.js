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

const AdvancedSearch = ({ children, show }) => {
  const [city, setCity] = useState(cities[0]);
  const [showList, setShowlist] = useState(false);
  const [price, setPrice] = React.useState([345, 880000]);
  const [area, setArea] = React.useState([1478, 34000]);
  const [bathRoom, setBathRoom] = useState('Select Bath');
  const [showBath, setShowBath] = useState(false);
  const [beds, setBeds] = useState('Select Beds');
  const [showBeds, setShowBeds] = useState(false);
  const [status, setStatus] = useState('Select Status');
  const [showStatus, setShowStatus] = useState(false);

  const updateCity = city => {
    setCity(city);
    setShowlist(false);
  };
  const updateBath = bath => {
    setBathRoom(bath);
    setShowBath(false);
  };
  const updateBeds = beds => {
    setBeds(beds);
    setShowBeds(false);
  };
  const updateStatus = status => {
    setStatus(status);
    setShowStatus(false);
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
      <div
        className={`bg-gray-200 w-full rounded-md  py-4 shadow-sm mt-5 px-4 ${
          show ? 'show' : 'hide'
        }`}>
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
        {/* Beds */}
        <div className='w-full flex flex-col items-center relative mb-5 '>
          <p className='w-full mb-1 text-xs font-medium'>Beds</p>
          <p
            onClick={() => setShowBeds(!showBeds)}
            className='border font-medium  w-full bg-white py-3 rounded-md  shadow-sm px-7 flex items-center justify-between'>
            {beds}
            <i
              class={`fa fa-chevron-down transform ${
                showBeds && 'rotate-180'
              } transition-transform duration-300`}
              aria-hidden='true'></i>
          </p>
          <ul
            className={`absolute ${
              !showBeds ? ' opacity-0 hidden' : 'opacity-100'
            } top-14 bg-gray-50 w-full rounded-md shadow-md  py-5 border transition-all duration-200 z-10`}>
            {[1, 2, 3, 4].map((beds, idx) => (
              <li
                onClick={() => updateBeds(beds)}
                className='py-1 hover:bg-gray-100 px-7 cursor-pointer text-gray-600 hover:text-gray-700'
                key={idx}>
                {beds}
              </li>
            ))}
          </ul>
        </div>
        {/* Bath  */}
        <div className='w-full flex flex-col items-center relative mb-5 '>
          <p className='w-full mb-1 text-xs font-medium'>Bath</p>
          <p
            onClick={() => setShowBath(!showBath)}
            className='border font-medium  w-full bg-white py-3 rounded-md  shadow-sm px-7 flex items-center justify-between'>
            {bathRoom}
            <i
              class={`fa fa-chevron-down transform ${
                showBath && 'rotate-180'
              } transition-transform duration-300`}
              aria-hidden='true'></i>
          </p>
          <ul
            className={`absolute ${
              !showBath ? ' opacity-0 hidden' : 'opacity-100'
            } top-14 bg-gray-50 w-full rounded-md shadow-md  py-5 border transition-all duration-200 z-10`}>
            {[1, 2, 3, 4, 5, 6].map((bath, idx) => (
              <li
                onClick={() => updateBath(bath)}
                className='py-1 hover:bg-gray-100 px-7 cursor-pointer text-gray-600 hover:text-gray-700'
                key={idx}>
                {bath}
              </li>
            ))}
          </ul>
        </div>
        {/* Status */}
        <div className='w-full flex flex-col items-center relative mb-5 '>
          <p className='w-full mb-1 text-xs font-medium'>Status</p>
          <p
            onClick={() => setShowStatus(!showStatus)}
            className='border font-medium  w-full bg-white py-3 rounded-md  shadow-sm px-7 flex items-center justify-between'>
            {status}
            <i
              class={`fa fa-chevron-down transform ${
                showStatus && 'rotate-180'
              } transition-transform duration-300`}
              aria-hidden='true'></i>
          </p>
          <ul
            className={`absolute ${
              !showStatus ? ' opacity-0 hidden' : 'opacity-100'
            } top-14 bg-gray-50 w-full rounded-md shadow-md  py-5 border transition-all duration-200 z-10`}>
            {['Active', 'Sold'].map((status, idx) => (
              <li
                onClick={() => updateStatus(status)}
                className='py-1 hover:bg-gray-100 px-7 cursor-pointer text-gray-600 hover:text-gray-700'
                key={idx}>
                {status}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;

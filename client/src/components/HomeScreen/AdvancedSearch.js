import { Checkbox, Slider } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ADD_AMENITIES,
  AREA,
  BATHS,
  BEDS,
  CITY,
  PRICE,
  RESET_FILTER,
  STATUS,
} from '../../actions/actionsType';
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

const AdvancedSearch = ({ children, show, history }) => {
  const filter = useSelector(state => state.filter);
  const [city, setCity] = useState(filter.city);
  const [showList, setShowlist] = useState(false);
  const [price, setPrice] = React.useState(
    filter.price ? filter.price : [100, 100000]
  );
  const [area, setArea] = React.useState(
    filter.area ? filter.area : [100, 34000]
  );
  const [bathRoom, setBathRoom] = useState(
    filter.baths ? filter.baths : 'Select Bath'
  );
  const [showBath, setShowBath] = useState(false);
  const [beds, setBeds] = useState(filter.beds ? filter.beds : 'Select Beds');
  const [showBeds, setShowBeds] = useState(false);
  const [status, setStatus] = useState(
    filter.status ? filter.status : 'Select Status'
  );
  const [showStatus, setShowStatus] = useState(false);
  const [selectAmenities, setAmenities] = useState(
    filter.amenities ? filter.amenities : []
  );
  const dispatch = useDispatch();
  const updateCity = city => {
    setCity(city);
    setShowlist(false);
    dispatch({ type: CITY, payload: city });
  };
  const updateBath = bath => {
    setBathRoom(bath);
    setShowBath(false);
    dispatch({ type: BATHS, payload: bath });
  };
  const updateBeds = beds => {
    setBeds(beds);
    setShowBeds(false);
    dispatch({ type: BEDS, payload: beds });
  };
  const updateStatus = status => {
    setStatus(status);
    setShowStatus(false);
    dispatch({ type: STATUS, payload: status });
  };
  const priceHandler = (event, newValue) => {
    setPrice(newValue);
    dispatch({ type: PRICE, payload: newValue });
  };
  const areaHandler = (event, newValue) => {
    setArea(newValue);
    dispatch({ type: AREA, payload: newValue });
  };
  const amenitiesHandler = item => {
    const isExist = selectAmenities.find(a => a === item);
    let amenities;
    if (isExist) {
      amenities = selectAmenities.filter(a => a !== item);
    } else {
      amenities = [...selectAmenities, item];
    }
    setAmenities(amenities);
    dispatch({ type: ADD_AMENITIES, payload: amenities });
  };

  const isFound = item => {
    const found = selectAmenities.find(a => a === item);
    return found;
  };

  const applyFilter = () => {
    history.push('/search');
  };

  const resetFilter = () => {
    dispatch({ type: RESET_FILTER });
    setAmenities([]);
    setArea([100, 34000]);
    setPrice([100, 100000]);
    setCity('');
    setBathRoom(false);
    setBeds(false);
    setStatus(false);
  };

  document.addEventListener('click', e => {
    if (!e.target.closest('.filter-list')) {
      setShowBath(false);
      setShowStatus(false);
      setShowBath(false);
      setShowlist(false);
      setShowBeds(false);
    }
  });
  return (
    <div>
      {children}
      <div
        id='search-height'
        className={`bg-gray-100 border w-full rounded-md  shadow-md mt-5 max-w-screen-xl mx-auto ${
          show ? 'show' : 'hide'
        } `}>
        <div className='md:grid gap-4  md:grid-cols-12 px-6 py-8 '>
          <div className='md:col-span-3   '>
            <h1 className='uppercase font-semibold mb-2'>amenities</h1>
            {amenities.map(item => (
              <div className='flex items-center font-medium text-gray-600'>
                <Checkbox
                  checked={isFound(item)}
                  edge='start'
                  onChange={() => amenitiesHandler(item)}
                  disableRipple
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className='md:col-span-9 md:grid md:gap-3 md:grid-cols-12'>
            <div className='w-full  flex flex-col items-center relative mb-5 md:col-span-6 mt-5 md:mt-0 filter-list'>
              <h1 className='text-left w-full font-semibold text-sm  mb-1'>
                Countery
              </h1>
              <p
                onClick={() => setShowlist(!showList)}
                className='border font-medium  w-full bg-white py-3 rounded-md  shadow-sm px-7 flex items-center justify-between'>
                {city ? city : 'Select city'}
                <i
                  class={`fa fa-chevron-down transform ${
                    showList && 'rotate-180'
                  } transition-transform duration-300`}
                  aria-hidden='true'></i>
              </p>
              <ul
                className={`absolute ${
                  !showList ? ' opacity-0 hidden' : 'opacity-100'
                } top-20 bg-gray-50 w-full rounded-md shadow-md  py-5 border transition-all duration-200 z-50`}>
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
            <div className='md:col-span-12 gap-5 grid grid-cols-12 '>
              <div className='col-span-12 md:col-span-6'>
                <h1 className='text-sm font-semibold text-gray-800 mb-1'>
                  Price
                </h1>
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
                    min={100}
                    step={2000}
                    max={100000}
                    value={price}
                    onChange={priceHandler}
                  />
                </div>
              </div>
              <div className='col-span-12 md:col-span-6'>
                <h1 className='text-sm font-semibold text-gray-800 mb-1'>
                  Area (sqft)
                </h1>
                <div className='flex items-center justify-between'>
                  <p className='px-4  py-3 w-40 text-center bg-gray-50 rounded-md font-medium shadow-sm mr-1'>
                    {area[0]}
                  </p>
                  <p className='px-4 w-40 text-center py-3 bg-gray-50 rounded-md font-medium shadow-sm'>
                    {area[1]}
                  </p>
                </div>
                <div className='mt-3 mb-5'>
                  <Slider
                    min={100}
                    step={2000}
                    max={34000}
                    value={area}
                    onChange={areaHandler}
                  />
                </div>
              </div>
            </div>
            {/* Beds */}
            <div className='filter-list w-full  flex flex-col items-center relative mb-5  md:col-span-4  cursor-pointer'>
              <p className='w-full mb-1 text-sm font-semibold'>Beds</p>
              <p
                onClick={() => setShowBeds(!showBeds)}
                className='border font-medium  w-full bg-white py-3 rounded-md  shadow-sm px-7 flex items-center justify-between'>
                {beds ? beds : 'Select Beds'}
                <i
                  class={`fa fa-chevron-down transform ${
                    showBeds && 'rotate-180'
                  } transition-transform duration-300`}
                  aria-hidden='true'></i>
              </p>
              <ul
                className={`absolute ${
                  !showBeds ? ' opacity-0 hidden' : 'opacity-100'
                } top-16 bg-gray-50 w-full rounded-md shadow-md  py-5 border transition-all duration-200 z-10 overflow-scroll h-32  `}
                id='scroll'>
                {[1, 2, 3, 4, 5, 6].map((beds, idx) => (
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
            <div className='md:col-span-4 w-full flex flex-col items-center relative mb-5  filter-list cursor-pointer'>
              <p className='w-full mb-1  text-sm font-semibold'>Bath</p>
              <p
                onClick={() => setShowBath(!showBath)}
                className='border font-medium  w-full bg-white py-3 rounded-md  shadow-sm px-7 flex items-center justify-between'>
                {bathRoom ? bathRoom : 'Select Baths'}
                <i
                  class={`fa fa-chevron-down transform ${
                    showBath && 'rotate-180'
                  } transition-transform duration-300`}
                  aria-hidden='true'></i>
              </p>
              <ul
                className={`absolute ${
                  !showBath ? ' opacity-0 hidden' : 'opacity-100'
                } top-16 bg-gray-50 w-full rounded-md shadow-md  py-5 border transition-all duration-200 z-10 overflow-scroll h-32  `}
                id='scroll'>
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
            <div className='md:col-span-4 w-full flex flex-col items-center relative mb-5 filter-list cursor-pointer'>
              <p className='w-full mb-1  text-sm font-semibold '>Status</p>
              <p
                onClick={() => setShowStatus(!showStatus)}
                className='border font-medium  w-full bg-white py-3 rounded-md  shadow-sm px-7 flex items-center justify-between'>
                {status ? status : 'Select Status'}
                <i
                  class={`fa fa-chevron-down transform ${
                    showStatus && 'rotate-180'
                  } transition-transform duration-300`}
                  aria-hidden='true'></i>
              </p>
              <ul
                className={`absolute ${
                  !showStatus ? ' opacity-0 hidden' : 'opacity-100'
                } top-14 bg-gray-50 w-full rounded-md shadow-md  py-5 border transition-all duration-200 z-10  `}>
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
            <div className=' col-span-12 grid grid-cols-12 gap-5'>
              <button
                onClick={applyFilter}
                className='border w-full h-full py-3 px-6 font-semibold uppercase tracking-wider  border-blue-500 hover:bg-blue-100 text-blue-500  focus:outline-none focus:ring transition-colors duration-300 flex items-center justify-center col-span-12 md:col-span-6'>
                <i class='fas  fa-filter   mr-2 '></i>
                <p> Apply Filter</p>
              </button>
              <div className=' col-span-12 md:col-span-6'>
                <button
                  onClick={resetFilter}
                  className='border w-full h-full py-3 px-6 font-semibold uppercase tracking-wider  border-red-500 bg-red-50 hover:bg-red-100 text-red-500  focus:outline-none focus:ring focus:ring-red-200 transition-colors duration-300 flex items-center justify-center'>
                  <i class='fas fa-undo-alt mr-2'></i>
                  <p>Reset</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;

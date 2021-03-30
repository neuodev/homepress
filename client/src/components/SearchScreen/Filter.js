import {
  SwipeableDrawer,
  Slider,
  Checkbox,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_AMENITIES } from '../../actions/actionsType';

const amenities = [
  'Balcony ',
  'Basement',
  'Car garage',
  'Central Heating',
  'Cleaning Service',
  'Dining Room ',
  'Dishwasher ',
  'Doorman ',
  'Elevator',
  'Family Room ',
  'Fireplace ',
  'Gym ',
  'Hardwood Flows',
  'Onsite Parking ',
  'Parking ',
  'Pets Allowed ',
  'Spa ',
  'Stunning views ',
  'Unit Washer/Dryer ',
  'Waterfront ',
];

const Filter = ({ history }) => {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState([100, 10000]);
  const [area, setArea] = useState([1000, 5000]);
  const [beds, setBeds] = useState(1);
  const [baths, setBaths] = useState(1);
  const [selectAmenities, setAmenities] = useState([]);
  const dispatch = useDispatch();
  const priceHandler = (e, value) => {
    setPrice(value);
  };
  const areaHandler = (e, value) => {
    setArea(value);
  };

  const handlerBedsChange = e => {
    setBeds(Number(e.target.value));
  };
  const handlerBathsChange = e => {
    setBaths(Number(e.target.value));
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

  return (
    <div className='bg-gray-50 shadow-lg w-full flex items-center justify-center'>
      <button
        className='text-center  border-t  py-2 w-full  focus:outline-none  container max-w-screen-lg mx-auto text-gray-600'
        onClick={() => setOpen(!open)}>
        <i class='far fa-filter mr-2   '></i>
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
                min={1000}
                step={50}
                max={10000}
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
                min={1000}
                step={50}
                max={5000}
                value={area}
                onChange={areaHandler}
              />
            </div>
          </div>
          <div className='border-t py-5 px-5 '>
            <h1 className='text-2xl font-semibold  text-blue-500'>Beds</h1>
            <FormControl component='fieldset'>
              <RadioGroup
                aria-label='gender'
                value={Number(beds)}
                onChange={handlerBedsChange}>
                {[1, 2, 3, 4, 5, 6].map(item => (
                  <div className='-mb-3'>
                    <FormControlLabel
                      value={item}
                      key={item}
                      control={<Radio />}
                      label={item}
                    />
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <div className='border-t py-5 px-5'>
            <h1 className='text-2xl font-semibold  text-blue-500'>Bath</h1>
            <FormControl component='fieldset'>
              <RadioGroup
                aria-label='gender'
                value={Number(baths)}
                onChange={handlerBathsChange}>
                {[1, 2, 3, 4, 5, 6].map(item => (
                  <div className='-mb-3'>
                    <FormControlLabel
                      value={item}
                      key={item}
                      control={<Radio />}
                      label={item}
                    />
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <div className='px-5  border-t py-5'>
            <h1 className='text-2xl font-semibold  text-blue-500'>Amenities</h1>
            <div className='flex  items-center flex-wrap '>
              {amenities.map((item, idx) => (
                <div className='flex  items-center -mb-2 w-1/2' key={idx}>
                  <Checkbox
                    onChange={() => amenitiesHandler(item)}
                    checked={isFound()}
                  />
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

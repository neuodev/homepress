import React, { useState } from 'react';
import Steps from './Steps';
import Select from './Select';
import './style.css';
import { Checkbox } from '@material-ui/core';
const selectCategory = ['Buy', 'Rent', 'Sold'];
const selectStores = ['Single Family', 'Multi Family'];
const selectRegion = [
  'Las Vegas',
  'Cleveland',
  'Los Angeles',
  'Philadelphia',
  'Sacromento',
  'Dan Diego',
  'San Francisco',
  'San ose',
];

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

const selectBeds = [1, 2, 3, 4, 5, 6];
const selectBaths = [1, 2, 3, 4, 5, 6];
const selectGarage = [1, 2, 3, 4, 5, 6];
const selectHeating = ['Yes', 'No'];
const selectCooling = ['Yes', 'No'];
const selectStatus = ['Active', 'Sold'];

const CreateListing = () => {
  const [category, setCagegory] = useState('Select');
  const [showCategory, setShowCategory] = useState(false);

  const [stores, setStores] = useState('Select');
  const [showStores, setShowStores] = useState(false);

  const [region, setRegion] = useState('Select');
  const [showRegion, setShowRegion] = useState(false);

  const [beds, setBeds] = useState('Select');
  const [showBeds, setShowBeds] = useState(false);

  const [baths, setBaths] = useState('Select');
  const [showBaths, setShowBaths] = useState(false);

  const [garage, setGarage] = useState('Select');
  const [showGarage, setShowGarage] = useState(false);

  const [heating, setHeating] = useState('Select');
  const [showHeating, setShowHeating] = useState(false);

  const [cooling, setCooling] = useState('Select');
  const [showCooling, setShowCooling] = useState(false);

  const [status, setStatus] = useState('Select');
  const [showStatus, setShowStatus] = useState(false);

  return (
    <div>
      <Steps activeStep={2} />
      <div className='my-10 max-w-screen-lg px-5 mx-auto'>
        <div className='flex flex-col justify-center mb-5'>
          <label className='font-semibold mb-1' htmlFor='title'>
            Title
          </label>
          <input
            className='w-full bg-gray-100 py-2 focus:outline-none px-5'
            type='text'
          />
        </div>
        <div className='grid gap-3 grid-cols-12 mb-5'>
          <div className='col-span-4'>
            <Select
              show={showCategory}
              setShow={setShowCategory}
              item={category}
              setItem={setCagegory}
              label='Category'
              list={selectCategory}
            />
          </div>
          <div className='col-span-4'>
            <Select
              show={showRegion}
              setShow={setShowRegion}
              item={region}
              setItem={setRegion}
              label='Region'
              list={selectRegion}
            />
          </div>
          <div className='col-span-4'>
            <Select
              show={showStores}
              setShow={setShowStores}
              item={stores}
              setItem={setStores}
              label='Stores'
              list={selectStores}
            />
          </div>
        </div>
        <div className='grid gap-3 grid-cols-12 mb-5'>
          <div className='col-span-6  flex flex-col justify-center'>
            <label className='font-semibold text-sm mb-1' htmlFor='price'>
              Price
            </label>
            <input
              className='bg-gray-100 py-2 px-4 focus:outline-none'
              type='text'
            />
          </div>
          <div className='col-span-6  flex flex-col justify-center'>
            <label className='font-semibold text-sm mb-1' htmlFor='Discount'>
              Discount (by %)
            </label>
            <input
              className='bg-gray-100 py-2 px-4 focus:outline-none'
              type='number'
            />
          </div>
        </div>
        <div className='mb-5'>
          <label className='font-semibold text-sm mb-1' htmlFor='description'>
            Description
          </label>

          <textarea
            className='w-full  h-full focus:outline-none focus:ring-2 focus:ring-blue-500 p-5  bg-gray-100'
            name='description'
            id='description'
            cols='30'
            rows='10'></textarea>
        </div>
        <div className='grid gap-4 grid-cols-12 mb-5'>
          <div className='col-span-12 md:col-span-4'>
            <Select
              label='Beds'
              item={beds}
              setItem={setBeds}
              list={selectBeds}
              show={showBeds}
              setShow={setShowBeds}
            />
          </div>
          <div className='col-span-12 md:col-span-4'>
            <Select
              label='Baths'
              item={baths}
              setItem={setBaths}
              list={selectBaths}
              show={showBaths}
              setShow={setShowBaths}
            />
          </div>
          <div className='col-span-12 md:col-span-4'>
            <label htmlFor='year' className='font-semibold text-sm mb-1 '>
              Year Built
            </label>
            <input
              type='text'
              className='w-full bg-gray-100 focus:outline-none py-2 px-4 '
            />
          </div>
        </div>
        <div className='grid grid-cols-12 gap-4 mb-5'>
          <div className='col-span-12 md:col-span-4'>
            <Select
              label='Heating'
              item={heating}
              setItem={setHeating}
              list={selectHeating}
              show={showHeating}
              setShow={setShowHeating}
            />
          </div>
          <div className='col-span-12 md:col-span-4'>
            <Select
              label='Cooling'
              item={cooling}
              setItem={setCooling}
              list={selectCooling}
              show={showCooling}
              setShow={setShowCooling}
            />
          </div>
          <div className='col-span-12 md:col-span-4'>
            <Select
              label='Garage'
              item={garage}
              setItem={setGarage}
              list={selectGarage}
              show={showGarage}
              setShow={setShowGarage}
            />
          </div>
        </div>
        <div className='grid gap-5 grid-cols-12 mb-5'>
          <div className='col-span-12 md:col-span-6 flex flex-col'>
            <label htmlFor='area' className='text-sm font-semibold  mb-1'>
              sq ft
            </label>
            <input
              className='bg-gray-100 py-2 px-4  w-full focus:outline-none '
              type='text'
            />
          </div>
          <div className='col-span-12 md:col-span-6'>
            <Select
              label='Status'
              item={status}
              setItem={setStatus}
              list={selectStatus}
              show={showStatus}
              setShow={setShowStatus}
            />
          </div>
        </div>
        <div className='mb-24'>
          <div>
            <h1 className='text-sm font-semibold  mb-1'>Amenities</h1>
          </div>
          <div className='grid grid-cols-12 gap-2'>
            {amenities.map((item, idx) => (
              <div
                key={idx}
                className='flex items-center col-span-6 md:col-span-4 '>
                <Checkbox />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;

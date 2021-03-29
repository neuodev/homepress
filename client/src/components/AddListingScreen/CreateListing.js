import React, { useState } from 'react';
import Steps from './Steps';
import Select from './Select';
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

const CreateListing = () => {
  const [category, setCagegory] = useState('Select');
  const [showCategory, setShowCategory] = useState(true);
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
        <div className='flex items-center justify-between'>
          <Select
            show={showCategory}
            setShow={setShowCategory}
            item={category}
            setItem={setCagegory}
            label='Category'
            list={selectCategory}
          />
          <div>
            <label className='font-semibold mb-1' htmlFor='region'>
              Region
            </label>
            <p>Select</p>
          </div>
          <div>
            <label className='font-semibold mb-1' htmlFor='stores'>
              Stores
            </label>
            <p>Select</p>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor='price'>Price</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor='Discount'>Discount (by %)</label>
            <input type='number' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;

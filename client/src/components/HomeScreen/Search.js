import React, { useState } from 'react';
import AdvancedSearch from './AdvancedSearch';

// 1 ,2 ,3 ,4
// 3    7     2  => 12

const types = ['Apartments', 'Offices', 'Townhome', 'Houses', 'Studio'];
const Search = () => {
  const [list, setList] = useState(false);
  const [type, setType] = useState(types[0]);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(true);
  const updateType = type => {
    setType(type);
    setList(false);
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  document.addEventListener('click', e => {
    if (!e.target.closest('.filter-list')) {
      setList(false);
    }
  });
  return (
    <div className='py-10 px-5 bg-gray-100 '>
      <div className='container mx-auto max-w-screen-xl grid gap-5  grid-cols-12'>
        <div className='w-full  flex flex-col items-center relative   filter-list col-span-12 md:col-span-6 lg:col-span-3 '>
          <p
            onClick={() => setList(!list)}
            className='border font-medium  w-full bg-white py-3 lg:py-4   shadow-sm px-7 flex items-center justify-between'>
            {type}
            <i
              class={`fa fa-chevron-down transform ${
                list && 'rotate-180'
              } transition-transform duration-300`}
              aria-hidden='true'></i>
          </p>
          <ul
            className={`absolute ${
              !list ? ' opacity-0 hidden' : 'opacity-100'
            } top-14 bg-gray-50 w-full  shadow-md  py-5 border transition-all duration-200 z-50`}>
            {types.map((type, idx) => (
              <li
                onClick={() => updateType(type)}
                className='py-1 hover:bg-gray-100 px-7 cursor-pointer text-gray-600 hover:text-gray-700'
                key={idx}>
                {type}
              </li>
            ))}
          </ul>
        </div>
        <input
          className='w-full  col-span-12 md:col-span-6 lg:col-span-3 py-3 px-7 shadow-sm border  focus:outline-none focus:ring-2 focus:ring-blue-300   '
          type='text'
          placeholder='Search'
        />
        <div className='col-span-12 md:col-span-6 lg:col-span-3 '>
          <button className='focus:outline-none col-span-12 md:col-span-6  w-full py-4   font-semibold bg-blue-500 uppercase tracking-wider text-white focus:ring-4   '>
            <i class='fa fa-search mr-2' aria-hidden='true'></i>
            <span>Search</span>
          </button>
        </div>
        <div className='flex items-center justify-center  lg:mt-0  col-span-12 md:col-span-6 lg:col-span-3'>
          <button
            onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
            className='md:w-full text-center w-full h-full   border-2 focus:outline-none flex items-center justify-center  border-blue-400 text-blue-400 font-semibold  space-x-2'>
            <p> Advanced Search</p>{' '}
            <i class='fa fa-chevron-down' aria-hidden='true'></i>
          </button>
        </div>
      </div>
      <div className='mt-5 w-full '>
        <AdvancedSearch
          show={showAdvancedSearch ? true : false}></AdvancedSearch>
      </div>
    </div>
  );
};

export default Search;

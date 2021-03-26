import React, { useState } from 'react';
import AdvancedSearch from './AdvancedSearch';

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
  return (
    <div className='py-10 px-5 bg-gray-100 '>
      <div className='container mx-auto max-w-screen-xl flex items-center justify-center flex-col lg:flex-row lg:justify-between'>
        <div className='w-full lg:w-1/3 flex flex-col items-center relative mb-5 lg:mb-0'>
          <p
            onClick={() => setList(!list)}
            className='border font-medium  w-full bg-white py-3 rounded-md  shadow-sm px-7 flex items-center justify-between'>
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
            } top-14 bg-gray-50 w-full rounded-md shadow-md  py-5 border transition-all duration-200`}>
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
        <div className='w-full lg:w-1/2'>
          <form
            onSubmit={onSubmit}
            className='w-full lg:flex  lg:items-center lg:justify-center '>
            <input
              className='w-full  py-3 px-7 rounded-md shadow-sm border  focus:outline-none focus:ring-2 focus:ring-green-300 mb-5 lg:mb-0 lg:h-12 '
              type='text'
              placeholder='Search'
            />
            <button className='focus:outline-none w-full py-4 lg:h-12 lg:w-44 lg:ml-2  bg-blue-500 rounded-md uppercase tracking-wider text-white font-medium focus:ring-4   '>
              <i class='fa fa-search mr-2' aria-hidden='true'></i>
              <span>Search</span>
            </button>
          </form>
        </div>
        <div className='flex items-center justify-center '>
          <button
            onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
            className=' border-b-2 border-blue-400 text-blue-400 font-medium border-dashed focus:outline-none flex items-center justify-between space-x-2'>
            <p> Advanced Search</p>{' '}
            <i class='fa fa-chevron-down' aria-hidden='true'></i>
          </button>
        </div>
      </div>
      <div className='mt-5 w-full'>
        <AdvancedSearch
          show={showAdvancedSearch ? true : false}></AdvancedSearch>
      </div>
    </div>
  );
};

export default Search;

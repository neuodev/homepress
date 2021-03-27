import React, { useState } from 'react';
import PropertySearchCard from './PropertySearchCard';

const selectSort = [
  {
    text: 'Newset',
  },
  {
    text: 'Price (Lo-Hi)',
  },
  {
    text: 'Price(Hi-Low)',
  },
  {
    text: 'Lowest sqFt',
  },
  {
    text: 'Largest SqFt',
  },
];

const Properties = () => {
  const [sort, setSort] = useState(selectSort[0]);
  const [showList, setSowList] = useState(true);

  const updateSelect = sort => {
    setSowList(false);
    setSort(sort);
  };

  document.addEventListener('click', e => {
    if (!e.target.closest('#sort-list')) {
      setSowList(false);
    }
  });
  return (
    <div className='col-span-12   lg:col-span-6 px-5 py-10 lg:pt-2' id='pro-h'>
      <div className='mb-5 text-center flex  flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-start '>
        <div>
          <h1 className='text-3xl font-semibold text-gray-700 mb-4 lg:mb-1'>
            Apartments
          </h1>
          <p className='mb-4 lg:text-left'>
            <span className='font-bold'>4</span> results
          </p>
        </div>
        <div className='relative'>
          <div
            id='sort-list'
            onClick={() => setSowList(!showList)}
            className='flex items-center justify-between w-48 bg-gray-100  px-3 py-2 '>
            <i class='fad fa-sort-alt mr-3' aria-hidden='true'></i>
            <h1 className='mr-3 text-lg'>{sort.text}</h1>
            <i
              class={`fad fa-chevron-down transform duration-500 ${
                showList && 'rotate-180'
              }`}
              aria-hidden='true'></i>
          </div>
          {showList && (
            <div className='absolute left-0 top-12 bg-gray-50 w-full  py-3 text-left'>
              {selectSort.map((item, idx) => (
                <div
                  onClick={() => updateSelect(item)}
                  className='px-3 py-1 hover:bg-blue-500 hover:text-white cursor-pointer'
                  key={idx}>
                  <h1>{item.text}</h1>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <PropertySearchCard />
      <PropertySearchCard />
      <PropertySearchCard />
      <PropertySearchCard />
    </div>
  );
};

export default Properties;

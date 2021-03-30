
import React, {  useState } from 'react';
import PropertySearchCard from './PropertySearchCard';
import { useDispatch } from 'react-redux';
import { RESET_FILTER, SORT } from '../../actions/actionsType';

const selectSort = [
  {
    text: 'Newset',
    value: '-createdAt',
  },
  {
    text: 'Price (Lo-Hi)',
    value: 'price',
  },
  {
    text: 'Price(Hi-Low)',
    value: '-price',
  },
  {
    text: 'Lowest sqFt',
    value: 'area',
  },
  {
    text: 'Largest SqFt',
    value: '-area',
  },
];

const Properties = ({ properties, history }) => {
  const [sort, setSort] = useState(selectSort[0]);
  const [showList, setSowList] = useState(false);

  const dispatch = useDispatch();
  const updateSelect = sort => {
    setSowList(false);
    setSort(sort);
    dispatch({ type: SORT, payload: sort.value });
  };
  const search = () => {
    dispatch({ type: RESET_FILTER });
    history.push('/search');
  };
  document.addEventListener('click', e => {
    if (!e.target.closest('#sort-list')) {
      setSowList(false);
    }
  });
  return (
    <div className='col-span-12   lg:col-span-6   ' id='pro-h'>
      <div className='mb-5 lg:mb-2 lg:mt-2  text-center flex  flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-start  px-5 py-4'>
        <div>
          <h1 className='text-3xl font-semibold text-gray-700 mb-4 lg:mb-1'>
            Apartments
          </h1>
          <p className='mb-4 lg:text-left'>
            <span className='font-bold'>{properties.length}</span> results
          </p>
        </div>
        <div className='relative cursor-pointer'>
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
            <div className='absolute left-0 top-12 bg-gray-50 w-full  py-3 text-left shadow-md'>
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
      <div>
        {properties.length === 0 ? (
          <div className='px-4'>
            <div className='w-full bg-yellow-200 px-5 py-8 uppercase tracking-wider font-semibold text-yellow-700 text-xl shadow-xl'>
              <h1 className=''>No Result Founded</h1>
              <button
                onClick={search}
                className='py-3 px-6 bg-yellow-300 my-4 uppercase tracking-wider  text-sm  font-semibold focus:outline-none focus:ring focus:ring-yellow-400 '>
                Look for Another Property
              </button>
            </div>
          </div>
        ) : (
          properties.map(property => {
            return (
              <div className='px-5'>
                <PropertySearchCard property={property} key={property.id} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Properties;

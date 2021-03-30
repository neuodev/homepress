import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { SEARCH_PROPERTY } from '../../querys/querys';
import Alert from '../utils/Alert';
import PropertySearchCard from './PropertySearchCard';
import { useSelector, useDispatch } from 'react-redux';
import { pipeline } from '../utils/pipeline';
import { SORT } from '../../actions/actionsType';
import { getLocations } from '../../utils/getLocations';
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

const Properties = () => {
  const [sort, setSort] = useState(selectSort[0]);
  const [showList, setSowList] = useState(false);
  const advancedFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const updateSelect = sort => {
    setSowList(false);
    setSort(sort);
    dispatch({ type: SORT, payload: sort.value });
  };

  const filterPipeline = pipeline(advancedFilter);

  const { data, loading, error } = useQuery(SEARCH_PROPERTY, {
    variables: {
      filter: filterPipeline,
    },
  });

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
            <span className='font-bold'>{data && data.properties.length}</span>{' '}
            results
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
        {loading ? (
          <div>Loading</div>
        ) : error ? (
          <Alert serverity='error' message={error} />
        ) : (
          data.properties.map(property => {

            const features = getLocations(data.properties)

            return <PropertySearchCard property={property} key={property.id} />;
          })
        )}
      </div>
    </div>
  );
};

export default Properties;

import React from 'react';
import { Skeleton } from '@material-ui/lab';
import './style.css';
const SearchSkeleton = () => {
  return (
    <div className='grid grid-cols-12 '>
      <div className='col-span-12 lg:col-span-6 px-5 mt-5 lg:mt-0'>
        <Skeleton variant='rect' id='skeleton-h' />
      </div>
      <div className='col-span-12 lg:col-span-6'>
        <div className='p-5'>
          <div className='flex items-center justify-between w-full '>
            <Skeleton variant='text' height={40} width={250} />
            <Skeleton variant='text' height={40} width={100} />
          </div>
        </div>
        <div className='p-5 flex flex-col space-y-2'>
          <Skeleton variant='rect' height={250} />
          <Skeleton variant='rect' height={250} />
          <Skeleton variant='rect' height={250} />
        </div>
      </div>
    </div>
  );
};

export default SearchSkeleton;

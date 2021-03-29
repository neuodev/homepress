import React from 'react';
import { Skeleton } from '@material-ui/lab';
const PropertySkeleton = () => {
  return (
    <div className='col-span-6 lg:col-span-4 xl:col-span-6  rounded-lg overflow-hidden xl:flex xl:items-center'>
      <div className='mb-3 xl:h-full xl:w-1/2 xl:mr-5'>
        <Skeleton variant='rect' height={200} />
      </div>
      <div className=' xl:h-full xl:w-1/2'>
        <div className='mb-3 xl:mb-5'>
          <Skeleton variant='text' width={160} />
        </div>
        <div className='mb-3 '>
          <div className='grid grid-cols-12 gap-4 '>
            <div className='col-span-6'>
              <div className='flex  items-center justify-between'>
                <div className='flex-none mr-3'>
                  <Skeleton height={35} width={35} variant='circle' />
                </div>
                <div className='w-full'>
                  <Skeleton height={40} variant='text' />
                </div>
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex  items-center justify-between'>
                <div className='flex-none mr-3'>
                  <Skeleton height={35} width={35} variant='circle' />
                </div>
                <div className='w-full'>
                  <Skeleton height={40} variant='text' />
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-6'>
              <div className='flex  items-center justify-between'>
                <div className='flex-none mr-3'>
                  <Skeleton height={35} width={35} variant='circle' />
                </div>
                <div className='w-full'>
                  <Skeleton height={40} variant='text' />
                </div>
              </div>
            </div>
            <div className='col-span-6 xl:mb-5'>
              <div className='flex  items-center justify-between'>
                <div className='flex-none mr-3'>
                  <Skeleton height={35} width={35} variant='circle' />
                </div>
                <div className='w-full'>
                  <Skeleton height={40} variant='text' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center '>
            <div className='mr-3'>
              <Skeleton variant='text' height={40} width={70} />
            </div>
            <Skeleton variant='text' height={40} width={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySkeleton;

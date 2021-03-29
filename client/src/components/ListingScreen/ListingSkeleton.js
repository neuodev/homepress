import React from 'react';
import { Skeleton } from '@material-ui/lab';
const ListingSkeleton = () => {
  return (
    <div className='max-w-screen-lg mx-auto px-5'>
      <div className='flex flex-col items-center justify-center my-10 space-y-3'>
        <Skeleton variant='rect' height={30} width={350} />
        <Skeleton variant='rect' height={30} width={300} />
        <Skeleton variant='rect' height={30} width={450} />
        <Skeleton variant='rect' height={30} width={210} />
        <Skeleton variant='rect' height={30} width={140} />
      </div>
      <div>
        <Skeleton variant='rect' height={400} />
        <div className='flex items-center justify-start space-x-3  my-5'>
          <Skeleton variant='rect' height={70} width={70} />
          <Skeleton variant='rect' height={70} width={70} />
          <Skeleton variant='rect' height={70} width={70} />
          <Skeleton variant='rect' height={70} width={70} />
        </div>
      </div>
      <div className='my-10'>
        <div className='mb-5'>
          <Skeleton variant='text' height={30} width={200} />
        </div>
        <div className='w-8/12'>
          <Skeleton variant='text' />
          <Skeleton variant='text' />
          <Skeleton variant='text' />
          <Skeleton variant='text' />
          <Skeleton variant='text' />
          <Skeleton variant='text' />
          <Skeleton variant='text' />
          <Skeleton variant='text' />
        </div>
      </div>
    </div>
  );
};

export default ListingSkeleton;

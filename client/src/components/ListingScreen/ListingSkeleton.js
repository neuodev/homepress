import React from 'react';
import { Skeleton } from '@material-ui/lab';
const ListingSkeleton = () => {
  return (
    <div>
      <Skeleton variant='rect' height={40} width={150} />
      <Skeleton variant='rect' height={40} width={100} />
      <Skeleton variant='rect' height={40} width={250} />
      <Skeleton variant='rect' height={40} width={210} />
      <Skeleton variant='rect' height={40} width={90} />
    </div>
  );
};

export default ListingSkeleton;

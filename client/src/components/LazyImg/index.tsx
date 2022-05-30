import { Skeleton } from '@mui/material';
import React from 'react';
import LazyLoad from 'react-lazyload';

export default function LazyImg({ children }: { children: React.ReactElement }) {
  return (
    <LazyLoad
      placeholder={
        <Skeleton
          variant="circular"
          sx={{
            width: '15rem',
            height: '15rem',
          }}
        />
      }
    >
      {children}
    </LazyLoad>
  );
}

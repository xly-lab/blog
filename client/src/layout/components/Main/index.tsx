import React from 'react';
import ScrollTop from '../../../components/ScrollTop';
import Side from './components/Side';
import style from './index.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <div
      className={`${style.minHeight} 
      mt-12
      flex 
      m-auto 
      p-2
      box-border
      md:flex-row flex-col 
      md:space-x-4 space-x-0 
      md:space-y-0 space-y-4 
      md:items-start items-center
      md:justify-center justify-start 
      `}
    >
      <div className="md:hidden block w-full ">{children}</div>
      <div className={`md:block hidden ${style.maxWidth} `}>{children}</div>
      <Side />
      <ScrollTop />
    </div>
  );
}

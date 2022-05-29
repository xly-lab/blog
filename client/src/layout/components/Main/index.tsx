import React from 'react';
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
      sm:flex-row flex-col 
      sm:space-x-4 space-x-0 
      sm:space-y-0 space-y-4 
      sm:items-start items-center
      sm:justify-center justify-start 
      transition-all duration-300
      `}
    >
      <div className="sm:hidden block w-full transition-all duration-300">{children}</div>
      <div className={`sm:block hidden ${style.maxWidth} transition-all duration-300`}>{children}</div>
      <Side />
    </div>
  );
}

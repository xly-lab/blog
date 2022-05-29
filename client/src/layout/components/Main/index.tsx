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
      sm:flex-row 
      flex-col 
      m-auto 
      p-2
      box-border
      sm:space-x-4 space-x-0 
      sm:space-y-0 space-y-4 
      sm:items-start items-center
      sm:justify-center justify-start 
      `}
    >
      <div className="md:w-2/5 w-full">{children}</div>
      <Side />
    </div>
  );
}

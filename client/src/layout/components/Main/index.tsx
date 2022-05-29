import React from 'react';
import style from './index.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  return <div className={`${style.minHeight}`}>{children}</div>;
}

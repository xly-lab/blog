import React from 'react';
import style from './index.module.scss';

export default function Footer() {
  return (
    <div className="w-full bg-blue-300 flex flex-col justify-around items-center h-16">
      <div className={`${style.fontStyle} w-max`}>只需要改一行代码，不会影响其它程序的。</div>
      <div>Powered react ;no dream</div>
    </div>
  );
}

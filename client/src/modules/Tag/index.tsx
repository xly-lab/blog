import React, { useMemo } from 'react';
import { randomNumber } from '../../utils';

export default function Tag() {
  const colorMap = useMemo<{ [key: string]: string }>(
    () => ({
      0: 'pink',
      1: 'gray',
      2: 'red',
      3: 'yellow',
      4: 'green',
      5: 'blue',
      6: 'indigo',
      7: 'purple',
    }),
    []
  );
  return (
    <div className="w-full bg-white p-8 rounded space-x-4 break-all">
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
      <span
        className={`w-max rounded  inline-block cursor-pointer box-border mr-2 mb-2 bg-${
          colorMap[String(randomNumber())]
        }-500 py-1 px-2 text-center`}
      >
        Text
      </span>
    </div>
  );
}

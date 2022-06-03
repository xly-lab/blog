import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import React from 'react';
import Tag from '../../../../../../../modules/Tag';
export default function Tags() {
  return (
    <div className="w-full bg-white rounded flex flex-col  space-y-4 p-2 box-border">
      <div className="space-x-2 text-xl flex">
        <LocalOfferIcon />
        <span>标签</span>
      </div>
      <Tag />
    </div>
  );
}

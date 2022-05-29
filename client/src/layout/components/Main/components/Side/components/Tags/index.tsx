import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Button } from '@mui/material';
import React from 'react';
export default function Tags() {
  return (
    <div className="w-full bg-white rounded flex flex-col  space-y-4 p-2 box-border">
      <div className="space-x-2 text-xl flex">
        <LocalOfferIcon />
        <span>标签</span>
      </div>
      <div className="font-bold">
        <Button title="Secondary">Secondary</Button>
        <Button>123</Button>
        <Button>标签</Button>
        <Button>Secondary</Button>
        <Button>qwe</Button>
        <Button>Secondary</Button>
        <Button>123gs</Button>
      </div>
    </div>
  );
}

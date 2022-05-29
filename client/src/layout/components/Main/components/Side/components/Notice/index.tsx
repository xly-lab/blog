import CampaignIcon from '@mui/icons-material/Campaign';
import { red } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom';
export default function Notice() {
  return (
    <div className="w-full bg-white rounded flex flex-col items-start space-y-4 p-2 box-border">
      <div className="space-x-2">
        <CampaignIcon sx={{ color: red[700] }} />
        <span>公告</span>
      </div>
      <div>
        喔嚯，还不能评论
        <Link to="/about" className="text-blue-400 ml-1">
          友情链接
        </Link>
      </div>
    </div>
  );
}

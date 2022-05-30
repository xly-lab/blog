import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React from 'react';
export default function LastArticle() {
  return (
    <div className="w-full bg-white rounded flex flex-col items-start space-y-4 p-2 box-border">
      <div className="space-x-2 text-xl flex items-center">
        <AccessTimeIcon />
        <span>最新文章</span>
      </div>
      <div className="flex justify-start space-x-2 h-18">
        <img src="" alt="" className="w-16 h-16" />
        <div className="flex flex-col h-full justify-center space-y-1  overflow-hidden">
          <div className="truncate normal-case  md:w-48 w-full" title="liunx 定时备份博客数据 Git">
            liunx 定时备份博客数据 Git
          </div>
          <div>2021-08-08</div>
        </div>
      </div>
    </div>
  );
}

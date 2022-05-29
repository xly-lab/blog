import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Avatar, Button } from '@mui/material';
import { green } from '@mui/material/colors';
import React from 'react';
export default function UserInfo() {
  return (
    <div className="w-full bg-white rounded flex flex-col items-center space-y-4 p-2 box-border">
      <Avatar alt="头像" sx={{ bgcolor: green[100], width: '6rem', height: '6rem' }}>
        <AccountCircleIcon className="text-9xl" />
      </Avatar>
      <div>no dream</div>
      <div>这不是BUG，是功能</div>
      <div className="flex w-full justify-around">
        <div className="cursor-pointer flex flex-col items-center">
          <div className="text-xl">文章</div>
          <div>23</div>
        </div>
        <div className="cursor-pointer flex flex-col items-center">
          <div className="text-xl">标签</div>
          <div>1</div>
        </div>
        <div className="cursor-pointer flex flex-col items-center">
          <div className="text-xl">评论</div>
          <div>12321</div>
        </div>
      </div>
      <Button variant="contained" endIcon={<GitHubIcon />}>
        写的啥？我看看
      </Button>
    </div>
  );
}

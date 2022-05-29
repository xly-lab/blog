import styled from '@emotion/styled';
import ArticleIcon from '@mui/icons-material/Article';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SearchIcon from '@mui/icons-material/Search';
import { Chip, IconButton } from '@mui/material';
import React from 'react';

import style from './index.module.scss';

const Logo = styled.div`
  font-family: 'Blog txt';
  font-weight: bold;
`;

export default function Header() {
  return (
    <div
      className={`h-12 bg-black bg-opacity-10 flex flex-row justify-between items-center px-4 min-w-max ${style.headerBg}`}
    >
      <Logo className="animate-pulse">No Dream</Logo>
      <div className="space-x-2 hidden  sm:block animate-bounce">
        <Chip className="hover:bg-blue-200" size="small" icon={<HomeIcon />} label="首页" />
        <Chip className="hover:bg-blue-200" size="small" icon={<ArticleIcon />} label="文章" />
        <Chip className="hover:bg-blue-200" size="small" icon={<LocalOfferIcon />} label="标签" />
        <Chip className="hover:bg-blue-200" size="small" icon={<HdrWeakIcon />} label="动态" />
        <Chip className="hover:bg-blue-200" size="small" icon={<InfoIcon />} label="关于" />
        <Chip className="hover:bg-blue-200" size="small" icon={<SearchIcon />} label="搜索" />
      </div>
      <div className="sm:hidden block space-x-2 ">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <FormatListBulletedIcon />
        </IconButton>
      </div>
    </div>
  );
}

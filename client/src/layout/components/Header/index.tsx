import styled from '@emotion/styled';
import ArticleIcon from '@mui/icons-material/Article';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SearchIcon from '@mui/icons-material/Search';
import { Chip, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const Logo = styled.div`
  font-weight: bold;
`;

export default function Header() {
  return (
    <div
      className={`h-12 bg-blue-200  flex flex-row justify-between items-center px-4 min-w-max fixed w-full top-0 z-10`}
    >
      <Logo className="animate-pulse">No Dream</Logo>
      <div className="space-x-2 hidden  sm:block ">
        <Link to="/">
          <Chip className="hover:bg-blue-300" size="medium" icon={<HomeIcon />} label="首页" />
        </Link>
        <Link to="/article">
          <Chip className="hover:bg-blue-300" size="medium" icon={<ArticleIcon />} label="文章" />
        </Link>
        <Link to="/tag">
          <Chip className="hover:bg-blue-300" size="medium" icon={<LocalOfferIcon />} label="标签" />
        </Link>
        <Link to="/dynamic">
          <Chip className="hover:bg-blue-300" size="medium" icon={<HdrWeakIcon />} label="动态" />
        </Link>
        <Link to="/about">
          <Chip className="hover:bg-blue-300" size="medium" icon={<InfoIcon />} label="关于" />
        </Link>
        <Link to="/search">
          <Chip className="hover:bg-blue-300" size="medium" icon={<SearchIcon />} label="搜索" />
        </Link>
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

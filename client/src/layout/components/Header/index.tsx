import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SearchIcon from '@mui/icons-material/Search';
import {
  Avatar,
  Chip,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { green } from '@mui/material/colors';
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import useScroll from '../../../hooksComponents/Scroll';

interface Menu {
  text: string;
  icon: React.ReactElement;
  path: string;
}

const Logo = styled.div`
  font-weight: bold;
`;

const Info = styled.div`
  position: relative;
  padding: 2rem 0;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
`;

export default function Header() {
  const winSize = useScroll();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const menuObj: Menu[] = useMemo<Menu[]>(
    () => [
      {
        text: '首页',
        icon: <HomeIcon />,
        path: '/',
      },
      {
        text: '标签',
        icon: <LocalOfferIcon />,
        path: '/tag',
      },
      {
        text: '关于',
        icon: <InfoIcon />,
        path: '/about',
      },
      {
        text: '搜索',
        icon: <SearchIcon />,
        path: '/search',
      },
    ],
    []
  );
  return (
    <div
      className={`h-12 bg-blue-200  flex flex-row justify-between items-center px-4 min-w-max fixed w-full top-0 z-10 transition-transform`}
      style={{ transform: winSize.height > 100 ? 'translateY(-100px)' : 'translateY(0px)' }}
    >
      <Logo className="animate-pulse">No Dream</Logo>
      <div className="space-x-2 hidden   md:block ">
        {menuObj.map((item) => (
          <Link to={item.path} key={item.path}>
            <Chip className="hover:bg-blue-300" size="medium" icon={item.icon} label={item.text} />
          </Link>
        ))}
      </div>
      <div className=" md:hidden block space-x-2 ">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton onClick={() => setOpenDrawer(true)}>
          <FormatListBulletedIcon />
        </IconButton>
      </div>
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div className="w-48 space-y-4">
          <Info className="space-y-4 bg-blue-200">
            <Avatar alt="头像" sx={{ bgcolor: green[100], width: '6rem', height: '6rem' }} className="w-full m-auto">
              <AccountCircleIcon className="text-9xl" />
            </Avatar>
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
          </Info>
          <List>
            {menuObj.map((item) => (
              <ListItem disablePadding key={item.path}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Link to={item.path}>
                    <ListItemText primary={item.text} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

import ChatIcon from '@mui/icons-material/Chat';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import UpdateIcon from '@mui/icons-material/Update';
import { blue } from '@mui/material/colors';
import React from 'react';
import img from './imgs/art_img.jpg';
import style from './index.module.scss';
export default function ArticleCard() {
  return (
    <div
      className="
      bg-white 
      w-full 
      rounded 
      flex 
      sm:flex-row flex-col
      sm:justify-start justify-center
      items-start 
      space-y-4 
      box-border
      overflow-hidden
      "
    >
      <div className={`w-full sm:w-60 h-60 bg-center bg-cover overflow-hidden `}>
        <img
          src={img}
          className="w-full h-full transform  hover:scale-110 duration-300 transition-transform m-auto object-contain"
          alt=""
        />
      </div>
      <div
        className={`sm:flex hidden ${style.right} overflow-hidden  flex-col justify-evenly transition-all duration-300`}
      >
        <Container />
      </div>
      <div className="sm:hidden  w-full overflow-hidden flex flex-col justify-evenly transition-all duration-300">
        <Container />
      </div>
    </div>
  );
}

function Container() {
  return (
    <>
      <div className="text-xl cursor-pointer">Nginx代理阿里云OSS免流</div>
      <div
        className="flex 
      sm:flex-row flex-col 
      sm:items-center items-start 
      sm:space-x-1 space-y-1
      text-sm "
      >
        <span className="text-gray-400">
          <EventNoteIcon
            fontSize="small"
            sx={{
              color: blue[300],
            }}
          />
          发布于 2021-11-22 |
        </span>

        <span className="text-gray-400">
          <UpdateIcon
            fontSize="small"
            sx={{
              color: blue[300],
            }}
          />
          更新于 5 个月前
        </span>
      </div>
      <div
        className="flex 
      sm:flex-row flex-col 
      sm:items-center items-start 
      sm:space-x-1 space-y-1
      text-sm "
      >
        <span className="text-gray-400">
          <FolderOpenIcon
            fontSize="small"
            sx={{
              color: blue[300],
            }}
          />
          Liunx 工具 |
        </span>
        <span className="text-gray-400">
          <LocalOfferIcon
            fontSize="small"
            sx={{
              color: blue[300],
            }}
          />
          webp 阿里云 oss nginx
        </span>

        <span className="text-gray-400">
          <ChatIcon
            fontSize="small"
            sx={{
              color: blue[300],
            }}
          />{' '}
          2 评论
        </span>
      </div>
      <div className="break-normal text-hidden">
        If true, the text will not wrap, but instead will truncate with a text overflow ellipsis. Note that text
        overflow can only happen with block or inline-block level elements (the element needs to have a width in order
        to overflow).
      </div>
    </>
  );
}

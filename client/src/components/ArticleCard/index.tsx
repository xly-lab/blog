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
      <div className={`sm:flex hidden ${style.right} overflow-hidden  flex-col justify-evenly p-2`}>
        <Container />
      </div>
      <div className="sm:hidden  w-full overflow-hidden flex flex-col justify-evenly p-2">
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
      flex-row items-center
      sm:space-x-1 space-y-1
      text-sm 
      truncate
      w-max"
      >
        <EventNoteIcon
          fontSize="small"
          sx={{
            color: blue[300],
          }}
        />
        <span className="text-gray-400">发布于 2021-11-22 |</span>

        <UpdateIcon
          fontSize="small"
          sx={{
            color: blue[300],
          }}
        />
        <span className="text-gray-400">更新于 5 个月前</span>
      </div>
      <div
        className="flex 
      flex-row items-center
      sm:space-x-1 space-y-1
      truncate
      text-sm w-max"
      >
        <FolderOpenIcon
          fontSize="small"
          sx={{
            color: blue[300],
          }}
        />
        <span className="text-gray-400">Liunx 工具 |</span>
        <LocalOfferIcon
          fontSize="small"
          sx={{
            color: blue[300],
          }}
        />
        <span className="text-gray-400">webp 阿里云 oss nginx</span>

        <ChatIcon
          fontSize="small"
          sx={{
            color: blue[300],
          }}
        />
        <span className="text-gray-400">2 评论</span>
      </div>
      <div className="break-normal text-hidden">
        If true, the text will not wrap, but instead will truncate with a text overflow ellipsis. Note that text
        overflow can only happen with block or inline-block level elements (the element needs to have a width in order
        to overflow).
      </div>
    </>
  );
}

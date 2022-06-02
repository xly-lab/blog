import ChatIcon from '@mui/icons-material/Chat';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import UpdateIcon from '@mui/icons-material/Update';
import { blue } from '@mui/material/colors';
import React from 'react';
import { Article } from '../../interface/Article';
import img from './imgs/art_img.jpg';
import style from './index.module.scss';
export default function ArticleCard({ article }: { article: Article }) {
  return (
    <div
      className="
      bg-white 
      w-full 
      rounded 
      flex 
       md:flex-row flex-col
       md:justify-start justify-center
      items-start 
      space-y-4 
      box-border
      overflow-hidden
      "
    >
      <div className={`w-full  md:w-60 h-60 bg-center bg-cover overflow-hidden `}>
        <img
          src={img}
          className="w-full h-full transform  hover:scale-110 duration-300 transition-transform m-auto object-contain"
          alt=""
        />
      </div>
      <div className={` md:flex hidden ${style.right} overflow-hidden  flex-col justify-evenly p-2`}>
        <Container article={article} />
      </div>
      <div className=" md:hidden  w-full overflow-hidden flex flex-col justify-evenly p-2">
        <Container article={article} />
      </div>
    </div>
  );
}

function Container({ article }: { article: Article }) {
  return (
    <>
      <div className="text-xl cursor-pointer">{article.title}</div>
      <div
        className="flex 
      flex-row items-center
       md:space-x-1 space-y-1
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
        <span className="text-gray-400">发布于 {article.createdAt} |</span>

        <UpdateIcon
          fontSize="small"
          sx={{
            color: blue[300],
          }}
        />
        <span className="text-gray-400">更新于{article.updatedAt}</span>
      </div>
      <div
        className="flex 
      flex-row items-center
       md:space-x-1 space-y-1
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
        <span className="text-gray-400">
          {article?.Tags?.map((item) => (
            <span>{item}</span>
          ))}
        </span>

        <ChatIcon
          fontSize="small"
          sx={{
            color: blue[300],
          }}
        />
        <span className="text-gray-400">{article.comments_count} 评论</span>
      </div>
      <div className="break-normal text-hidden">{article.description}</div>
    </>
  );
}

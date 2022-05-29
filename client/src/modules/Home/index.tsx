import { Pagination } from '@mui/material';
import React from 'react';
import ArticleCard from '../../components/ArticleCard';
export default function Home() {
  return (
    <div className="flex flex-col space-y-2 items-center">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <Pagination count={10} color="primary" />
    </div>
  );
}

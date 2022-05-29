import React from 'react';
import LastArticle from './components/LastArticle';
import Notice from './components/Notice';
import Tags from './components/Tags';
import UserInfo from './components/UserInfo';

export default function Side() {
  return (
    <div className="sm:w-72 w-full space-y-6 overflow-hidden">
      <UserInfo />
      <Notice />
      <LastArticle />
      <Tags />
    </div>
  );
}

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { format } from 'timeago.js';
import Loading from '../../../../../../../components/Loading';
import { Article, ArticleResponse } from '../../../../../../../interface/Article';
import services from '../../../../../../../services';
import img from '../../../../../../../components/ArticleCard/imgs/art_img.jpg';
export default function LastArticle() {
  const [article, setArticle] = useState<Article[]>([]);
  const [status, setStatus] = useState<string>('start');

  const reqArticle = useCallback(async () => {
    try {
      setStatus('start');
      const res = await services.article.getMoreArticle<ArticleResponse>({ limit: 5, offset: 0 });
      if (res?.data?.code === 1) {
        setArticle(res.data?.data?.articles ?? []);
        setStatus('ok');
      } else if (res?.data?.code === 0) {
        toast.error(res?.data?.message || '请求失败');
      } else {
        setStatus('fail');
      }
    } catch (error) {
      setStatus('fail');
    }
  }, []);

  useEffect(() => {
    reqArticle();
  }, [reqArticle]);
  return (
    <div className="w-full bg-white rounded flex flex-col items-start space-y-4 p-2 box-border">
      <div className="space-x-2 text-xl flex items-center">
        <AccessTimeIcon />
        <span>最新文章</span>
      </div>
      {status === 'ok' ? (
        article.map((item: Article) => (
          <div className="flex justify-start space-x-2 h-18" key={item.slug}>
            <img src={img} alt="" className="w-16 h-16" />
            <div className="flex flex-col h-full justify-center space-y-1  overflow-hidden cursor-pointer">
              <div className="truncate normal-case  md:w-48 w-full" title="liunx 定时备份博客数据 Git">
                {item.title}
              </div>
              <div>{format(item.createdAt, 'zh_CN')}</div>
            </div>
          </div>
        ))
      ) : (
        <Loading status={status} cb={reqArticle} />
      )}
    </div>
  );
}

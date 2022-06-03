import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Button, CircularProgress, Pagination } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import ArticleCard from '../../components/ArticleCard';
import Loading from '../../components/Loading';
import { Article, ArticleResponse } from '../../interface/Article';
import services from '../../services';
import { toast } from 'react-toastify';

export default function Home() {
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [article, setArticle] = useState<Article[]>([]);
  const [status, setStatus] = useState<string>('start');

  const reqArticle = useCallback(async () => {
    try {
      setStatus('start');
      const res = await services.article.getMoreArticle<ArticleResponse>({ limit, offset });
      if (res?.data?.code === 1) {
        setLimit(res.data?.data?.limit ?? 1);
        setOffset(res.data?.data?.offset ?? 0);
        setTotal(res.data?.data?.total ?? 10);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    reqArticle();
  }, [limit, offset, reqArticle]);

  return (
    <div className="flex flex-col space-y-2 items-center">
      {status === 'ok' ? (
        article.map((item: Article) => <ArticleCard article={item} key={item.slug} />)
      ) : (
        <Loading status={status} cb={reqArticle} />
      )}
      <Pagination
        count={Math.ceil(total / limit)}
        color="primary"
        page={offset / limit + 1}
        onChange={async (event: object, page: number) => {
          setOffset((page - 1) * limit);
        }}
      />
    </div>
  );
}

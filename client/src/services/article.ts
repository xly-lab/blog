import request from '../utils/request';
import { RequestObj } from '../utils/request';

const article = {
  getMoreArticle<T = any>(data: { limit: number; offset: number }) {
    return request.post<RequestObj<T>>('/api/v1/article/getMore', data);
  },
};

export default article;

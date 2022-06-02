import request from '../utils/request';

const article = {
  getMoreArticle(data: { limit: number; offset: number }) {
    return request.post('/api/v1/article/getMore', data);
  },
};

export default article;

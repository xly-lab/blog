import request from '../utils/request';
import { RequestObj } from '../utils/request';

const tags = {
  getTags<T = any>() {
    return request.get<RequestObj<T>>('/api/v1/tags/get');
  },
};

export default tags;

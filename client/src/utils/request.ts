import axios from 'axios';
import Cookies from 'js-cookie';

export interface RequestObj<T = any> {
  code: number;
  message: string;
  data: T;
  requestId?: string;
}

const request = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Requested-With': 'XMLHttpRequest',
    'x-platform-type': 'blog',
  },
});

request.interceptors.request.use((config) => {
  const bToken = Cookies.get('b-token');
  bToken && Object.assign(config?.headers || {}, { 'b-token': bToken });
  return config;
});

request.interceptors.response.use((response) => {
  return response;
});

export default request;

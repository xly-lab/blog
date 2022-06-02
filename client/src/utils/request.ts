import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export interface RequestObj<T = any> {
  code: number;
  message: string;
  data: T;
  requestId?: string;
}

const httpCodeMessage: { [key: string]: string } = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作',
  401: '用户没有权限（令牌、用户名、密码错误）',
  403: '用户得到授权，但是访问被禁止',
  404: '发出的请求是针对的不存在的记录，服务器没有进行操作',
  406: '请求的格式不可得',
  410: '请求的资源被永久删除，且不会再得到',
  422: '当创建对象时，发现一个验证错误',
  500: '服务器错误，请检查服务器',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
};

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

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status in httpCodeMessage) {
      toast.error(httpCodeMessage[error.response.status]);
    }
    return error.response;
  }
);

export default request;

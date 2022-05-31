import { AxiosResponse } from 'axios';
import { useSnackbar } from 'notistack';
import request, { RequestObj } from '../../utils/request';

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

export default async function useRequest<T = any>({
  url,
  method,
  data,
}: {
  url: string;
  method: 'post' | 'get';
  data: T;
}) {
  const { enqueueSnackbar } = useSnackbar();
  let responseData: AxiosResponse<RequestObj<T>, any>;
  try {
    responseData = await request[method]<RequestObj<T>>(url, data);
    if (Object.keys(httpCodeMessage).includes(String(responseData?.status))) {
      enqueueSnackbar(httpCodeMessage[responseData?.status]);
    } else if (responseData.data.code !== 1) {
      enqueueSnackbar(responseData?.data.message);
    }
  } catch (error: any) {
    enqueueSnackbar(error?.message);
    responseData = {
      status: 400,
      config: {},
      statusText: '',
      headers: {},
      data: {
        code: 0,
        message: error?.message,
        data: {} as T,
      },
    };
  }

  return responseData;
}

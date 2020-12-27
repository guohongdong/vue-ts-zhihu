import axios from '../utils/request'
import { AxiosResponse } from 'axios'
interface LoginParams {
  email: string;
  password: string;
}
interface ListParams {
  page: string;
  size: string;
}
interface ResponseType<P = {}> {
  code: number;
  message: string;
  data: P;
}

/**
 * 获得专栏列表
 *
 * @param {ListParams} params
 * @returns {Promise<AxiosResponse<ResponseType>>}
 */
export const getColumnsList = (params: ListParams): Promise<AxiosResponse<ResponseType>> => {
  return axios.post('/columns', params)
}

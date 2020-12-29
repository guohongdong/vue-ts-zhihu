import axios from '../utils/request'
import { AxiosResponse } from 'axios'
export interface LoginParams {
  email: string;
  password: string;
}

export interface SignParams extends LoginParams {
  name: string;
  confirmPassword?: string;
}
interface ResponseType<P = {}> {
  code: number;
  message: string;
  data: P;
}
export const login = (params: LoginParams): Promise<AxiosResponse<ResponseType>> => {
  return axios.post('/user/login', params)
}

/**
 * 新建用户
 *
 * @returns {Promise<AxiosResponse<ResponseType>>}
 */
export const createUser = (params: SignParams): Promise<AxiosResponse<ResponseType>> => {
  return axios.post('/user/create', params)
}

/**
 * 获取用户信息
 *
 * @returns {Promise<AxiosResponse<ResponseType>>}
 */
export const getUserInfo = (): Promise<AxiosResponse<ResponseType>> => {
  return axios.get('/user/info')
}

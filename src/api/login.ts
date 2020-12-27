import axios from '../utils/request'
import { AxiosResponse } from 'axios'
interface LoginParams {
  email: string;
  password: string;
}
interface ResponseType<P = {}> {
  code: number;
  message: string;
  data: P;
}
export const login = (params: LoginParams): Promise<AxiosResponse<ResponseType>> => {
  return axios.post('/user/login', params)
}

export const getUserInfo = (): Promise<AxiosResponse<ResponseType>> => {
  return axios.get('/user/info')
}

import axios from 'axios';
import { AXIOS_BASE_URL, AXIOS_CONTENT_TYPE } from '../constant/constant';

export const createAxiosInstance = () => {
  return axios.create({
    baseURL: AXIOS_BASE_URL,
    headers: { 'Content-Type': AXIOS_CONTENT_TYPE },
  });
};

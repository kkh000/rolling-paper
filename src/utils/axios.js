import axios from 'axios';
import { AXIOS_BASE_URL, AXIOS_CONTENT_TYPE } from '../constant/constant';

const createAxiosInstance = () => {
  return axios.create({
    baseURL: AXIOS_BASE_URL,
    headers: { 'Content-Type': AXIOS_CONTENT_TYPE },
  });
};

export default createAxiosInstance;

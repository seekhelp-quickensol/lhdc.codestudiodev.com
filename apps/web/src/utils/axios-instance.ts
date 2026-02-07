
import axios, {  AxiosInstance,} from "axios";
import 'dotenv/config';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EXPRESS_BACKEND_URL,
  withCredentials: true,
});

export default instance;
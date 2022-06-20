import axios from "axios";

const VueAxios = axios.create({
  timeout: 3000 * 3,
  baseURL: '/api',
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
  },
});

VueAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

VueAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default VueAxios;

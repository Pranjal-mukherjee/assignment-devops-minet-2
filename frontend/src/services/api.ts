import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL as string
});

api?.interceptors?.request?.use(
  async (config) => {
    const user = JSON.parse(localStorage.getItem('user')!);
    const bearerToken = user?.token;

    if (bearerToken) {
      config.headers['Authorization'] = `Bearer ${bearerToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

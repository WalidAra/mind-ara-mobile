import axios from "axios";
import { envConfig } from "@/config";
import { AccessToken, FetchResponse } from "@/types";

const { apiUrl, bearer } = envConfig;

const api = axios.create({ baseURL: apiUrl });

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } =
          await api.get<FetchResponse<AccessToken>>("/auth/refresh");
        const { accessToken } = data.data;
        api.defaults.headers[bearer] = `NIGGA ${accessToken}`;
        return api(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);

export default api;

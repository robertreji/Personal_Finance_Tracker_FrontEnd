import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true
});

const refreshApi = axios.create({
  baseURL: "/api",
  withCredentials: true
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (originalRequest.url.includes("/v1/user/refreshTokens")) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await refreshApi.get("/v1/user/refreshTokens");
        return api(originalRequest); 
      } catch (refreshError) {
        window.location.href = "/auth/login"; 
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export  {api};

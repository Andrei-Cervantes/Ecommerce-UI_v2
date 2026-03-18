// src/hooks/useAxios.ts
import axios, { type AxiosResponse } from "axios";
import { type IAxios } from "@/types/IAxios";
import { useUserStore } from "@/zustand/stores/UserStore";

export const useAxios = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Request interceptor — attach token
  instance.interceptors.request.use(
    (config) => {
      const token = useUserStore.getState().user?.token;
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error),
  );

  // Response interceptor — handle errors
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        useUserStore.getState().clearUser();
      }
      return Promise.reject(error);
    },
  );

  const GET = async <R, P = unknown, B = unknown>(
    args: IAxios<P, B>,
  ): Promise<AxiosResponse<R>> => {
    return instance({ ...args, method: "GET" });
  };

  const POST = async <R, P = unknown, B = unknown>(
    args: IAxios<P, B>,
  ): Promise<AxiosResponse<R>> => {
    return instance({ ...args, method: "POST" });
  };

  const PUT = async <R, P = unknown, B = unknown>(
    args: IAxios<P, B>,
  ): Promise<AxiosResponse<R>> => {
    return instance({ ...args, method: "PUT" });
  };

  const PATCH = async <R, P = unknown, B = unknown>(
    args: IAxios<P, B>,
  ): Promise<AxiosResponse<R>> => {
    return instance({ ...args, method: "PATCH" });
  };

  const DELETE = async <R, P = unknown, B = unknown>(
    args: IAxios<P, B>,
  ): Promise<AxiosResponse<R>> => {
    return instance({ ...args, method: "DELETE" });
  };

  return {
    instance,
    GET,
    POST,
    PUT,
    PATCH,
    DELETE,
  };
};

import type { AxiosRequestConfig } from "axios";

export interface IAxios<P = unknown, B = unknown> extends Omit<
  AxiosRequestConfig,
  "params" | "data"
> {
  url: string;
  params?: P;
  data?: B;
}

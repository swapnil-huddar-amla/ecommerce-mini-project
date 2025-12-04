import axios, { AxiosError } from "axios";

export const httpApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

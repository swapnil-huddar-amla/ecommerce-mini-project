import { httpApi } from "./Http.api";
import { AxiosError } from "axios";

export const getProductListing = () => {
  const apiUrl = `https://dummyjson.com/products`;
  return httpApi
    .get(apiUrl)
    .then((res) => res)
    .catch((err: AxiosError) => {
      throw err;
    });
};


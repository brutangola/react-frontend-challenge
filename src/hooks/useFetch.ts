import { useQuery } from "react-query";
import { AxiosRequestConfig } from "axios";
import { api } from "@/services";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  Authorization?: string;
}

export const useFetch = (url: string, options = {}) => {
  const { data, error, isLoading, isFetching, refetch } = useQuery(
    url,
    async () => {
      try {
        const response = (await api(url, options)).data;
        return response;
      } catch (err) {
        return err; 
      }
    }
  );
  return {
    data,
    error,
    isLoading,
    refetch,
    isFetching,
  };
};
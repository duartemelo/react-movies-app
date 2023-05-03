import { useState, useCallback } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  api.interceptors.request.use((config) => {
    config.params = {
      ...config.params,
      api_key: process.env.REACT_APP_API_KEY,
    };
    return config;
  });

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api({
        method: requestConfig.method ? requestConfig.method : "GET",
        url: requestConfig.url,
        data: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        params: requestConfig.params ? requestConfig.params : null,
      });
      const data = response.data;
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;

import { useEffect, useState } from 'react';
import createAxiosInstance from '../utils/axios';

const useFetchData = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const axios = createAxiosInstance();
        const { data: response } = await axios.get(url);
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;

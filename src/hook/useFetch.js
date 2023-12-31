import { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { RAPID_API_KEY } from '@env';

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = useMemo(() => {
    return {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
      params: {
        ...query,
      },
    };
  }, [endpoint, query]);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setData, setError, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useFetch;

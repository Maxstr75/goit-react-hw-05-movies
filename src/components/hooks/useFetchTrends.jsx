import { useEffect, useState } from 'react';
import { fetchTrends } from 'services/api';

export const useFetchTrends = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await fetchTrends();
        console.log(data);

        setFilms(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { films, error, isLoading };
};

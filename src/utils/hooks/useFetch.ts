import { set } from 'lodash';
import { useState, useEffect } from 'react';

interface FetchResult<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
  correct: boolean;
}

type AsyncFunction<T,U> = (params: U) => Promise<T>;

function useFetch<T,U>(asyncFunction: AsyncFunction<T,U>, params: U): FetchResult<T> {
  const [firstRender, setFirstRender] = useState<boolean>(true); 
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCorrect(false);
        setLoading(true);
        const result = await asyncFunction(params);
        setData(result);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
        setCorrect(true);
      }
    };

    console.log("hello")
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    
    fetchData();
  }, [params]); // Include asyncFunction and params in the dependency array

  return { correct, data, error, loading };
}

export default useFetch;

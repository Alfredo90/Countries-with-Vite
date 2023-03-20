import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then(({ data }) => {
        setCountries(data);
        console.log(data)
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);
  return { isLoading, countries, error };
};

export default useAxios;

import { useState, useEffect } from "react";
import axios from "axios";

const useGraphQLFetch = (query, variables) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = "https://graphql.anilist.co";

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        url,
        {
          query,
          variables,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useGraphQLFetch;

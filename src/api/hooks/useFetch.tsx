import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { fetchFeaturedProducts } from "../storeApi";
import { IProducts } from "../types";

const useFetch = (url: string) => {
  const [fetchData, setData] = useState<IProducts>();
  const [fetchError, setError] = useState<any>("");
  const [loading, setLoading] = useState(true);
  const { data, isLoading, isError, error, isFetched } = useQuery<IProducts>(
    ["featuredProducts", url],
    () => fetchFeaturedProducts(url),
    {
      retry: false,
      refetchOnWindowFocus: true,
    }
  );

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (isError) {
      setError(error);
    } else {
      setError("");
    }
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (isFetched) {
      setData(data);
    }
  }, [url, isLoading, isError, error, isFetched, data]);
  return { fetchData, fetchError, loading };
};

export default useFetch;

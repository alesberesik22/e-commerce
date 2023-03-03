import React, { useEffect, useState } from "react";
import { IProducts } from "../api/types";

const useSort = (products: IProducts, sort: string) => {
  const [data, setData] = useState<IProducts>([]);
  useEffect(() => {
    const sortedProducts =
      sort === "asc"
        ? products
            .slice()
            .sort((a, b) => a.attributes.price - b.attributes.price)
        : sort === "dsc"
        ? products
            .slice()
            .sort((a, b) => b.attributes.price - a.attributes.price)
        : products;
    setData(sortedProducts);
  }, [products, sort]);
  return data;
};

export default useSort;

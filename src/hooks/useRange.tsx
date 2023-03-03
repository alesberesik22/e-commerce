import React, { useEffect, useState } from "react";
import { IProducts } from "../api/types";

const useRange = (products: IProducts, maxPrice: number) => {
  const [data, setData] = useState<IProducts>([]);
  useEffect(() => {
    const RangeProducts = products.filter(
      (product) => product.attributes.price <= maxPrice
    );
    setData(RangeProducts);
  }, [products, maxPrice]);
  return data;
};

export default useRange;

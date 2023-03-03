import React, { useEffect, useState } from "react";
import { IProducts } from "../api/types";

const useCategories = (
  products: IProducts | undefined,
  categories: string[]
) => {
  const [data, setData] = useState<IProducts>([]);

  useEffect(() => {
    if (categories.length > 0 && products) {
      const filteredProducts = products.filter((product: any) =>
        product.attributes.sub_categories.data.some((category: any) =>
          categories.includes(category.attributes.title)
        )
      );
      setData(filteredProducts);
    } else if (categories.length === 0 && products) {
      setData(products);
    }
  }, [products, categories]);
  return data;
};

export default useCategories;

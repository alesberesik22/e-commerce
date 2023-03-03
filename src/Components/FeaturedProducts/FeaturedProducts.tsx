import React from "react";
import "./FeaturedProducts.scss";
import Card from "./Card/Card";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IProducts } from "../../api/types";
import useFetch from "../../api/hooks/useFetch";

interface Props {
  type: string;
}

const FeaturedProducts: React.FC<Props> = ({ type }) => {
  const queryClient = useQueryClient();
  const { fetchData, fetchError, loading } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className={"featured_products"}>
      <div className={"featured_products_header"}>
        <h3>{type} Products</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
          iaculis elit, nec venenatis mi. Donec lacinia finibus dolor sed
          bibendum. Fusce aliquet elementum mauris, ultrices maximus nunc ornare
          sit amet. Proin a eleifend nisl, ac laoreet nunc. Nulla tempor cursus
          sapien quis rutrum. Aliquam quis porta metus. Vestibulum dapibus
          aliquet vestibulum. Ut sed egestas orci. Ut lobortis massa quis ligula
          gravida mollis. Nulla sit amet quam id purus cursus fermentum. Cras
          tempus risus non nunc sollicitudin aliquet. Nulla gravida lacinia
          nulla, vel porta eros fermentum faucibus.
        </p>
      </div>
      <div className={"featured_products_content"}>
        {fetchData &&
          fetchData?.map((item) => <Card data={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;

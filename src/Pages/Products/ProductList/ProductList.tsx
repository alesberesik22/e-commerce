import React from "react";
import Card from "../../../Components/FeaturedProducts/Card/Card";
import "./ProductList.scss";
import { IProducts } from "../../../api/types";

interface Props {
  data: IProducts;
}

const ProductList: React.FC<Props> = (props) => {
  return (
    <div className="productList">
      {props?.data?.map((item) => (
        <div className="productList_item" key={item?.id}>
          <Card data={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;

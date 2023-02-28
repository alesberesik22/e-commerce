import React from "react";
import Card from "../../../Components/FeaturedProducts/Card/Card";
import "./ProductList.scss";

interface Props {
  data: {
    id: number;
    img: string;
    img2: string;
    title: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
  }[];
}

const ProductList: React.FC<Props> = (props) => {
  return (
    <div className="productList">
      {props.data.map((item) => (
        <div className="productList_item" key={item.id}>
          <Card data={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;

import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
import { IProduct } from "../../../api/types";

interface Props {
  data: IProduct;
}

const Card: React.FC<Props> = (props) => {
  return (
    <Link className="card" to={`/product/${props?.data?.id}`}>
      {props?.data?.attributes.new_season && (
        <div className="card-new">New Season</div>
      )}
      <div className="card">
        <img
          src={`http://localhost:1337${props?.data?.attributes?.image?.data?.attributes?.url}`}
          alt={props.data.attributes.title}
          className="main-image"
        />
        <img
          src={`http://localhost:1337${props?.data?.attributes?.image2?.data?.attributes?.url}`}
          alt={props.data.attributes.title}
          className="secondary-image"
        />
      </div>
      <p className="card-title">{props?.data?.attributes?.title}</p>
      <div className="card_prices">
        <p className="card-oldPrice">
          {props?.data?.attributes?.price + 10} {" $"}
        </p>
        <p className="card-newPrice">
          {props?.data?.attributes?.price}
          {" $"}
        </p>
      </div>
    </Link>
  );
};

export default Card;

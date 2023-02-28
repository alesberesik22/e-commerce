import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

interface Props {
  data: {
    id: number;
    img: string;
    img2: string;
    title: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
  };
}

const Card: React.FC<Props> = (props) => {
  return (
    <Link className="card" to={`/product/${props.data.id}`}>
      {props.data.isNew && <div className="card-new">New Season</div>}
      <div className="card">
        <img
          src={props.data.img}
          alt={props.data.title}
          className="main-image"
        />
        <img
          src={props.data.img2}
          alt={props.data.title}
          className="secondary-image"
        />
      </div>
      <p className="card-title">{props.data.title}</p>
      <div className="card_prices">
        <p className="card-oldPrice">
          {props.data.price} {" $"}
        </p>
        <p className="card-newPrice">
          {props.data.price}
          {" $"}
        </p>
      </div>
    </Link>
  );
};

export default Card;

import React from "react";
import "./CartItem.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface CartItemProps {
  img: string;
  price: number;
  title: string;
}

const CartItem: React.FC<CartItemProps> = (data) => {
  return (
    <div className="cart_item">
      <div className="cart_body_image">
        <img src={data.img} alt="" />
      </div>
      <div className="cart_body_content">
        <h4>{data.title}</h4>
        <div className="cart_body_content_text">
          <div className="cart_body_content_text_description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nesciunt nulla inventore
            </p>
            <span>
              {"1x "}
              {data.price} {" $"}
            </span>
          </div>
          <DeleteOutlineIcon className="delete_outline_content" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

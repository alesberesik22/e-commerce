import React from "react";
import "./CartItem.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../redux/cartReducer";

interface CartItemProps {
  img: string;
  price: number;
  title: string;
  quantity: number;
  id: number;
}

const CartItem: React.FC<CartItemProps> = (data) => {
  const dispatch = useDispatch();
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
              {data.quantity + "x "}
              {data.price} {" $"}
            </span>
          </div>
          <DeleteOutlineIcon
            className="delete_outline_content"
            onClick={() => dispatch(removeItem(data.id))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

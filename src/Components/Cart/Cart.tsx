import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const data = {
    id: 1,
    img: "https://picsum.photos/250/400",
    img2: "https://images.pexels.com/photos/4041268/pexels-photo-4041268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "T-shirt",
    isNew: true,
    oldPrice: 19,
    price: 13,
  };
  return (
    <div className="cart">
      <h3>Products in your cart</h3>
      <div className="cart_body">
        <div className="cart_card">
          <CartItem img={data.img} price={data.price} title={data.title} />
          <div className="cart_total">
            <div>SUBTOTAL</div>
            <div>
              {data.price} {" $"}
            </div>
          </div>
          <button className="checkout" type="button">
            PROCEED TO CHECKOUT
          </button>
          <div className="resetCart">Reset cart</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

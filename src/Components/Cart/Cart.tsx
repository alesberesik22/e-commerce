import React, { useEffect, useState } from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CartItem from "./CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ReduxStoreProducts, resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const [total, setTotal] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(
      products.reduce(
        (total, product: any) => total + product.price * product.quantity,
        0
      )
    );
  }, [products]);

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
          {products &&
            products.map((product: any) => (
              <CartItem
                img={`http://localhost:1337${product.img}`}
                price={product.price}
                title={product.title}
                quantity={product.quantity}
                id={product.id}
              />
            ))}
          <div className="cart_total">
            <div>SUBTOTAL</div>
            <div>
              {total} {" $"}
            </div>
          </div>
          <button className="checkout" type="button">
            PROCEED TO CHECKOUT
          </button>
          <div className="resetCart" onClick={() => dispatch(resetCart())}>
            Reset cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

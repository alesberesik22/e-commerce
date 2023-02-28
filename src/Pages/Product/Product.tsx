import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import "./Product.scss";

const Product = () => {
  const [number, setNumber] = useState(1);
  const { id } = useParams();

  return (
    <div className="product">
      <div className="product_images">
        <div className="product_images_all">
          <img
            className="product_images_all_img"
            src="https://picsum.photos/600/800"
          />
          <img
            className="product_images_all_img"
            src="https://picsum.photos/600/800"
          />
        </div>
        <div className="product_images_main">
          <img
            className="product_images_main_img"
            src="https://picsum.photos/600/800"
          />
        </div>
      </div>
      <div className="product_content">
        <h3>Long Sleeve Graphic T-shirt</h3>
        <p className="price">$ 19.9</p>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
          pariatur omnis dolore adipisci, quas amet corrupti earum illum
          explicabo ad deleniti facilis. Consequuntur libero adipisci blanditiis
          nulla, laborum maxime soluta.
        </span>
        <div className="product_content_number">
          <div
            className="product_content_number_change"
            onClick={() => setNumber((prev) => prev + 1)}
          >
            +
          </div>
          <p>{number}</p>
          <div
            className="product_content_number_change"
            onClick={() => setNumber((prev) => (prev > 1 ? prev - 1 : prev))}
          >
            -
          </div>
        </div>
        <button className="product_content_cart">
          <ShoppingCartCheckoutIcon />
          ADD TO CART
        </button>
        <div className="product_content_buttons">
          <button className="product_content_buttons_button">
            <FavoriteBorderIcon />
            ADD TO WISH LIST
          </button>
          <button className="product_content_buttons_button">
            <CompareArrowsIcon />
            ADD TO COMPARE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

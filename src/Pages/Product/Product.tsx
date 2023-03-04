import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import "./Product.scss";
import useFetch from "../../api/hooks/useFetch";
import { IProduct } from "../../api/types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const [number, setNumber] = useState(1);
  const [image, setImage] = useState("");
  const { id } = useParams();
  const [data, setdata] = useState<IProduct | undefined>();

  const dispatch = useDispatch();

  const {
    fetchData: productData,
    fetchError: productError,
    loading: productLoading,
  } = useFetch(`/products/${id}?populate=*`);
  useEffect(() => {
    if (!productLoading) {
      const product = productData as IProduct | undefined;
      setdata(product);
      setImage(
        `http://localhost:1337${product?.attributes?.image?.data?.attributes?.url}`
      );
    }
  }, [productLoading]);
  return (
    <>
      {!productLoading && (
        <div className="product">
          <div className="product_images">
            <div className="product_images_all">
              <img
                className="product_images_all_img"
                src={`http://localhost:1337${data?.attributes?.image?.data?.attributes?.url}`}
                onClick={() =>
                  setImage(
                    `http://localhost:1337${data?.attributes?.image?.data?.attributes?.url}`
                  )
                }
                alt="img"
              />
              <img
                className="product_images_all_img"
                src={`http://localhost:1337${data?.attributes?.image2?.data?.attributes?.url}`}
                onClick={() =>
                  setImage(
                    `http://localhost:1337${data?.attributes?.image2?.data?.attributes?.url}`
                  )
                }
                alt="img"
              />
            </div>
            <div className="product_images_main">
              <img className="product_images_main_img" src={image} />
            </div>
          </div>
          <div className="product_content">
            <h3>{data?.attributes.title}</h3>
            <p className="price">$ {data?.attributes.price}</p>
            <span>{data?.attributes.description}</span>
            <div className="product_content_number">
              <div
                className="product_content_number_change"
                onClick={() =>
                  setNumber((prev) => (prev > 1 ? prev - 1 : prev))
                }
              >
                -
              </div>
              <p>{number}</p>
              <div
                className="product_content_number_change"
                onClick={() => setNumber((prev) => prev + 1)}
              >
                +
              </div>
            </div>
            <button
              className="product_content_cart"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data?.id,
                    title: data?.attributes.title,
                    description: data?.attributes.description,
                    img: data?.attributes.image.data.attributes.url,
                    price: data?.attributes.price,
                    quantity: number,
                  })
                )
              }
            >
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
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <div className="details">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;

import React from "react";
import "./FeaturedProducts.scss";
import Card from "./Card/Card";

const FeaturedProducts = () => {
  const data = [
    {
      id: 1,
      img: "https://picsum.photos/250/400",
      img2: "https://images.pexels.com/photos/4041268/pexels-photo-4041268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://picsum.photos/250/400",
      img2: "https://images.pexels.com/photos/4041268/pexels-photo-4041268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://picsum.photos/250/400",
      img2: "https://images.pexels.com/photos/4041268/pexels-photo-4041268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://picsum.photos/250/400",
      img2: "https://images.pexels.com/photos/4041268/pexels-photo-4041268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className={"featured_products"}>
      <div className={"featured_products_header"}>
        <h3>Trending Products</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
          iaculis elit, nec venenatis mi. Donec lacinia finibus dolor sed
          bibendum. Fusce aliquet elementum mauris, ultrices maximus nunc ornare
          sit amet. Proin a eleifend nisl, ac laoreet nunc. Nulla tempor cursus
          sapien quis rutrum. Aliquam quis porta metus. Vestibulum dapibus
          aliquet vestibulum. Ut sed egestas orci. Ut lobortis massa quis ligula
          gravida mollis. Nulla sit amet quam id purus cursus fermentum. Cras
          tempus risus non nunc sollicitudin aliquet. Nulla gravida lacinia
          nulla, vel porta eros fermentum faucibus.
        </p>
      </div>
      <div className={"featured_products_content"}>
        {data.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

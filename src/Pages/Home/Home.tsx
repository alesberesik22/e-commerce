import React from "react";
import "./Home.scss";
import Slider from "../../Components/Slider/Slider";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Categoeries from "../../Components/Categories/Categoeries";

const Home = () => {
  const data = [
    "https://images.pexels.com/photos/4041268/pexels-photo-4041268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5603660/pexels-photo-5603660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className={"home"}>
      <Slider data={data} />
      <FeaturedProducts />
      <Categoeries />
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../api/hooks/useFetch";
import "./Categories.scss";

const Categoeries = () => {
  const {
    fetchData: categoriesData,
    fetchError: categoriesError,
    loading: categoriesLoading,
  } = useFetch(`/categories?populate=*`);
  console.log(categoriesData);
  return (
    <div className="categories">
      <div className="column">
        <div className="row first row_element">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link className="link" to="/products/3">
            Sale
          </Link>
        </div>
        <div className="row second row_element">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link to="/products/1" className="link">
            Women
          </Link>
        </div>
      </div>
      <div className="column row_element">
        <img
          src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <Link to="/products/5" className="link">
          New Season
        </Link>
      </div>
      <div className="column">
        <div className="row first ">
          <div className="row_element">
            <img
              src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <Link to="/products/2" className="link">
              Men
            </Link>
          </div>
          <div className="row_element">
            <img
              src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <Link to="/products/6" className="link">
              Accessories
            </Link>
          </div>
        </div>
        <div className="row second row_element">
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link to="/products/4" className="link">
            Shoes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categoeries;

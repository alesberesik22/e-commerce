import FormControl from "@mui/material/FormControl/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import FormLabel from "@mui/material/FormLabel/FormLabel";
import Radio from "@mui/material/Radio/Radio";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import Slider from "@mui/material/Slider/Slider";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../api/hooks/useFetch";
import ProductList from "./ProductList/ProductList";
import "./Products.scss";

const Products = () => {
  const { id } = useParams();
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [sort, setSort] = useState<string>();
  const [categories, setCategories] = useState<string[]>([]);
  const queryClient = useQueryClient();
  const { fetchData, fetchError, loading } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${id}`
  );

  const handleChange = (event: Event, value: number | number[]) => {
    setMaxPrice(value as number);
  };

  useEffect(() => {}, [categories]);

  return (
    <div className="products">
      <div className="products_filter">
        <div className="product_filter_categories">
          <h3>Product categories</h3>
          <>
            {fetchData &&
              fetchData.map((category) => (
                <div
                  className="product_filter_categories_item"
                  key={category.id}
                >
                  <input
                    type="checkbox"
                    id={category.attributes.title}
                    checked={categories.includes(category.attributes.title)}
                    value={category.attributes.title}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setCategories((prev) =>
                        prev.includes(e.target.value)
                          ? prev.filter((item) => item !== e.target.value)
                          : [...prev, e.target.value]
                      );
                    }}
                  />
                  <label htmlFor={category.attributes.title}>
                    {category.attributes.title}
                  </label>
                </div>
              ))}
          </>
        </div>
        <div className="product_filter_slider">
          <div className="product_filter_categories_item">
            <span style={{ width: "40px" }}>{"0 $"}</span>
            <Slider
              size="small"
              value={maxPrice}
              onChange={handleChange}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
            <span style={{ width: "80px" }}>100 $</span>
          </div>
        </div>
        <div className="product_filter_sort">
          <FormControl>
            <h3>Sort</h3>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="asc"
                control={<Radio />}
                label="Price (Lowest first)"
                onChange={() => setSort("asc")}
                checked={sort === "asc"}
              />
              <FormControlLabel
                value="dsc"
                control={<Radio />}
                label="Price (Highest first)"
                onChange={() => setSort("dsc")}
                checked={sort === "dsc"}
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="products_content">
        <img
          className="header_image"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="img"
        />
        {fetchData && <ProductList data={fetchData} />}
      </div>
    </div>
  );
};

export default Products;

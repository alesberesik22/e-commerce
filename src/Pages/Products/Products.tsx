import FormControl from "@mui/material/FormControl/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import FormLabel from "@mui/material/FormLabel/FormLabel";
import Radio from "@mui/material/Radio/Radio";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import Slider from "@mui/material/Slider/Slider";
import React, { useState } from "react";
import ProductList from "./ProductList/ProductList";
import "./Products.scss";

const Products = () => {
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [sort, setSort] = useState<string>();
  const [categories, setCategories] = useState<string[]>([]);
  useState;
  const data = [
    {
      id: 1,
      img: "https://picsum.photos/250/400",
      img2: "https://images.pexels.com/photos/4041268/pexels-photo-4041268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 13,
    },
    {
      id: 2,
      img: "https://picsum.photos/250/400",
      img2: "https://images.pexels.com/photos/4041268/pexels-photo-4041268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      isNew: false,
      oldPrice: 19,
      price: 14,
    },
    {
      id: 3,
      img: "https://picsum.photos/250/400",
      img2: "https://images.pexels.com/photos/4041268/pexels-photo-4041268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 15,
    },
    {
      id: 4,
      img: "https://picsum.photos/250/400",
      img2: "https://images.pexels.com/photos/4041268/pexels-photo-4041268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      isNew: false,
      oldPrice: 19,
      price: 16,
    },
  ];

  const handleChange = (event: Event, value: number | number[]) => {
    setMaxPrice(value as number);
  };

  return (
    <div className="products">
      <div className="products_filter">
        <div className="product_filter_categories">
          <h3>Product categories</h3>
          <div className="product_filter_categories_item">
            <input
              type="checkbox"
              id="shoes"
              checked={categories.includes("shoes")}
              value="shoes"
              onChange={(e) => {
                console.log(e.target.value);
                setCategories((prev) =>
                  prev.includes(e.target.value)
                    ? prev.filter((item) => item !== e.target.value)
                    : [...prev, e.target.value]
                );
              }}
            />
            <label htmlFor="shoes">Shoes</label>
          </div>
          <div className="product_filter_categories_item">
            <input
              type="checkbox"
              id="skirts"
              value="skirts"
              checked={categories.includes("skirts")}
              onChange={(e) =>
                setCategories((prev) =>
                  prev.includes(e.target.value)
                    ? prev.filter((item) => item !== e.target.value)
                    : [...prev, e.target.value]
                )
              }
            />
            <label htmlFor="skirts">Skirts</label>
          </div>
          <div className="product_filter_categories_item">
            <input
              type="checkbox"
              id="coats"
              value="coats"
              checked={categories.includes("coats")}
              onChange={(e) =>
                setCategories((prev) =>
                  prev.includes(e.target.value)
                    ? prev.filter((item) => item !== e.target.value)
                    : [...prev, e.target.value]
                )
              }
            />
            <label htmlFor="coats">Coats</label>
          </div>
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
        <ProductList data={data} />
      </div>
    </div>
  );
};

export default Products;

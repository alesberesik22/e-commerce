import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import eng from "../../assets/images/en.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar ${scrollPosition > 120 && "scroll"}`}>
      <div className={"navbar_section"}>
        <div className={"navbar_section_items"}>
          <img src={eng} alt={"eng"} loading={"lazy"} />
          <KeyboardArrowDownIcon />
        </div>
        <div className={"navbar_section_items"}>
          USD
          <KeyboardArrowDownIcon />
        </div>
        <div className={"navbar_section_items"}>
          <Link to={"/products/1"} className={"link"}>
            Women
          </Link>
        </div>
        <div className={"navbar_section_items"}>
          <Link to={"/products/1"} className={"link"}>
            Men
          </Link>
        </div>
        <div className={"navbar_section_items"}>
          <Link to={"/products/1"} className={"link"}>
            Children
          </Link>
        </div>
      </div>
      <div className={"navbar_section"}>
        <Link to={"/"} className={"title"}>
          ALESBERESIK
        </Link>
      </div>
      <div className="navbar_section">
        <div className="navbar_section_items">
          <Link to={"/"} className={"link"}>
            Homepage
          </Link>
        </div>
        <div className={"navbar_section_items"}>
          <Link to={"/"} className={"link"}>
            About
          </Link>
        </div>
        <div className={"navbar_section_items"}>
          <Link to={"/"} className={"link"}>
            Contact
          </Link>
        </div>
        <div className={"navbar_section_items"}>
          <Link to={"/"} className={"link"}>
            Stores
          </Link>
        </div>
        <div className="navbar_icons">
          <SearchIcon />
          <Person2OutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <div className={"navbar_icon_cart"}>
            <ShoppingCartOutlinedIcon />
            <div className={"navbar_icon_cart_number"}>0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

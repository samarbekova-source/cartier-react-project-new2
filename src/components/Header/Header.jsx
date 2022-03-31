import React from "react";
import "./Header.css";

import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="a-tags">
          <a href="#">CONTACT US</a>

          <a href="#">SERVICES</a>
        </div>

        <div className="logo-image">
          <Link to="/">
            <img
              width="180px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cartier_logo.svg/1024px-Cartier_logo.svg.png"
              alt="cartier logo"
            />
          </Link>
        </div>
        <div className="icons">
          <FavoriteBorderIcon
            style={{ fontSize: "30px", color: "grey" }}
          ></FavoriteBorderIcon>
          <PersonOutlineIcon
            style={{ fontSize: "30px", color: "grey" }}
          ></PersonOutlineIcon>
          <ShoppingBagOutlinedIcon
            style={{ fontSize: "30px", color: "grey" }}
          ></ShoppingBagOutlinedIcon>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;

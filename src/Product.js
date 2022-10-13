import { Button } from "@mui/material";
import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p> The lean startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product_rating">
            <p>⭐</p>
           {/* <p>⭐</p>
            <p>⭐</p>*/}
        </div>
      </div>
      <img src="https://cdn.pixabay.com/photo/2019/07/13/10/49/music-4334557_960_720.jpg"
            alt="earphones"
       />

       <button>Add to Basket</button>
    </div>
  );
}

export default Product;

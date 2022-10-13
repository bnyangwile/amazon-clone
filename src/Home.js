import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg" // pic 1500x600
          alt="banner hompepage"
        />

        <div className="home_row">
          <Product />
          
        </div>

        
        <div className="home_row">
          {/* Product */}
          {/**Product */}
          {/**Product */}
        </div>

        <div className="home_row">
          {/* Product */}
        </div>
      </div>
    </div>
  );
}

export default Home;

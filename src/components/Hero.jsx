import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <div className="hero contairer">
      <div>
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
        </div>
        <div className="hero-btn">
          <button className="btn1">Shop Now</button>
          <button className="btn2">Catagory</button>
        </div>
        <div>
          <p>Also avalibale on</p>
          <div className="sopping-logo">
            <img className="flipkart-img" src="/images/flipkart.png" alt="flipkart-logo" />
            <img className="amazon-img" src="/images/amazon.png" alt="amazon-logo" />
          </div>
        </div>
      </div>
      <div>
        <img src="/images/shoe_image.png" alt="shoes-img" />
      </div>
    </div>
  );
};

export default Hero;

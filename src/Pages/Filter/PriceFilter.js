import React, { useState } from "react";
import Slider from "react-slider";
import "./Pricing.css";

const PriceFilter = () => {
  const MIN = 100;
  const MAX = 12000;

  const [value, setValue] = useState([MIN, MAX]);
  // console.log("Values", value);

  return (
    <>
      <div className="shop_sidebar_boxed">
        <h6 className="border-bottom price">Price</h6>
        <div className="price_filter">
          <div className="price-slider-amount mt-3 text-capitalize">
            <div className="d-flex">
              <p>Price: </p>
              <span className="value-number">
                &nbsp; ${value[0]} - ${value[1]}
              </span>
            </div>
          </div>
          <div className="pricing">
            <Slider
              className="slider"
              value={value}
              min={MIN}
              max={MAX}
              onChange={setValue}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceFilter;

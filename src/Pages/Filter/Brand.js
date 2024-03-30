import React from "react";

const Brand = () => {
  return (
    <>
      <div className="shop_sidebar_boxed pt-5">
        <h4>Brand</h4>

        <label className="custom_boxed form-check-label " htmlFor="flexRadioDefault1">
          Next
          <input
            type="radio"
            checked="checked"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <span className="checkmark form-check-input"></span>
        </label>
        <label className="custom_boxed form-check-label" htmlFor="">
          Adidas
          <input type="radio" name="flexRadioDefault" />{" "}
          <span className="checkmark form-check-input"></span>
        </label>
        <label className="custom_boxed form-check-label" htmlFor="">
          Calvin Klein
          <input type="radio" name="flexRadioDefault" />{" "}
          <span className="checkmark form-check-input"></span>
        </label>
        <label className="custom_boxed form-check-label" htmlFor="">
          Nike  
          <input type="radio" name="flexRadioDefault" />{" "}
          <span className="checkmark form-check-input"></span>
        </label>
        <label className="custom_boxed form-check-label" htmlFor="">
          Geox
          <input type="radio" name="flexRadioDefault" />{" "}
          <span className="checkmark form-check-input"></span>
        </label>
        <label className="custom_boxed form-check-label" htmlFor="">
          River Island
          <input type="radio" name="flexRadioDefault" />{" "}
          <span className="checkmark form-check-input"></span>
        </label>
        <div className="clear_button">
          <button className="theme-btn-one btn_sm btn-black-overlay mt-1">
            Clear Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default Brand;

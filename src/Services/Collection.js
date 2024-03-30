import React from "react";

const Dummydata = (props) => {
  return (
    <>
      <div className="img-zoom-hover products pb-4">
        <img src={props.image} alt="img" />
        <div className="image-text">
          <h4 className="out">{props.clothname}</h4>
          <h2>{props.season}</h2>
          <h4>{props.type}</h4>
          <button className="btn btn-outiline btn-sm shop-button">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Dummydata;

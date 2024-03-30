import React, { useEffect, useState } from "react";
import "./Index.css";
import heroimage from "../../assets/Images/man.34e0add.png";
import image1 from "../../assets/Images/woman.3e56b7a.png";
import image2 from "../../assets/Images/woman1.f456ab6.png";
import image3 from "../../assets/Images/bag.7606d44.png";
import image4 from "../../assets/Images/woman4.26b67d7.png";
import image5 from "../../assets/Images/kids.5fb714a.png";
import Dummydata from "../../Services/Collection";
import { useNavigate } from "react-router-dom";
import { products } from "../../Services/Data";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import Card from "../../Services/Card";
import "animate.css";

const Home = ({ targetDate }) => {
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const slicedItems = products.slice(0, 4);
  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>AND SHOP </title>
      </Helmet>
      {/* Hero section  */}
      <div className="banner pb-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-text animate__animated animate__lightSpeedInLeft">
                <h1>
                  LIVE FOR
                  <span>Fashion</span>
                </h1>
                <h3>Save up To 50%</h3>
                <button
                  className="btn btn-outline-dark mt-3 hero-button"
                  onClick={() => navigate("/shop")}
                >
                  Shop Now
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image position-relative">
                <img
                  src={heroimage}
                  className="w-100 animate__animated animate__slideInUp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collection section  */}
      <div className="images-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <Dummydata
                image={image1}
                clothname="Outerwear"
                season="New"
                type="Collection"
              />
              <Dummydata
                image={image2}
                clothname="Summer"
                season="Hot"
                type="Collection"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="img-zoom-hover products pb-4">
                <img src={image3} alt="img" />
                <div className="image-text-products">
                  <h2 className="out">10% OFFER</h2>
                  <h4>NO SELECTED</h4>
                  <h4 className="pb-2">MODELS</h4>
                  <button className="btn btn-outiline btn-sm shop-button">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <Dummydata image={image4} clothname="NEW" season="ARRIVALS" />
              <Dummydata image={image5} clothname="HOT" season="OFFER" />
            </div>
          </div>
        </div>
      </div>
      {/* products-section */}
      <div className="top-seller pb-5">
        <div className="container">
          <div className="row">
            <div className="seller-header pb-4">
              <h2>Top Seller</h2>
              <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
            </div>

            {slicedItems.map((product, index) => (
              <div className="col-md-3 col-lg-3">
                <Card key={product.id} product={product} />
              </div>
            ))}
          </div>
          <div className="text-center pt-3">
            <button
              onClick={() => navigate("/store")}
              className="theme-btn-one btn-overlay-dark btn_sm"
            >
              Load more...
            </button>
          </div>
        </div>
      </div>

      {/* Tshirt-Collection-section */}
      <div className="tshirt-collection">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-4 col-md-7 offset-md-4 col-sm-12 col-12">
              <div className="collection-timer">
                <ul>
                  <li>
                    <span>{timeRemaining.days}</span>Day s
                  </li>
                  <li>
                    <span>{timeRemaining.hours}</span>Hours
                  </li>
                  <li>
                    <span>{timeRemaining.minutes}</span>Minutes
                  </li>
                  <li>
                    <span>{timeRemaining.seconds}</span>Seconds
                  </li>
                </ul>
                <div className="collection-text">
                  <h2>20% OFF FOR ALL T-SHIRT COLLECTION</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Porro quisquam, odit assumenda sit modi commodi esse
                    necessitatibus temporibus aperiam veritatis eveniet!
                  </p>
                  <button className="btn btn-outline-dark mt-3 hero-button">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Todays offers section */}
      <div className="top-seller pb-5">
        <div className="container">
          <div className="row">
            <div className="seller-header pb-4">
              <h2>TODAY'S DEAL</h2>
              <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
            </div>

            {slicedItems.map((product, index) => (
              <div className="col-md-3 col-lg-3">
                <Card key={product.id} product={product} />
              </div>
            ))}
          </div>
          <div className="text-center pt-3">
            <button
              onClick={() => navigate("/store")}
              className="theme-btn-one btn-overlay-dark btn_sm"
            >
              Load more...
            </button>
          </div>
        </div>
      </div>
      {/* Top-Offers-section */}
      <div className="offers">
        <div className="container">
          <div className="row">
            <div className=" offset-lg-4 col-md-4 col-sm-12 col-12">
              <div className="offers-text text-center">
                <h5>TRENDING</h5>
                <h2>New Fashion</h2>
                <p>
                  Consectetur adipisicing elit. Dolores nisi distinctio magni,
                  iure deserunt doloribus optio
                </p>
                <button className="shop" onClick={() => navigate("/shop")}>
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

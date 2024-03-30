import React, { useContext, useState } from "react";
import CartContext from "../Context/Cart/CartContext";
import "../assets/Card.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WishlistContext from "../WishlistContext/WishlistContext";
import { FaHeart } from "react-icons/fa";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const Email = localStorage.getItem("Email");

  const { addToCart, increase, cart, sumItems, itemCount } =
    useContext(CartContext);
  const { addtoWishlist, wishlist, removeitems } = useContext(WishlistContext);
  const isInCart = (product) => {
    return !!cart.find((item) => item.id === product.id);
  };
  const isInWishlist = (product) => {
    return !!wishlist.find((item) => item.id === product.id);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    if (!isInCart(product)) {
      toast.success("Successfully Added !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
        transition: Flip,
      });
    } else {
      toast.info("Item is already in the cart.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
        transition: Flip,
      });
    }
  };

  const handleAddtoWishlist = (product) => {
    addtoWishlist(product);
    if (!isInWishlist(product)) {
      toast.success("Wishlist Successfully !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
        transition: Flip,
      });
    } else {
      toast.info("Item is already in the wishlist.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
        transition: Flip,
      });
    }
  };

  const handleRemovetoWishlist = (product) => {
    removeitems(product);
    toast.info("item has been removed!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 500,
      transition: Flip,
    });
  };

  const handleAdd = () => {
    toast.info("please login to access cart", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 500,
      transition: Flip,
    });
    navigate("/login");
  };

  const handleWishlist = () => {
    toast.info("please login to access wishlist", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 500,
      transition: Flip,
    });
    navigate("/login");
  };

  return (
    <>
      {/* <div className="col-lg-4 col-md-4 col-sm-6 col-6 pb-5"> */}
      {/* <div> */}
      <div className="product_wrappers_one">
        <div className="thumb position-relative" style={{ overflow: "hidden" }}>
          <Link to={`/detail/${product?.id}`}>
            <img
              src={product?.images + "?v=" + product?.id}
              alt={product?.name}
              className="inner-img w-100"
              style={{ width: "300px", height: "auto" }}
            />
          </Link>
          <span className="badges">
            <span className="new">{product?.brand}</span>
          </span>
          {Email && (
            <>
              {wishlist.find((item) => item?.id === product?.id) ? (
                <span
                  className="wishlist-icon"
                  onClick={() => handleRemovetoWishlist(product)}
                >
                  <FaHeart />
                </span>
              ) : (
                <span
                  className="wishlist-icon"
                  onClick={() => handleAddtoWishlist(product)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </span>
              )}
            </>
          )}
          {!Email && (
            <span className="wishlist-icon" onClick={handleWishlist}>
              <FontAwesomeIcon icon={faHeart} />
            </span>
          )}
        </div>
        <div className="content">
          <h5 className="title text-capitalize">{product?.name}</h5>
          <span className="price">
            <span className="new">${product?.price}</span>
          </span>
        </div>
        {Email && (
          <>
            <div className="text-center pt-2">
              {cart.find((item) => item.id === product.id) ? (
                <>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate("/cart")}
                  >
                    Go to cart
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </button>
                </>
              )}
            </div>
          </>
        )}
        {!Email && (
          <div className="text-center pt-2">
            <button className="btn btn-success" onClick={handleAdd}>
              Add to cart
            </button>
          </div>
        )}
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Card;

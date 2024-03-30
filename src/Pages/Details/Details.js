import React, { useContext, useEffect, useState } from "react";
import "./Detail.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";
import { Flip, ToastContainer, toast } from "react-toastify";
import CartContext from "../../Context/Cart/CartContext";
import WishlistContext from "../../WishlistContext/WishlistContext";
import { FaHeart } from "react-icons/fa";

const Details = ({ productsitems }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const Email = localStorage.getItem("Email");
  const [select, setSelect] = useState();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const options = ["S", "M", "L", "XL", "XXL"];
  const { addToCart, increase, decrease, cart, sumItems, itemCount } =
    useContext(CartContext);
  const { addtoWishlist, wishlist, removeitems } = useContext(WishlistContext);

  const isInCart = (product) => {
    return !!cart.find((item) => item.id === product.id);
  };

  const isInWishlist = (product) => {
    return !!wishlist.find((item) => item.id === product.id);
  };

  const product = productsitems.find((post) => post.id === Number(id));

  const colormode = () => {
    console.log("Clicked");
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
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

  const handleAdd = () => {
    toast.info("please login to access cart", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 500,
    });
    navigate("/login");
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

  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>AND SHOP - {product.name}</title>
      </Helmet>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-text">
                <h2>Details Page</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item items">Detail</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-section">
        <div className="container">
          <div className="row area_boxed">
            <div className="col-lg-4">
              <div className="product_single_one_img">
                <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-free-mode">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide swiper-slide-active">
                      <div data-v-8132c852="">
                        <picture data-v-8132c852="">
                          <img
                            data-v-8132c852=""
                            src={product.images}
                            className="iiz__img w-100"
                            alt=""
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <span
                    className="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  ></span>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="product_details_right_one">
                <div className="modal_product_content_one">
                  <h3 className="text-capitalize">{product.name}</h3>
                  <div className="reviews_rating">
                    {[...Array(5)].map((star, index) => {
                      index += 1;
                      return (
                        <button
                          type="button"
                          key={index}
                          className={index <= (hover || rating) ? "on" : "off"}
                          onClick={() => setRating(index)}
                          onMouseEnter={() => setHover(index)}
                          onMouseLeave={() => setHover(rating)}
                        >
                          <span className="star">&#9733;</span>
                        </button>
                      );
                    })}
                  </div>
                  <h4>
                    $ {product.price}
                    <del>$2890</del>
                  </h4>
                  <p style={{ maxWidth: "50%", textAlign: "justify" }}>
                    Vivamus suscipit tortor eget felis porttitor volutpat. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Proin
                    eget tortor risus. Nulla porttitoraccumsan tincidunt.
                    Pellentesque in ipsum id orci porta dapibus.
                  </p>
                  <div className="customs_selects">
                    <select
                      name="product"
                      className="customs_sel_box"
                      value={selectedValue}
                      onChange={handleSelectChange}
                    >
                      <option value="select">Size</option>
                      {options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                      {/* <option value="small">S</option>
                      <option value="medium">M</option>
                      <option value="large">L</option> */}
                    </select>
                  </div>
                  <div className="variable-single-item d-flex pt-3">
                    <div>
                      <span style={{ fontWeight: "800" }}>Select Color</span>
                      <ul
                        className="color-variant d-flex pt-2"
                        onClick={colormode}
                      >
                        <li>
                          <a
                            className="yellow"
                            style={{ backgroundColor: "yellow" }}
                          ></a>
                        </li>
                        <li>
                          <a
                            className="white"
                            style={{ backgroundColor: "black" }}
                          ></a>
                        </li>
                        <li>
                          <a
                            className="pink active"
                            style={{ backgroundColor: "pink" }}
                          ></a>
                        </li>
                        <li>
                          <a
                            className="pink active"
                            style={{ backgroundColor: "blue" }}
                          ></a>
                        </li>
                        <li>
                          <a
                            className="pink active"
                            style={{ backgroundColor: "green" }}
                          ></a>
                        </li>
                      </ul>
                    </div>

                    <div className="product-qun">
                      <td className="product_quantity">
                        <FontAwesomeIcon
                          icon={faCircleMinus}
                          size="xl"
                          onClick={() => decrease(product)}
                        />
                        <label htmlFor="" className="quantity">
                          1 {product.quantity}
                        </label>{" "}
                        <FontAwesomeIcon
                          icon={faCirclePlus}
                          size="xl"
                          onClick={() => increase(product)}
                        />
                      </td>
                    </div>
                  </div>
                  <div className="links_Product_areas d-flex">
                    {wishlist.find((item) => item?.id === product?.id) ? (
                      <button
                        title="Wishlist"
                        className="theme-btn-one btn-black-overlay btn_sm"
                        onClick={() => handleRemovetoWishlist(product)}
                      >
                        <FaHeart /> &nbsp; Wishlisted
                      </button>
                    ) : (
                      <button
                        title="Wishlist"
                        className="theme-btn-one btn-black-overlay btn_sm"
                        onClick={() => handleAddtoWishlist(product)}
                      >
                        <FontAwesomeIcon icon={faHeart} />
                        &nbsp;Add To Wishlist
                      </button>
                    )}

                    {Email && (
                      <>
                        {cart.find((item) => item.id === product.id) ? (
                          <>
                            <button
                              className="theme-btn-one btn-black-overlay btn_sm ms-3"
                              onClick={() => navigate("/cart")}
                            >
                              Go to cart
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="theme-btn-one btn-black-overlay btn_sm ms-3"
                              onClick={() => handleAddToCart(product)}
                            >
                              Add to cart
                            </button>
                          </>
                        )}
                      </>
                    )}

                    {!Email && (
                      <div>
                        <button
                          className="theme-btn-one btn-black-overlay btn_sm ms-3"
                          onClick={handleAdd}
                        >
                          Add to cart
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

import React, { useContext, useEffect, useState } from "react";
import "./Index.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import navbarlogo from "../../assets/Images/Navbar-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { Flip, ToastContainer, toast } from "react-toastify";
import CartContext from "../../Context/Cart/CartContext";
import WishlistContext from "../../WishlistContext/WishlistContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const [user, setUser] = useState();
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const Email = localStorage.getItem("Email");
  const userId = localStorage.getItem("UserID");

  const handleLogout = () => {
    localStorage.removeItem("Email");
    localStorage.removeItem("UserID");
    setIsLoggedOut(true);
    navigate("/login");
    toast.success(`See you again.. ${user?.user?.username}`, {
      autoClose: 500,
      transition: Flip,
    });
  };

  const getData = () => {
    axios
      .get("http://localhost:3078/users")
      .then((response) => {
        const userData = response.data.find(
          (userName) => userName?.user?.email === Email
        );
        setUser(userData);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, [Email, userId]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <ToastContainer />
      <div className={`header ${isSticky ? "sticky-navbar" : ""}`}>
        <header>
          <div className="container ">
            <div className="row ">
              <div className="col-12 d-flex align-items-center justify-content-between">
                <div className="header-logo">
                  <Link to="/">
                    <img src={navbarlogo} alt="nav-logo" />
                  </Link>
                </div>
                <nav className="nav-first">
                  <ul>
                    <li>
                      <Link to="/" className="nav">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/store" className="nav">
                        Store
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="nav">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="nav">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="nav-last">
                  <ul>
                    {Email && (
                      <>
                        <li>
                          <button
                            type="submit"
                            className="btn btn-outline-dark"
                          >
                            Hello! {user?.user?.username}
                          </button>
                        </li>
                        <li className="cart-icon">
                          <Link to="/wishlist">
                            <FontAwesomeIcon
                              icon={faHeart}
                              size="lg"
                              className="text-dark"
                            />
                            {wishlist.length > 0 && (
                              <span className="item-count">
                                {wishlist.length}
                              </span>
                            )}
                          </Link>
                        </li>
                        <li className="cart-icon">
                          <Link to="/cart">
                            <FontAwesomeIcon
                              icon={faBagShopping}
                              size="lg"
                              className="text-dark"
                            />
                            {cart.length > 0 && (
                              <span className="item-count">{cart.length}</span>
                            )}
                          </Link>
                        </li>
                        <li>
                          <div className="dropdown">
                            <button
                              className="dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <FontAwesomeIcon icon={faUser} size="lg" />
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <Link to="profile" className="dropdown-item">
                                  Profile
                                </Link>
                              </li>
                              <li>
                                <Link to="orders" className="dropdown-item">
                                  Order
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  onClick={handleLogout}
                                >
                                  Signout
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </>
                    )}
                    {!Email && (
                      <li>
                        <Link to="login">
                          <FontAwesomeIcon
                            icon={faUser}
                            size="lg"
                            className="text-dark"
                          />
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "././components/Footer/Footer";
import Navbar from "././components/Navbar/Navbar";
import About from "././components/About/About";
import Login from "././components/UserAuth/Login";
import Signup from "././components/UserAuth/Signup";
import Details from "././Pages/Details/Details";
import Cart from "././Pages/Cart/Cart";
import Contact from "././components/Contact/Contact";
import ScrollToTop from "././components/ScrollTop/ScrollToTop";
import TopScroll from "././components/ScrollTop/TopScroll";
import Store from "././Pages/Shop/Store";
import ErrorPage from "././components/Error/ErrorPage";
import CartEmpty from "./Pages/EmptyCart/CartEmpty";
import Shop from "./Pages/Shop/Shop";
import Wishlist from "./Pages/Wishlist/Wishlist";
import { products } from "./Services/Data";
import { HelmetProvider } from "react-helmet-async";
import Profile from "./Pages/ProfilePage/Profile";
import Order from "./Pages/Orders/Order";
import Protected from "./Protected/Protected";
import ComingSoon from "././components/ComingSoon/ComingSoon";
import PrivacyPolicy from "./components/Privacy-Policy/PrivacyPolicy";
import Home from "./Pages/Home/Home";
import OrderTracking from "./Pages/Order-Tracking/OrderTracking";
import Checkout from "././Pages/Checkout/Checkout";
import UserAuthContextProvider from "./FirebaseContext/UserAuthContextProvider";
import PhoneSignUp from "./components/UserAuth/PhoneSignUp";
// const Shop = lazy(() => import("./Pages/Shop/Shop"));
function App() {
  const targetDate = new Date("2023-12-31T23:59:59");

  const helmetContext = {};
  return (
    <>
      <BrowserRouter>
        <UserAuthContextProvider>
          <HelmetProvider context={helmetContext}>
            <Navbar />
            <TopScroll />
            <ScrollToTop />
            <Routes>
              {/* USER AUTH */}
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />

              {/* HOME PAGE */}
              <Route path="/" element={<Home targetDate={targetDate} />} />

              {/* COMPONENTS */}
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="empty-cart" element={<CartEmpty />} />
              {/* <Suspense
              fallback={<div>Component1 are loading please wait...</div>}
            >
              <Shop />
            </Suspense> */}
              <Route path="shop" element={<Shop />} />
              <Route path="*" element={<ErrorPage />} />
              <Route
                path="comingsoon"
                element={<ComingSoon targetDate={targetDate} />}
              />

              {/* USER PROTECTED */}
              <Route
                path="/cart"
                element={
                  // <Protected>
                  <Cart />
                  // </Protected>
                }
              />
              <Route
                path="wishlist"
                element={
                  // <Protected>
                  <Wishlist />
                  // </Protected>
                }
              />

              {/* USER RELATED COMPONENTS */}
              <Route
                path="/detail/:id"
                element={<Details productsitems={products} />}
              />
              <Route path="tracking-order" element={<OrderTracking />} />
              <Route path="store" element={<Store />} />
              <Route path="profile" element={<Profile />} />
              <Route path="orders" element={<Order />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="phone" element={<PhoneSignUp />} />
            </Routes>
            <Footer />
          </HelmetProvider>
        </UserAuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

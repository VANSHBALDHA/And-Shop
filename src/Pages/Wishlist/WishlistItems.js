import React, { useContext } from "react";
import WishlistContext from "../../WishlistContext/WishlistContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Flip, ToastContainer, toast } from "react-toastify";
import CartContext from "../../Context/Cart/CartContext";

const WishlistItems = ({ product, index }) => {
  const { removeitems } = useContext(WishlistContext);
  const { addToCart, cart } = useContext(CartContext);
  
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
  const isInCart = (product) => {
    return !!cart.find((item) => item.id === product.id);
  };
  return (
    <>
      <ToastContainer />
      <tbody>
        <tr>
          <td className="index">
            <h4>{index + 1}</h4>
          </td>
          <td className="product_thumb">
            <img src={product?.images} alt="img" height={100} />
          </td>
          <td className="product_name">
            <h5>{product?.name}</h5>
          </td>
          <td className="product-price">${product?.price}</td>
          <td className="product_name">
            <h5>In Stock</h5>
          </td>
          <td className="product_remove">
            <FontAwesomeIcon
              icon={faCartPlus}
              size="lg"
              className="text-success"
              onClick={() => handleAddToCart(product)}
            />
            <FontAwesomeIcon
              icon={faTrashCan}
              size="lg"
              className="text-danger ms-3"
              onClick={() => removeitems(product)}
            />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default WishlistItems;

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { products } from "../../Services/Data";
import "./Index.css";

const SerchBar = ({ product }) => {
  const [search, setSearch] = useState("");
  const filteredProducts = products?.filter((products) => {
    if (products?.name?.toLowerCase().includes(search)) {
      return products;
    }
  });
  return (
    <>
      <div className="shop_Search">
        <form>
          <input
            type="text"
            placeholder="Search..."
            className="form-control search-bar"
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
          />
          <button className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </>
  );
};

export default SerchBar;

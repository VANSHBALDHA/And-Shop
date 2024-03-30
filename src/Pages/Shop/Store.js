import React, { useState } from "react";
import { products } from "../../Services/Data";
import Card from "../../Services/Card";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import PriceFilter from "../Filter/PriceFilter";
import Brand from "../Filter/Brand";
import Select from "react-select";
import SerchBar from "../Filter/SerchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Store = ({ product }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [sortSelect, setSortSelect] = useState(null);
  const [search, setSearch] = useState("");

  const options = [
    { value: "most_populer", label: "Most Popular" },
    { value: "best_seller", label: "Best Seller" },
    { value: "tranding", label: "Tranding" },
    { value: "featured", label: "Featured" },
  ];

  const SortOptions = [
    { value: "popularity", label: "Sort by Popularity" },
    { value: "new", label: "Sort by new" },
    { value: "low", label: "Price: low to high" },
    { value: "high", label: "Price: high to low" },
  ];

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const handlesortselected = (sortSelect) => {
    setSortSelect(sortSelect);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );

  const sortedProducts = () => {
    if (sortSelect) {
      switch (sortSelect.value) {
        case "popularity":
          return filteredProducts;
        case "new":
          return filteredProducts.sort((a, b) => {
            if (a.brand === "New" && b.brand !== "New") return -1;
            if (a.brand !== "New" && b.brand === "New") return 1;
            return 0;
          });
        case "low":
          return filteredProducts.sort((a, b) => a.price - b.price);
        case "high":
          return filteredProducts.sort((a, b) => b.price - a.price);
        default:
          return filteredProducts;
      }
    } else {
      return filteredProducts;
    }
  };

  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>AND SHOP - Store</title>
      </Helmet>
      <div className="pt-5 text-center pb-3">
        <h1>Browse the Store!</h1>
        <p>New Arrivals for you! Check out our selection of products.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="shop-items">
              <div className="row justify-content-between">
                <div className="col-lg-2 col-md-12">
                  <div className="product_filter">
                    {/* <div className="customs_selects">
                      <Select
                        value={selectedOption}
                        isClearable={true}
                        options={options}
                        className="customs_sel_box form-select"
                        placeholder="Filtering"
                        onChange={handleSelectChange}
                      />
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-12">
                  <div className="product_shot">
                    <div className="product_shot_title">
                      <p>Sort By:</p>
                    </div>
                    <div className="customs_selects_sort">
                      <Select
                        value={sortSelect}
                        isClearable={true}
                        options={SortOptions}
                        className="customs_sel_box form-select"
                        placeholder="Sort By"
                        onChange={handlesortselected}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="filter-sidebar">
              <div className="shop_Search ">
                <form className="position-relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control search-bar"
                    onChange={(e) => {
                      setSearch(e.target.value.toLowerCase());
                    }}
                  />
                  <button className="search-icon">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      size="xl"
                      className="serch-icons"
                    />
                  </button>
                </form>
              </div>
              <PriceFilter />
              <Brand />
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              {filteredProducts.length === 0 ? (
                <span
                  style={{
                    fontSize: "35px",
                    textAlign: "center",
                    marginTop: "10%",
                  }}
                >
                  No Products Found
                </span>
              ) : (
                <>
                  {sortedProducts().map((product) => (
                    <div className="col-md-4 pb-4" key={product.id}>
                      <Card product={product} />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;

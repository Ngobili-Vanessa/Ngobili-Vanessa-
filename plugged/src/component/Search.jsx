import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { products } from "./Category";
import "./Search.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">

      <h1 className="search-title">
        Search Products
      </h1>

      <div className="search-box">

        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search for products...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>


      {searchTerm === "" ? (

        <div className="search-empty">

          <h2>
            Find Your Perfect Product
          </h2>

          <p>
            Search by product name, category or brand.
          </p>

        </div>

      ) : filteredProducts.length === 0 ? (

        <div className="search-empty">

          <h2>
            No Products Found
          </h2>

          <p>
            We couldn't find a product matching "{searchTerm}".
          </p>

        </div>

      ) : (

        <div className="search-results">

          {filteredProducts.map((product) => (

            <Link
              key={product.name}
              to={`/product/${encodeURIComponent(product.name)}`}
              state={{ product }}
              className="search-product-card"
            >

              <div className="search-product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

              <div className="search-product-info">

                <h3>
                  {product.name}
                </h3>

                <p>
                  {product.price}
                </p>

              </div>

            </Link>

          ))}

        </div>

      )}

    </div>
  );
}

export default Search;
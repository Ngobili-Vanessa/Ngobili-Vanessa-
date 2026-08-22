import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiShoppingCart,
  FiArrowLeft,
  FiHeart,
} from "react-icons/fi";
import { useCart } from "../component/CartContext.jsx";
import { useWishlist } from "../component/WishlistContext.jsx";
import "./ProductDetails.css";

function ProductDetails() {
  const location = useLocation();

  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isWishlisted,
  } = useWishlist();

  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>

        <Link to="/category">
          Back to Products
        </Link>
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) =>
      current > 1 ? current - 1 : 1
    );
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleWishlist = () => {
    toggleWishlist(product);
  };

  return (
    <div className="product-details-container">

      <Link
        to="/category"
        className="back-products"
      >
        <FiArrowLeft />
        Back to Products
      </Link>

      <div className="product-details">

        <div className="product-details-image-container">

          <img
            src={product.image}
            alt={product.name}
            className="product-details-image"
          />

        </div>

        <div className="product-details-info">

          <p className="product-category">
            {product.category || "Product"}
          </p>

          <div className="product-title-row">

            <h1>
              {product.name}
            </h1>

            <button
              type="button"
              className={`details-wishlist-btn ${
                isWishlisted(product.name)
                  ? "wishlisted"
                  : ""
              }`}
              onClick={handleWishlist}
              aria-label={
                isWishlisted(product.name)
                  ? "Remove from wishlist"
                  : "Add to wishlist"
              }
            >
              <FiHeart
                fill={
                  isWishlisted(product.name)
                    ? "currentColor"
                    : "none"
                }
              />
            </button>

          </div>

          <p className="product-details-price">
            {product.price}
          </p>

          <div className="product-divider"></div>

          <div className="product-availability">

            <span className="availability-dot"></span>

            <span>
              In Stock
            </span>

          </div>

          <div className="product-quantity">

            <span>
              Quantity
            </span>

            <div className="quantity-selector">

              <button
                onClick={decreaseQuantity}
              >
                -
              </button>

              <span>
                {quantity}
              </span>

              <button
                onClick={increaseQuantity}
              >
                +
              </button>

            </div>

          </div>

          <div className="product-actions">

            <button
              className="details-add-cart"
              onClick={handleAddToCart}
            >
              <FiShoppingCart />
              Add to Cart
            </button>

            <Link
              to="/checkout"
              state={{ product }}
              className="buy-now-btn"
              onClick={handleAddToCart}
            >
              Buy Now
            </Link>

          </div>

        </div>

      </div>

      <div className="product-specifications">

        <h2>
          Product Specifications
        </h2>

        <div className="specifications-list">

          {Object.entries(product)
            .filter(
              ([key]) =>
                ![
                  "name",
                  "category",
                  "image",
                  "price",
                  "rating",
                  "reviews",
                ].includes(key)
            )
            .map(([key, value]) => (
              <div
                className="specification-row"
                key={key}
              >
                <span>
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (letter) =>
                      letter.toUpperCase()
                    )}
                </span>

                <strong>
                  {value}
                </strong>
              </div>
            ))}

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;
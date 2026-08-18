import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart, FiArrowLeft } from "react-icons/fi";
import { useCart } from "../component/CartContext.jsx";
import "./ProductDetails.css";

function ProductDetails() {
  const location = useLocation();
  const { addToCart } = useCart();

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

  return (
    <div className="product-details-container">

      <Link
        to="/category"
        className="back-products"
      >
        <FiArrowLeft />
        Back to Products
      </Link>


      {/* MAIN PRODUCT SECTION */}

      <div className="product-details">

        {/* PRODUCT IMAGE */}

        <div className="product-details-image-container">

          <img
            src={product.image}
            alt={product.name}
            className="product-details-image"
          />

        </div>


        {/* PRODUCT INFORMATION */}

        <div className="product-details-info">

          <p className="product-category">
            {product.category || "Product"}
          </p>

          <h1>
            {product.name}
          </h1>

          <p className="product-details-price">
            {product.price}
          </p>


          <div className="product-divider"></div>


          {/* AVAILABILITY */}

          <div className="product-availability">

            <span className="availability-dot"></span>

            <span>
              In Stock
            </span>

          </div>


          {/* QUANTITY */}

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


          {/* ACTIONS */}

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


      {/* PRODUCT SPECIFICATIONS */}

      <div className="product-specifications">

        <h2>
          Product Specifications
        </h2>

        <div className="specifications-list">

          {product.processor && (
            <div className="specification-row">
              <span>Processor</span>
              <strong>{product.processor}</strong>
            </div>
          )}

          {product.ram && (
            <div className="specification-row">
              <span>RAM</span>
              <strong>{product.ram}</strong>
            </div>
          )}

          {product.storage && (
            <div className="specification-row">
              <span>Storage</span>
              <strong>{product.storage}</strong>
            </div>
          )}

          {product.display && (
            <div className="specification-row">
              <span>Display</span>
              <strong>{product.display}</strong>
            </div>
          )}

          {product.graphics && (
            <div className="specification-row">
              <span>Graphics</span>
              <strong>{product.graphics}</strong>
            </div>
          )}

          {product.os && (
            <div className="specification-row">
              <span>Operating System</span>
              <strong>{product.os}</strong>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;
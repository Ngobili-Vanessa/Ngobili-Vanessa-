import { Link } from "react-router-dom";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { useCart } from "../component/CartContext.jsx";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="cart-icon">
            <FiShoppingCart size={80} strokeWidth={1.5} />
          </div>

          <h2>Your Cart is Empty</h2>
          <p>It doesn't have to be</p>

          <Link to="/category">
            <button className="shop-btn">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>{item.price}</p>

                <div className="quantity-controls">
                  <button
                    onClick={() => decreaseQuantity(item.name)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.name)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="remove-cart-item"
                onClick={() => removeFromCart(item.name)}
              >
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
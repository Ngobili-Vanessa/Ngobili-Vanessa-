import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
function Cart() {
  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart</h1>
      <div className="empty-cart">
        <div className="cart-icon">
          <FiShoppingCart size={80}
          strokeWidth={1.5} />
        </div>
        <h2>Your Cart is Empty</h2>
        <p>It doesn't have to be</p>
        <Link to="/home">
        <button className="shop-btn">
          Continue Shopping
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
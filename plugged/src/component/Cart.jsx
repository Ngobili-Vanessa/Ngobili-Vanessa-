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
  console.log("CART ITEMS:", cartItems);

  const subtotal = cartItems.reduce((total, item) => {
  const price = Number(
    item.price.replace(/₦|,/g, "")
  );

  return total + price * item.quantity;
}, 0);

const formattedSubtotal = `₦${subtotal.toLocaleString()}`;

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
      <div className="cart-content">

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


  <div className="order-summary">

    <h2>Order Summary</h2>

    <div className="summary-row">
      <span>Subtotal</span>
      <span>{formattedSubtotal}</span>
    </div>

    <div className="summary-row">
      <span>Delivery</span>
      <span>Free</span>
    </div>

    <div className="summary-divider"></div>

    <div className="summary-total">
      <span>Total</span>
      <span>{formattedSubtotal}</span>
    </div>

   <Link
  to="/checkout"
  className="checkout-btn"
>
  Proceed to Checkout
</Link>

  </div>

</div>
      )}
    </div>
  );
}

export default Cart;
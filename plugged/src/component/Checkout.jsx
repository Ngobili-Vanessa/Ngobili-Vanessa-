import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../component/CartContext.jsx";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const { cartItems } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("delivery");
  const [onlineMethod, setOnlineMethod] = useState("card");

  const subtotal = cartItems.reduce((total, item) => {
    const price = Number(
      item.price.replace(/₦|,/g, "")
    );

    return total + price * item.quantity;
  }, 0);

  const formattedTotal = `₦${subtotal.toLocaleString()}`;

  return (
    <div className="checkout-container">

      <h1 className="checkout-title">
        Checkout
      </h1>

      <div className="checkout-content">

        <div className="checkout-form">

          <h2>Delivery Information</h2>

          <div className="form-row">

            <div className="form-group">
              <label>First Name</label>

              <input
                type="text"
                placeholder="Enter your first name"
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>

              <input
                type="text"
                placeholder="Enter your last name"
              />
            </div>

          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label>Delivery Address</label>

            <input
              type="text"
              placeholder="Enter your delivery address"
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>City</label>

              <input
                type="text"
                placeholder="City"
              />
            </div>

            <div className="form-group">
              <label>State</label>

              <input
                type="text"
                placeholder="State"
              />
            </div>

          </div>

          <h2 className="payment-title">
            Payment Method
          </h2>

          <div className="payment-options">

            <label className="payment-option">

              <input
                type="radio"
                name="payment"
                value="delivery"
                checked={paymentMethod === "delivery"}
                onChange={() => setPaymentMethod("delivery")}
              />

              <div>
                <strong>
                  Pay on Delivery
                </strong>

                <p>
                  Pay when your order arrives.
                </p>
              </div>

            </label>

            <label className="payment-option">

              <input
                type="radio"
                name="payment"
                value="online"
                checked={paymentMethod === "online"}
                onChange={() => setPaymentMethod("online")}
              />

              <div>
                <strong>
                  Pay Online
                </strong>

                <p>
                  Pay securely with your card or bank transfer.
                </p>
              </div>

            </label>

          </div>

          {paymentMethod === "online" && (

            <div className="online-payment">

              <h3>
                Choose Payment Method
              </h3>

              <div className="online-payment-options">

                <label
                  className={
                    onlineMethod === "card"
                      ? "online-payment-option active"
                      : "online-payment-option"
                  }
                >

                  <input
                    type="radio"
                    name="onlinePayment"
                    value="card"
                    checked={onlineMethod === "card"}
                    onChange={() => setOnlineMethod("card")}
                  />

                  <div>
                    <strong>
                      Card Payment
                    </strong>

                    <p>
                      Pay with your debit or credit card.
                    </p>
                  </div>

                </label>

                <label
                  className={
                    onlineMethod === "transfer"
                      ? "online-payment-option active"
                      : "online-payment-option"
                  }
                >

                  <input
                    type="radio"
                    name="onlinePayment"
                    value="transfer"
                    checked={onlineMethod === "transfer"}
                    onChange={() => setOnlineMethod("transfer")}
                  />

                  <div>
                    <strong>
                      Bank Transfer
                    </strong>

                    <p>
                      Pay directly through your bank.
                    </p>
                  </div>

                </label>

              </div>

              {onlineMethod === "card" && (

                <div className="payment-details">

                  <div className="form-group">
                    <label>
                      Card Number
                    </label>

                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>

                  <div className="form-row">

                    <div className="form-group">
                      <label>
                        Expiry Date
                      </label>

                      <input
                        type="text"
                        placeholder="MM/YY"
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        CVV
                      </label>

                      <input
                        type="password"
                        placeholder="123"
                      />
                    </div>

                  </div>

                </div>

              )}

              {onlineMethod === "transfer" && (

                <div className="transfer-info">

                  <h4>
                    Bank Transfer
                  </h4>

                  <p>
                    Your bank transfer details will be
                    provided after you place your order.
                  </p>

                </div>

              )}

            </div>

          )}

        </div>


        <div className="checkout-summary">

          <h2>
            Order Summary
          </h2>

          <div className="checkout-products">

            {cartItems.map((item) => (

              <div
                className="checkout-product"
                key={item.name}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="checkout-product-info">

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                </div>

                <span>
                  ₦
                  {(
                    Number(
                      item.price.replace(/₦|,/g, "")
                    ) * item.quantity
                  ).toLocaleString()}
                </span>

              </div>

            ))}

          </div>

          <div className="checkout-divider"></div>

          <div className="checkout-total-row">

            <span>
              Subtotal
            </span>

            <span>
              {formattedTotal}
            </span>

          </div>

          <div className="checkout-total-row">

            <span>
              Delivery
            </span>

            <span>
              Free
            </span>

          </div>

          <div className="checkout-divider"></div>

          <div className="checkout-grand-total">

            <span>
              Total
            </span>

            <span>
              {formattedTotal}
            </span>

          </div>

          <button
            className="place-order-btn"
            onClick={() => navigate("/order-success")}
          >
            Place Order
          </button>

          <Link
            to="/cart"
            className="back-to-cart"
          >
            Back to Cart
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Checkout;
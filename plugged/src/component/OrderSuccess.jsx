import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <div className="order-success-container">

      <div className="order-success-card">

        <div className="order-success-icon">
          <FiCheck />
        </div>

        <h1>Order Placed Successfully</h1>

        <p>
          Thank you for shopping with Plugged.
          Your order has been received and is being processed.
        </p>

        <div className="order-number">
          <span>Order Number</span>
          <strong>#PLG-2026-001</strong>
        </div>

        <div className="order-success-actions">

          <Link
            to="/category"
            className="continue-shopping-success"
          >
            Continue Shopping
          </Link>

          <Link
            to="/home"
            className="back-home-success"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default OrderSuccess;
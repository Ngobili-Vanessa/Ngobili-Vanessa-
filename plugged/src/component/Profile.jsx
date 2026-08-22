import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../component/WishlistContext.jsx";
import "./Profile.css";

const user = {
  name: "Your Name",
  email: "your@email.com",
  phone: "Add phone number",
  memberSince: "2026",
  address: "Add your delivery address",
  avatar: "https://i.pravatar.cc/150?img=12",
};

const recentOrders = [
  {
    id: "ORD-1024",
    date: "Aug 7, 2026",
    status: "Delivered",
    total: "₦228,000",
  },
  {
    id: "ORD-1019",
    date: "Jul 28, 2026",
    status: "Shipped",
    total: "₦78,450",
  },
  {
    id: "ORD-1014",
    date: "Jul 12, 2026",
    status: "Processing",
    total: "₦12,500",
  },
];

const savedAddresses = [
  {
    label: "Home",
    address: "Add your home address",
  },
  {
    label: "Office",
    address: "Add your office address",
  },
];

function Profile() {
  const navigate = useNavigate();

  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const handleLogout = () => {
    navigate("/signin");
  };

  return (
    <div className="profile-page">

      <div className="profile-hero">

        <div className="profile-card">

          <img
            className="profile-avatar"
            src={user.avatar}
            alt="Profile avatar"
          />

          <h2>{user.name}</h2>

          <p>{user.email}</p>

          <div className="profile-detail">
            <strong>Phone</strong>
            <span>{user.phone}</span>
          </div>

          <div className="profile-detail">
            <strong>Member since</strong>
            <span>{user.memberSince}</span>
          </div>

          <div className="profile-detail">
            <strong>Default address</strong>
            <span>{user.address}</span>
          </div>

          <div className="profile-actions">

            <Link to="/settings#orders">
              View orders
            </Link>

            <button
              type="button"
              onClick={() => navigate("/settings#account")}
            >
              Edit profile
            </button>

            <button
              type="button"
              className="logout-btn"
              onClick={handleLogout}
            >
              Log Out
            </button>

          </div>

        </div>

        <div className="profile-summary">

          <div className="section-header">

            <h2>Profile overview</h2>

            <Link to="/settings">
              Manage
            </Link>

          </div>

          <p>
            Your account is ready for faster checkout, trackable
            orders, and personalized recommendations. Keep your
            delivery details up to date for the best shopping
            experience.
          </p>

          <div className="summary-grid">

            <div className="summary-card">
              <strong>{recentOrders.length}</strong>
              <span>Orders placed</span>
            </div>

            <div className="summary-card">
              <strong>{savedAddresses.length}</strong>
              <span>Saved addresses</span>
            </div>

            <div className="summary-card">
              <strong>{wishlist.length}</strong>
              <span>Wishlist items</span>
            </div>

          </div>

        </div>

      </div>

      <div className="profile-widgets">

        <section
          className="profile-widget"
          id="orders"
        >

          <div className="section-header">

            <h2>Recent orders</h2>

            <Link to="/settings#orders">
              See all
            </Link>

          </div>

          {recentOrders.length === 0 ? (

            <div className="wishlist-empty">
              <p>No orders yet.</p>

              <Link to="/category">
                Start Shopping
              </Link>
            </div>

          ) : (

            <ul>

              {recentOrders.map((order) => (
                <li key={order.id}>

                  <div className="item-title">
                    {order.id}
                  </div>

                  <div className="item-meta">
                    {order.date} • {order.status}
                  </div>

                  <div className="item-price">
                    {order.total}
                  </div>

                </li>
              ))}

            </ul>

          )}

        </section>
      

        <section
          className="profile-widget"
          id="saved-addresses"
        >

          <div className="section-header">

            <h2>Saved addresses</h2>

            <Link to="/settings#addresses">
              Edit
            </Link>

          </div>

          {savedAddresses.length === 0 ? (

            <div className="wishlist-empty">
              <p>No saved addresses yet.</p>

              <Link to="/settings#addresses">
                Add Address
              </Link>
            </div>

          ) : (

            <ul>

              {savedAddresses.map((address) => (
                <li key={address.label}>

                  <div className="item-title">
                    {address.label}
                  </div>

                  <div className="item-meta">
                    {address.address}
                  </div>

                </li>
              ))}

            </ul>

          )}

        </section>

        <section
          className="profile-widget"
          id="wishlist"
        >

          <div className="section-header">

            <h2>Wishlist</h2>

            <Link to="/category">
              Add more
            </Link>

          </div>

          {wishlist.length === 0 ? (

            <div className="wishlist-empty">

              <p>
                Your wishlist is empty.
              </p>

              <Link to="/category">
                Browse Products
              </Link>

            </div>

          ) : (

            <ul>

              {wishlist.map((item) => (
                <li key={item.name}>

                  <div>

                    <div className="item-title">
                      {item.name}
                    </div>

                    <div className="item-price">
                      {item.price}
                    </div>

                  </div>

                  <button
                    type="button"
                    className="remove-wishlist-btn"
                    onClick={() =>
                      removeFromWishlist(item.name)
                    }
                  >
                    Remove
                  </button>

                </li>
              ))}

            </ul>

          )}

        </section>

      </div>

    </div>
  );
}

export default Profile;


import "./Profile.css";

const user = {
  name: "Omeh samuel victory",
  email: "samuel.omeh@example.com",
  phone: "+234 812 #######",
  memberSince: "June 2024",
  address: "24 Tech Avenue, Lagos, Nigeria",
  avatar: "https://i.pravatar.cc/150?img=56",
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
    address: "24 Tech Avenue, Lagos, Nigeria",
  },
  {
    label: "Office",
    address: "Suite 12, Business Plaza, Victoria Island",
  },
];

const wishlist = [
  { title: "Apple AirPods Pro", price: "₦125,000" },
  { title: "Samsung Galaxy S25 Ultra", price: "₦1,650,000" },
  { title: "Nintendo Switch 2", price: "₦350,000" },
];

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-hero">
        <div className="profile-card">
          <img className="profile-avatar" src={user.avatar} alt="Profile avatar" />
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
            <a href="#orders">View orders</a>
            <button type="button">Edit profile</button>
          </div>
        </div>

        <div className="profile-summary">
          <div className="section-header">
            <h2>Profile overview</h2>
            <a href="#settings">Manage</a>
          </div>
          <p>
            Your account is ready for faster checkout, trackable orders, and personalized recommendations. Keep your delivery details up to date for the best shopping experience.
          </p>

          <div className="summary-grid">
            <div className="summary-card">
              <strong>12</strong>
              <span>Orders placed</span>
            </div>
            <div className="summary-card">
              <strong>3</strong>
              <span>Saved addresses</span>
            </div>
            <div className="summary-card">
              <strong>5</strong>
              <span>Wishlist items</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-widgets">
        <section className="profile-widget" id="orders">
          <div className="section-header">
            <h2>Recent orders</h2>
            <a href="/cart">See all</a>
          </div>
          <ul>
            {recentOrders.map((order) => (
              <li key={order.id}>
                <div className="item-title">{order.id}</div>
                <div className="item-meta">{order.date} • {order.status}</div>
                <div className="item-price">{order.total}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="profile-widget" id="saved-addresses">
          <div className="section-header">
            <h2>Saved addresses</h2>
            <a href="#addresses">Edit</a>
          </div>
          <ul>
            {savedAddresses.map((address) => (
              <li key={address.label}>
                <div className="item-title">{address.label}</div>
                <div className="item-meta">{address.address}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="profile-widget" id="wishlist">
          <div className="section-header">
            <h2>Wishlist</h2>
            <a href="/search">Add more</a>
          </div>
          <ul>
            {wishlist.map((item) => (
              <li key={item.title}>
                <div className="item-title">{item.title}</div>
                <div className="item-price">{item.price}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Profile;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Settings.css";

const defaultUser = {
  name: "Omeh samuel victory",
  email: "samuel.omeh@example.com",
  phone: "+234 812 #######",
};

const defaultAddresses = [
  {
    id: 1,
    label: "Home",
    address: "24 Tech Avenue, Lagos, Nigeria",
  },
  {
    id: 2,
    label: "Office",
    address: "Suite 12, Business Plaza, Victoria Island",
  },
];

const defaultNotifications = {
  orderUpdates: true,
  promotions: false,
  newsletter: true,
};

const orders = [
  {
    id: "ORD-1024",
    date: "Aug 7, 2026",
    items: "Wireless Headphones, USB-C Hub",
    status: "Delivered",
    total: "₦228,000",
  },
  {
    id: "ORD-1019",
    date: "Jul 28, 2026",
    items: "Mechanical Keyboard",
    status: "Shipped",
    total: "₦78,450",
  },
  {
    id: "ORD-1014",
    date: "Jul 12, 2026",
    items: "Phone Case",
    status: "Processing",
    total: "₦12,500",
  },
];

function load(key, fallback) {
  const stored = window.localStorage.getItem(`plugged:${key}`);
  return stored ? JSON.parse(stored) : fallback;
}

function persist(key, value) {
  window.localStorage.setItem(`plugged:${key}`, JSON.stringify(value));
}

function Settings() {
  const location = useLocation();
  const [user, setUser] = useState(() => load("user", defaultUser));
  const [addresses, setAddresses] = useState(() =>
    load("addresses", defaultAddresses)
  );
  const [notifications, setNotifications] = useState(() =>
    load("notifications", defaultNotifications)
  );
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState({ label: "", address: "" });
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  function handleUserChange(event) {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  function handleUserSave() {
    persist("user", user);
    setSavedMessage("Changes saved");
    setTimeout(() => setSavedMessage(""), 2500);
  }

  function startEdit(address) {
    setEditingId(address.id);
    setDraft({ label: address.label, address: address.address });
  }

  function startAdd() {
    setEditingId("new");
    setDraft({ label: "", address: "" });
  }

  function cancelEdit() {
    setEditingId(null);
    setDraft({ label: "", address: "" });
  }

  function saveAddress() {
    if (!draft.label.trim() || !draft.address.trim()) return;
    if (editingId === "new") {
      const next = [...addresses, { id: Date.now(), ...draft }];
      setAddresses(next);
      persist("addresses", next);
    } else {
      const next = addresses.map((address) =>
        address.id === editingId ? { ...address, ...draft } : address
      );
      setAddresses(next);
      persist("addresses", next);
    }
    cancelEdit();
  }

  function removeAddress(id) {
    const next = addresses.filter((address) => address.id !== id);
    setAddresses(next);
    persist("addresses", next);
  }

  function toggleNotification(key) {
    const next = { ...notifications, [key]: !notifications[key] };
    setNotifications(next);
    persist("notifications", next);
  }

  const draftInvalid = !draft.label.trim() || !draft.address.trim();

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account details, addresses, orders and preferences.</p>
      </div>

      <nav className="settings-nav">
        <a href="#account">Account</a>
        <a href="#addresses">Addresses</a>
        <a href="#orders">Orders</a>
        <a href="#preferences">Preferences</a>
      </nav>

      <section className="settings-section" id="account">
        <h2>Account information</h2>
        <p className="section-desc">Update your personal details.</p>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={user.name}
              onChange={handleUserChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleUserChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={user.phone}
              onChange={handleUserChange}
            />
          </div>
        </div>
        <div className="save-row">
          {savedMessage && <span className="save-feedback">{savedMessage}</span>}
          <button type="button" className="btn-solid" onClick={handleUserSave}>
            Save changes
          </button>
        </div>
      </section>

      <section className="settings-section" id="addresses">
        <h2>Saved addresses</h2>
        <p className="section-desc">Manage where your orders get delivered.</p>

        {editingId === "new" && (
          <div className="address-card is-editing">
            <div className="address-form-row">
              <div className="form-field">
                <label htmlFor="new-label">Label</label>
                <input
                  id="new-label"
                  type="text"
                  placeholder="e.g. Home, Office"
                  value={draft.label}
                  onChange={(event) =>
                    setDraft((prev) => ({ ...prev, label: event.target.value }))
                  }
                />
              </div>
              <div className="form-field">
                <label htmlFor="new-address">Address</label>
                <input
                  id="new-address"
                  type="text"
                  placeholder="Street, city, state"
                  value={draft.address}
                  onChange={(event) =>
                    setDraft((prev) => ({ ...prev, address: event.target.value }))
                  }
                />
              </div>
            </div>
            <div className="address-form-actions">
              <button
                type="button"
                className="btn-solid"
                disabled={draftInvalid}
                onClick={saveAddress}
              >
                Add address
              </button>
              <button type="button" className="btn-outline" onClick={cancelEdit}>
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="address-list">
          {addresses.map((address) =>
            editingId === address.id ? (
              <div className="address-card is-editing" key={address.id}>
                <div className="address-form-row">
                  <div className="form-field">
                    <label htmlFor={`label-${address.id}`}>Label</label>
                    <input
                      id={`label-${address.id}`}
                      type="text"
                      value={draft.label}
                      onChange={(event) =>
                        setDraft((prev) => ({
                          ...prev,
                          label: event.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor={`address-${address.id}`}>Address</label>
                    <input
                      id={`address-${address.id}`}
                      type="text"
                      value={draft.address}
                      onChange={(event) =>
                        setDraft((prev) => ({
                          ...prev,
                          address: event.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="address-form-actions">
                  <button
                    type="button"
                    className="btn-solid"
                    disabled={draftInvalid}
                    onClick={saveAddress}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn-outline"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="address-card" key={address.id}>
                <div>
                  <div className="address-label">{address.label}</div>
                  <div className="address-text">{address.address}</div>
                </div>
                <div className="address-actions">
                  <button
                    type="button"
                    className="btn-outline"
                    onClick={() => startEdit(address)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn-outline"
                    onClick={() => removeAddress(address.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            )
          )}
          {addresses.length === 0 && editingId !== "new" && (
            <p className="empty-note">No saved addresses yet.</p>
          )}
        </div>

        {editingId !== "new" && (
          <button type="button" className="btn-solid" onClick={startAdd}>
            Add new address
          </button>
        )}
      </section>

      <section className="settings-section" id="orders">
        <h2>Order history</h2>
        <p className="section-desc">All the orders you have placed with us.</p>
        <table className="order-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Items</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.items}</td>
                <td>
                  <span className={`status-pill status-${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="settings-section" id="preferences">
        <h2>Notification preferences</h2>
        <p className="section-desc">Choose what we can contact you about.</p>
        <div className="toggle-list">
          <div className="toggle-row">
            <div>
              <div className="toggle-title">Order updates</div>
              <div className="toggle-desc">Shipping and delivery notifications for your orders.</div>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications.orderUpdates}
                onChange={() => toggleNotification("orderUpdates")}
              />
              <span className="slider" />
            </label>
          </div>
          <div className="toggle-row">
            <div>
              <div className="toggle-title">Promotions</div>
              <div className="toggle-desc">Discounts and special offers.</div>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications.promotions}
                onChange={() => toggleNotification("promotions")}
              />
              <span className="slider" />
            </label>
          </div>
          <div className="toggle-row">
            <div>
              <div className="toggle-title">Newsletter</div>
              <div className="toggle-desc">New arrivals and product recommendations.</div>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications.newsletter}
                onChange={() => toggleNotification("newsletter")}
              />
              <span className="slider" />
            </label>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Settings;

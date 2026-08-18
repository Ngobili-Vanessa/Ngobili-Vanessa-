import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import { useCart } from "../component/CartContext.jsx";
const categories = [
  "All Products",
  "Smartphones",
  "Laptops",
  "Tablets",
  "Accessories",
  "Audio",
  "Smartwatch",
  "Gaming",
  "Home Appliances",
  "TV's & Entertainment",
  "Cameras",
  "Networking",
  "Kitchen Appliances",
  "Office Appliances",
];

const products = [
  {
    name: "iPhone 16 Pro",
    category: "Smartphones",
    image: "/images-featured/iphone16pro.jpeg",
    price: "₦1,850,000",
    rating: 5,
    reviews: 24,
  },
  {
    name: "Samsung Galaxy S25 Ultra",
    category: "Smartphones",
    image: "/images-featured/samsungs25ultra.jpeg",
    price: "₦1,650,000",
    rating: 5,
    reviews: 18,
  },
  {
    name: "Google Pixel 10",
    category: "Smartphones",
    image: "/images-featured/Google Pixel 10a.jpeg",
    price: "₦1,200,000",
    rating: 5,
    reviews: 24,
  },
  {
    name: "Xiaomi 15 Ultra",
    category: "Smartphones",
    image: "/images-featured/Xiaomi 15 Ultra.jpeg",
    price: "₦1,050,000",
    rating: 5,
    reviews: 24,
  },

  {
    name: "MacBook Air M4",
    category: "Laptops",
    image: "/images-featured/Macbook air m4.jpeg",
    price: "₦1,500,000",
    rating: 5,
    reviews: 34,
     processor: "Apple M2",
  ram: "8GB",
  storage: "256GB SSD",
  display: "13.6-inch Liquid Retina",
  graphics: "Integrated Apple GPU",
  os: "macOS"
  },
  {
    name: "Dell XPS 13",
    category: "Laptops",
    image: "/images-featured/dell xps 13.jpeg",
    price: "₦350,000",
    rating: 4,
    reviews: 14,
  },
  {
    name: "HP Spectre x360",
    category: "Laptops",
    image: "/images-featured/HP Spectre x360.jpeg",
    price: "₦425,000",
    rating: 5,
    reviews: 20,
  },
  {
    name: "Lenovo Yoga Pro 9i",
    category: "Laptops",
    image: "/images-featured/Lenovo Yoga pro 9i.jpeg",
    price: "₦2,500,000",
    rating: 5,
    reviews: 35,
  },

  {
    name: "iPad Air",
    category: "Tablets",
    image: "/images-featured/ipad air.jpeg",
    price: "₦1,200,000",
    rating: 5,
    reviews: 28,
  },
  {
    name: "Samsung Galaxy Tab S10",
    category: "Tablets",
    image: "/images-featured/Samsung Galaxy Tab S10.jpeg",
    price: "₦1,800,000",
    rating: 5,
    reviews: 21,
  },
  {
    name: "Xiaomi Pad 7",
    category: "Tablets",
    image: "/images-featured/Xiaomi Pad 7 .jpeg",
    price: "₦530,000",
    rating: 5,
    reviews: 20,
  },
  {
    name: "Lenovo Tab P12",
    category: "Tablets",
    image: "/images-featured/lenovo tab p12.jpeg",
    price: "₦568,000",
    rating: 5,
    reviews: 42,
  },
  {
    name: "Anker 20,000mAh Power Bank",
    category: "Accessories",
    image: "/images-featured/anker 20000mAH powerbank.jpeg",
    price: "₦46,000",
    rating: 5,
    reviews: 62,
  },
  {
    name: "UGREEN USB-C Hub",
    category: "Accessories",
    image: "/images-featured/ugreen usb-c hub.jpeg",
    price: "₦45,000",
    rating: 5,
    reviews: 32,
  },
  {
    name: "Logitech MX Keys Keyboard",
    category: "Accessories",
    image: "/images-featured/logitech mx keys keyboard.jpeg",
    price: "₦130,000",
    rating: 5,
    reviews: 21,
  },
  {
    name: "Apple MagSafe Charger",
    category: "Accessories",
    image: "/images-featured/apple magsafe charger.jpeg",
    price: "₦25,000",
    rating: 5,
    reviews: 75,
  },

  {
    name: "AirPods Pro 2",
    category: "Audio",
    image: "/images-featured/Apple Airpods Pro.jpeg",
    price: "₦460,000",
    rating: 5,
    reviews: 23,
  },
  {
    name: "Sony WH-1000XM6",
    category: "Audio",
    image: "/images-featured/sony wh-1000xm6.jpeg",
    price: "₦550,000",
    rating: 5,
    reviews: 12,
  },
  {
    name: "JBL Flip 7",
    category: "Audio",
    image: "/images-featured/JBL Flip 7.jpeg",
    price: "₦220,000",
    rating: 5,
    reviews: 56,
  },
  {
    name: "Beats Studio Pro",
    category: "Audio",
    image: "/images-featured/beats studio.jpeg",
    price: "₦380,000",
    rating: 5,
    reviews: 46,
  },

  {
    name: "Apple Watch Series 11",
    category: "Smartwatch",
    image: "/images-featured/Apple Watch Series 11.jpeg",
    price: "₦600,000",
    rating: 5,
    reviews: 73,
  },
  {
    name: "Samsung Galaxy Watch Ultra",
    category: "Smartwatch",
    image: "/images-featured/Samsung Galaxy Watch Ultra.jpeg",
    price: "₦700,000",
    rating: 5,
    reviews: 25,
  },
  {
    name: "Google Pixel Watch 3",
    category: "Smartwatch",
    image: "/images-featured/google pixel watch 3.jpeg",
    price: "₦630,000",
    rating: 5,
    reviews: 15,
  },
  {
    name: "Garmin Venu 3",
    category: "Smartwatch",
    image: "/images-featured/garmin venu 3.jpeg",
    price: "₦1,200,000",
    rating: 5,
    reviews: 34,
  },

  {
    name: "PlayStation 5",
    category: "Gaming",
    image: "/images-featured/PlayStation 5.jpeg",
    price: "₦900,000",
    rating: 5,
    reviews: 10,
  },
  {
    name: "Xbox Series X",
    category: "Gaming",
    image: "/images-featured/Xbox Series X.jpeg",
    price: "₦820,000",
    rating: 5,
    reviews: 52,
  },
  {
    name: "Nintendo Switch 2",
    category: "Gaming",
    image: "/images-featured/Nintendo switch2.jpeg",
    price: "₦870,000",
    rating: 5,
    reviews: 43,
  },
  {
    name: "ASUS ROG Ally X",
    category: "Gaming",
    image: "/images-featured/ASUS ROG Ally X.jpeg",
    price: "₦1,600,000",
    rating: 5,
    reviews: 61,
  },

  {
    name: "Dyson V15 Vacuum",
    category: "Home Appliances",
    image: "/images-featured/Dyson V15 Vacuum.jpeg",
    price: "₦1,900,000",
    rating: 5,
    reviews: 60,
  },
  {
    name: "LG Dual Inverter AC",
    category: "Home Appliances",
    image: "/images-featured/LG Dual Inverter ac.jpeg ",
    price: "₦1,200,000",
    rating: 5,
    reviews: 90,
  },
  {
    name: "Philips Air Purifier",
    category: "Home Appliances",
    image: "/images-featured/Philips Air Purifier.jpeg ",
    price: "₦900,000",
    rating: 5,
    reviews: 80,
  },
  {
    name: "Xiaomi Robot Vacuum",
    category: "Home Appliances",
    image: "/images-featured/Xiaomi Robot Vacuum.jpeg ",
    price: "₦950,000",
    rating: 5,
    reviews: 70,
  },

  {
    name: "Samsung Neo QLED 4K TV",
    category: "TV's & Entertainment",
    image: "/images-featured/samsung neo.jpeg ",
    price: "₦4,900,000",
    rating: 5,
    reviews: 96,
  },
  {
    name: "LG OLED evo TV",
    category: "TV's & Entertainment",
    image: "/images-featured/LG OLED evo.jpeg ",
    price: "₦4,200,000",
    rating: 5,
    reviews: 85,
  },
  {
    name: "Sony BRAVIA 9",
    category: "TV's & Entertainment",
    image: "/images-featured/sony bravia 9.jpeg ",
    price: "₦3,000,000",
    rating: 5,
    reviews: 74,
  },
  {
    name: "Amazon Fire TV Stick 4K Max",
    category: "TV's & Entertainment",
    image: "/images-featured/Amazon Fire.jpeg ",
    price: "₦100,000",
    rating: 5,
    reviews: 69,
  },

  {
    name: "Canon EOS R10",
    category: "Cameras",
    image: "/images-featured/canon eos .jpeg",
    price: "₦2,100,000",
    rating: 5,
    reviews: 58,
  },
  {
    name: "Sony Alpha a7 IV",
    category: "Cameras",
    image: "/images-featured/Sony Alpha 7 IV.jpeg",
    price: "₦3,200,000",
    rating: 5,
    reviews: 47,
  },
  {
    name: "Nikon Z6 III",
    category: "Cameras",
    image: "/images-featured/Nikon Z6iii.jpeg",
    price: "₦2,900,000",
    rating: 5,
    reviews: 63,
  },
  {
    name: "Fujifilm X-T5",
    category: "Cameras",
    image: "/images-featured/fujifilm.jpeg ",
    price: "₦3,000,000",
    rating: 5,
    reviews: 52,
  },

  {
    name: "TP-Link Archer AX73",
    category: "Networking",
    image: "/images-featured/Tp-link Ax300.jpeg",
    price: "₦298,000",
    rating: 5,
    reviews: 41,
  },
  {
    name: "ASUS RT-AX88U Pro",
    category: "Networking",
    image: "/images-featured/asus rt.jpeg",
    price: "₦500,000",
    rating: 5,
    reviews: 30,
  },
  {
    name: "NETGEAR Nighthawk AX5400",
    category: "Networking",
    image: "/images-featured/netgear (2).jpeg",
    price: "₦385,000",
    rating: 5,
    reviews: 20,
  },
  {
    name: "TP-Link Deco X55",
    category: "Networking",
    image: "/images-featured/tp link deco.jpeg",
    price: "₦780,000",
    rating: 5,
    reviews: 10,
  },

  {
    name: "Ninja Air Fryer",
    category: "Kitchen Appliances",
    image: "/images-featured/Ninja Food air.jpeg ",
    price: "₦900,000",
    rating: 5,
    reviews: 74,
  },
  {
    name: "NutriBullet Pro Blender",
    category: "Kitchen Appliances",
    image: "/images-featured/NutriBullet Blender.jpeg ",
    price: "₦135,000",
    rating: 5,
    reviews: 45,
  },
  {
    name: "Philips Electric Kettle",
    category: "Kitchen Appliances",
    image: "/images-featured/philips electric kettle.jpeg ",
    price: "₦65,000",
    rating: 5,
    reviews: 31,
  },
  {
    name: "Instant Pot Duo",
    category: "Kitchen Appliances",
    image: "/images-featured/Instant Pot Duo.jpeg",
    price: "₦280,000",
    rating: 5,
    reviews: 10,
  },

  {
    name: "HP LaserJet Pro Printer",
    category: "Office Appliances",
    image: "/images-featured/HP LaserJet Pro.jpeg",
    price: "₦680,000",
    rating: 5,
    reviews: 34,
  },
  {
    name: "Epson EcoTank L4260",
    category: "Office Appliances",
    image: "/images-featured/epson.jpeg",
    price: "₦500,000",
    rating: 5,
    reviews: 12,
  },
  {
    name: "Canon PIXMA G3430",
    category: "Office Appliances",
    image: "/images-featured/Canon PIXMA.jpeg",
    price: "₦300,000",
    rating: 5,
    reviews: 64,
  },
  {
    name: "Fellowes Paper Shredder",
    category: "Office Appliances",
    image: "/images-featured/Fellowes Powershred.jpeg",
    price: "₦670,000",
    rating: 5,
    reviews: 34,
  },
];

function Category() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const {
    addToCart,
    cartMessage,
    closeCartMessage,
  } = useCart();

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="category-page">

      <section className="category-products-section">

        <aside className="categories-sidebar">
          <h2>Categories</h2>

          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  selectedCategory === category
                    ? "category-item active"
                    : "category-item"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </aside>

        <div className="products-section">

          <div className="products-header">
            <h2>{selectedCategory}</h2>

            <span>
              {filteredProducts.length} Products
            </span>
          </div>

          <div className="products-grid">

  {filteredProducts.map((product) => (
    <div
      className="product-card"
      key={product.name}
    >

      <Link
        to={`/product/${encodeURIComponent(product.name)}`}
        state={{ product }}
        className="product-card-link"
      >

        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-info">

          <h3>{product.name}</h3>

          <div className="product-rating">
            <span>★★★★★</span>

            <small>
              ({product.reviews})
            </small>
          </div>

          <p className="product-price">
            {product.price}
          </p>

        </div>

      </Link>

      <button
        className="add-to-cart-btn"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

    </div>
  ))}

</div>

        </div>

      </section>

      {cartMessage && (
        <div className="cart-modal-overlay">

          <div className="cart-modal">

            <div className="cart-success-icon">
              ✓
            </div>

            <h2>
              Added to Cart
            </h2>

            <p>
              {cartMessage}
            </p>

            <div className="cart-modal-actions">

              <button
                className="continue-shopping-btn"
                onClick={closeCartMessage}
              >
                Continue Shopping
              </button>

              <Link
                to="/cart"
                className="view-cart-btn"
              >
                View Cart
              </Link>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Category;
import React, { useState } from "react";
import "./Category.css";

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
  },
  {
    name: "Dell XPS 13",
    category: "Laptops",
    image: "/images-featured/dell xps 13.jpeg",
  },
  {
    name: "HP Spectre x360",
    category: "Laptops",
    image: "/images-featured/HP Spectre x360.jpeg",
  },
  {
    name: "Lenovo Yoga Pro 9i",
    category: "Laptops",
    image: "/images-featured/Lenovo Yoga pro 9i.jpeg",
  },

  {
    name: "iPad Air",
    category: "Tablets",
    image: "/images-featured/ipad air.jpeg",
  },
  {
    name: "Samsung Galaxy Tab S10",
    category: "Tablets",
    image: "/images-featured/Samsung Galaxy Tab S10.jpeg",
  },
  {
    name: "Xiaomi Pad 7",
    category: "Tablets",
    image: "/images-featured/Xiaomi Pad 7 .jpeg",
  },
  {
    name: "Lenovo Tab P12",
    category: "Tablets",
    image: "/images-featured/lenovo tab p12.jpeg",
  },
  {
    name: "Anker 20,000mAh Power Bank",
    category: "Accessories",
    image: "/images-featured/anker 20000mAH powerbank.jpeg",
  },
  {
    name: "UGREEN USB-C Hub",
    category: "Accessories",
    image: "/images-featured/ugreen usb-c hub.jpeg",
  },
  {
    name: "Logitech MX Keys Keyboard",
    category: "Accessories",
    image: "/images-featured/logitech mx keys keyboard.jpeg",
  },
  {
    name: "Apple MagSafe Charger",
    category: "Accessories",
    image: "/images-featured/apple magsafe charger.jpeg",
  },

  {
    name: "AirPods Pro 2",
    category: "Audio",
    image: "/images-featured/Apple Airpods Pro.jpeg",
  },
  {
    name: "Sony WH-1000XM6",
    category: "Audio",
    image: "/images-featured/sony wh-1000xm6.jpeg",
  },
  {
    name: "JBL Flip 7",
    category: "Audio",
    image: "/images-featured/JBL Flip 7.jpeg",
  },
  {
    name: "Beats Studio Pro",
    category: "Audio",
    image: "/images-featured/beats studio.jpeg",
  },

  {
    name: "Apple Watch Series 11",
    category: "Smartwatch",
    image: "/images-featured/Apple Watch Series 11.jpeg",
  },
  {
    name: "Samsung Galaxy Watch Ultra",
    category: "Smartwatch",
    image: "/images-featured/Samsung Galaxy Watch Ultra.jpeg",
  },
  {
    name: "Google Pixel Watch 3",
    category: "Smartwatch",
    image: "/images-featured/google pixel watch 3.jpeg",
  },
  {
    name: "Garmin Venu 3",
    category: "Smartwatch",
    image: "/images-featured/garmin venu 3.jpeg",
  },

  {
    name: "PlayStation 5",
    category: "Gaming",
    image: "/images-featured/PlayStation 5.jpeg",
  },
  {
    name: "Xbox Series X",
    category: "Gaming",
    image: "/images-featured/Xbox Series X.jpeg",
  },
  {
    name: "Nintendo Switch 2",
    category: "Gaming",
    image: "/images-featured/Nintendo switch2.jpeg",
  },
  {
    name: "ASUS ROG Ally X",
    category: "Gaming",
    image: "/images-featured/ASUS ROG Ally X.jpeg",
  },

  {
    name: "Dyson V15 Vacuum",
    category: "Home Appliances",
    image: "/images-featured/Dyson V15 Vacuum.jpeg",
  },
  {
    name: "LG Dual Inverter AC",
    category: "Home Appliances",
    image: "/images-featured/LG Dual Inverter ac.jpeg ",
  },
  {
    name: "Philips Air Purifier",
    category: "Home Appliances",
    image: "/images-featured/Philips Air Purifier.jpeg ",
  },
  {
    name: "Xiaomi Robot Vacuum",
    category: "Home Appliances",
    image: "/images-featured/Xiaomi Robot Vacuum.jpeg ",
  },

  {
    name: "Samsung Neo QLED 4K TV",
    category: "TV's & Entertainment",
    image: "/images-featured/samsung neo.jpeg ",
  },
  {
    name: "LG OLED evo TV",
    category: "TV's & Entertainment",
    image: "/images-featured/LG OLED evo.jpeg ",
  },
  {
    name: "Sony BRAVIA 9",
    category: "TV's & Entertainment",
    image: "/images-featured/sony bravia 9.jpeg ",
  },
  {
    name: "Amazon Fire TV Stick 4K Max",
    category: "TV's & Entertainment",
    image: "/images-featured/Amazon Fire.jpeg ",
  },

  {
    name: "Canon EOS R10",
    category: "Cameras",
    image: "/images-featured/canon eos .jpeg",
  },
  {
    name: "Sony Alpha a7 IV",
    category: "Cameras",
    image: "/images-featured/Sony Alpha 7 IV.jpeg",
  },
  {
    name: "Nikon Z6 III",
    category: "Cameras",
    image: "/images-featured/Nikon Z6iii.jpeg",
  },
  {
    name: "Fujifilm X-T5",
    category: "Cameras",
    image: "/images-featured/fujifilm.jpeg ",
  },

  {
    name: "TP-Link Archer AX73",
    category: "Networking",
    image: "/images-featured/Tp-link Ax300.jpeg",
  },
  {
    name: "ASUS RT-AX88U Pro",
    category: "Networking",
    image: "/images-featured/asus rt.jpeg",
  },
  {
    name: "NETGEAR Nighthawk AX5400",
    category: "Networking",
    image: "/images-featured/netgear (2).jpeg",
  },
  {
    name: "TP-Link Deco X55",
    category: "Networking",
    image: "/images-featured/tp link deco.jpeg",
  },

  {
    name: "Ninja Air Fryer",
    category: "Kitchen Appliances",
    image: "/images-featured/Ninja Food air.jpeg ",
  },
  {
    name: "NutriBullet Pro Blender",
    category: "Kitchen Appliances",
    image: "/images-featured/NutriBullet Blender.jpeg ",
  },
  {
    name: "Philips Electric Kettle",
    category: "Kitchen Appliances",
    image: "/images-featured/philips electric kettle.jpeg ",
  },
  {
    name: "Instant Pot Duo",
    category: "Kitchen Appliances",
    image: "/images-featured/Instant Pot Duo.jpeg",
  },

  {
    name: "HP LaserJet Pro Printer",
    category: "Office Appliances",
    image: "/images-featured/HP LaserJet Pro.jpeg",
  },
  {
    name: "Epson EcoTank L4260",
    category: "Office Appliances",
    image: "/images-featured/epson.jpeg",
  },
  {
    name: "Canon PIXMA G3430",
    category: "Office Appliances",
    image: "/images-featured/Canon PIXMA.jpeg",
  },
  {
    name: "Fellowes Paper Shredder",
    category: "Office Appliances",
    image: "/images-featured/Fellowes Powershred.jpeg",
  },
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter(
        (product) => product.category === selectedCategory
      );

  return (
    <div className="category-page">

      <section className="category-banner">
        <div className="category-banner-content">
          <h1>Explore Our Collection</h1>
          <p>Everything tech, all in one place.</p>

          <button className="shop-now-btn">
            Shop Now
          </button>
        </div>

        <div className="category-banner-image">
          <img
            src="/images-featured/category-banner.png"
            alt="Collection of electronic products"
          />
        </div>
      </section>

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
            <span>{filteredProducts.length} Products</span>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.name}>
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
                    <small>({product.reviews})</small>
                  </div>

                  <p className="product-price">{product.price}</p>

                  <button className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Category;
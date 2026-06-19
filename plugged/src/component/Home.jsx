import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

  const products = [
    {
    name: "Wireless Earbuds",
    image: "/images-featured/b74469f61562f7379f3e6c4dfcf159b2.jpg",
    className: "wireless-earbud-section",
    imgClass: "earbuds",
    textClass:"wireless",
  },
  {
    name: "Bluetooth Speakers",
    image: "/images-featured/85c85731c377ebd68ef160a6960f653d.jpg",
    className: "bluetooth-speaker-section",
    imgClass: "speaker",
    textClass: "bluetooth",
  },
  {
    name: "Laptops",
    image: "/images-featured/IMG-20260615-WA0010.jpg",
    className: "laptop-section",
    imgClass: "laptop",
    textClass: "lapp",
  },
  {
    name: "Smart Phones",
    image: "/images-featured/IMG-20260615-WA0032.jpg",
    className: "phone-section",
    imgClass: "phone",
    textClass: "telephone",
  },
  {
    name: "Smart Watches",
    image: "/images-featured/IMG-20260615-WA0034.jpg",
    className: "smartwatch-section",
    imgClass: "watch",
    textClass: "smartt",
  },
  {
    name: "Refrigerators",
    image: "/images-featured/IMG-20260616-WA0019.jpg",
    className: "fridge-section",
    imgClass: "frizzer",
    textClass: "fridger",
  },
  {
    name: "Game Consoles",
    image: "/images-featured/IMG-20260616-WA0024.jpg",
    className: "console-section",
    imgClass: "game",
    textClass: "console",
  },
  {
    name: "Headphones",
    image: "/images-featured/IMG-20260616-WA0031.jpg",
    className: "headphone-section",
    imgClass: "head",
    textClass: "headphone",
  },
];

const bestSellers = [
  {
    name: "Power Banks",
    image: "/images-featured/IMG-20260617-WA0025.jpg",
  },
  {
    name: "Routers",
    image: "/images-featured/IMG-20260617-WA0027.jpg",
  },
  {
    name: "Tablets",
    image: "/images-featured/IMG-20260617-WA0028.jpg",
  },
  {
    name: "Microwaves",
    image: "/images-featured/IMG-20260618-WA0005.jpg",
  },
  {
    name: "Air Fryers",
    image: "/images-featured/IMG-20260618-WA0010.jpg",
  },
  {
    name: "Blenders",
    image: "/images-featured/IMG-20260618-WA0000.jpg",
  },
  {
    name: "Electric Kettles",
    image: "/images-featured/IMG-20260618-WA0013.jpg",
  },
  {
    name: "Pressure Cookers",
    image: "/images-featured/IMG-20260618-WA0020.jpg",
  },
];
function Home() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const bestSellerRef = useRef(null);

  const scrollBestLeft = () => {
    bestSellerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };
  const scrollBestRight = () => {
    bestSellerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  return (
    <div className="home-container">
      <div className="home-banner">
        <div className="banner-text">
          <h1 className="headline">POWERING YOUR DIGITAL LIFESTYLE</h1>
          <p className="desc">Shop latest gadgets, accessories and tech essentials</p>
          <button className="shopnow">Shop now</button>
          <button className="explorenow">Explore now</button>
        </div>
        <img src="/images-featured/1000041314-removebg-preview.png" alt="banner" className="banner" />
      </div>

      <div className="feat-pro">
        <h1 className="pro">FEATURED PRODUCTS</h1>
        <button className="arrow left" onClick={scrollLeft}> <FaChevronLeft/> </button>
        <div className="products"
          ref = {containerRef}>
         {products.map((item, index) => (
        <div className={item.className} key={index}>
          <img className={item.imgClass} src={item.image} alt={item.name} />
          <h2 className={item.textClass}>{item.name}</h2>
          </div>
         ))}
        </div>
         <button className="arrow right" onClick={scrollRight}> <FaChevronRight/> </button>
      </div>
      
         <div className="promo">
           <div className="promo-talks">
          <h1 className="flash">FLASH SALES</h1>
          <p className="save">Save up to 30% on selected electronics</p>
          <button className="shopnow-promo">Shop Now</button>
         </div>
         </div>

         <div className="sellers">
          <h2 className="pro">Best Sellers</h2>
           <button className="arrow left" onClick={scrollBestLeft}> <FaChevronLeft/> </button>
          <div className="products" ref={bestSellerRef}>
              {bestSellers.map((item, index) => (
                <div className="product-card" key={index}>
                <img className="product-img" src={item.image} alt={item.name} />
                <h3 className="product-title">{item.name}</h3>
                </div>
              ))}
          </div>
           <button className="arrow right" onClick={scrollBestRight}> <FaChevronRight/> </button>
         </div>

    </div>
  )
}

export default Home;
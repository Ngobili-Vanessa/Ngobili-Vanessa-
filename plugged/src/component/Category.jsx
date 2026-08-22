import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Category.css";
import { useCart } from "../component/CartContext.jsx";
import { useWishlist } from "../component/WishlistContext.jsx";
import { FiHeart } from "react-icons/fi";
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

export const products = [
 {
  name: "iPhone 16 Pro",
  category: "Smartphones",
  image: "/images-featured/iphone16pro.jpeg",
  price: "₦1,850,000",
  rating: 5,
  reviews: 24,

  Processor: "Apple A18 Pro",
  RAM: "8GB",
  Storage: "128GB, 256GB, 512GB or 1TB",
  Display: "6.3-inch Super Retina XDR OLED",
  Camera: "Triple 48MP + 12MP + 12MP",
  Battery: "3,500mAh",
},
  {
    name: "Samsung Galaxy S25 Ultra",
    category: "Smartphones",
    image: "/images-featured/samsungs25ultra.jpeg",
    price: "₦1,650,000",
    rating: 5,
    reviews: 18,

    Processor: "Snapdragon 8 Gen 4",
    RAM: "12GB",
    Storage: "256GB, 512GB or 1TB",
    Display: "6.9-inch Dynamic AMOLED 2X",
    Camera: "Quad 200MP + 12MP + 10MP + 10MP",
    Battery: "5,000mAh",
  },
  {
    name: "Google Pixel 10",
    category: "Smartphones",
    image: "/images-featured/Google Pixel 10a.jpeg",
    price: "₦1,200,000",
    rating: 5,
    reviews: 24,

    Processor: "Google Tensor G5",
    RAM: "12GB",
    Storage: "128GB or 256GB",
    Display: "6.3-inch OLED",
    Camera: "48MP main, 13MP ultra-wide, 10.8MP 5x telephoto",
    Battery: "4,970mAh",
  },
  {
    name: "Xiaomi 15 Ultra",
    category: "Smartphones",
    image: "/images-featured/Xiaomi 15 Ultra.jpeg",
    price: "₦1,050,000",
    rating: 5,
    reviews: 24,

    Processor: "Snapdragon 8 Elite Gen 3",
    RAM: "16GB",
    Storage: "512GB or 1TB",
    Display: "6.73-inch WQHD+ AMOLED",
    Camera: "50MP 1-inch main, 50MP ultra-wide, 70mm 50MP telephoto",
    Battery: "5,410mAh",
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
    processor: "Qualcomm Snapdragon X Elite X1E-80-100, 12-core",
  ram: "16GB, 32GB or 64GB LPDDR5",
  storage: "512GB, 1TB or 2TB SSD",
  display: "13.4-inch FHD+ or 4K UHD+",
  graphics: "Integrated Qualcomm Adreno GPU",
  os: "Windows 11 Home or Pro"
  },
  {
    name: "HP Spectre x360",
    category: "Laptops",
    image: "/images-featured/HP Spectre x360.jpeg",
    price: "₦425,000",
    rating: 5,
    reviews: 20,
    processor: "Intel Core Ultra 5 12H or Intel Core Ultra 7 155H",
  ram: "16GB or 32GB LPDDR5",
  storage: "512GB, 1TB or 2TB SSD",
  display: "14-inch OLED touchscreen",
  graphics: "Integrated Intel Arc Graphics",
  os: "Windows 11 Home or Pro"
  },
  {
    name: "Lenovo Yoga Pro 9i",
    category: "Laptops",
    image: "/images-featured/Lenovo Yoga pro 9i.jpeg",
    price: "₦2,500,000",
    rating: 5,
    reviews: 35,
    processor: "Up to Intel Core Ultra 9 185H",
  ram: "Up to 64GB LPDDR5X",
  storage: "512GB, 1TB or 2TB SSD",
  display: "16-inch OLED",
  graphics: "Up to NVIDIA GeForce RTX 4070 Laptop GPU",
  os: "Windows 11 Home or Pro"
  },

  {
    name: "iPad Air",
    category: "Tablets",
    image: "/images-featured/ipad air.jpeg",
    price: "₦1,200,000",
    rating: 5,
    reviews: 28,
    Processor: "Apple M3 with 8-core CPU and 9-core GPU and 16-core Neural Engine",
    RAM: "8GB",
    Storage: "128GB,256GB,512GB or 1TB",
    Display: "11-inch Liquid Retina",
    Camera: "12MP Wide rear camera, 12MP Ultra Wide front camera",
    Battery: "28.93Wh, Up to 10 hours of battery life",
  },
  {
    name: "Samsung Galaxy Tab S10",
    category: "Tablets",
    image: "/images-featured/Samsung Galaxy Tab S10.jpeg",
    price: "₦1,800,000",
    rating: 5,
    reviews: 21,
    Processor: "MediaTek Dimensity 9300+, 4nm Octa-core processor",
    RAM: "12GB",
    Storage: "256GB, 512GB or 1TB",
    Display: "12.4-inch Super AMOLED",
    Camera: "13MP + 8MP rear cameras, 12MP front camera",
    Battery: "10,090mAh, Up to 14 hours of battery life",
  },
  {
    name: "Xiaomi Pad 7",
    category: "Tablets",
    image: "/images-featured/Xiaomi Pad 7 .jpeg",
    price: "₦530,000",
    rating: 5,
    reviews: 20,
    Processor: "Qualcomm Snapdragon 7+ Gen 3,4nm Octa-core processor up to 2.8GHz",
    RAM: "8GB or 12GB LPDDR5X",
    Storage: "128GB, 256GB or 512GB",
    Display: "11.2-inch Super AMOLED",
    Camera: "13MP + 8MP rear cameras, 12MP front camera",
    Battery: "8,850mAh, Up to 14 hours of battery life",
  },
  {
    name: "Lenovo Tab P12",
    category: "Tablets",
    image: "/images-featured/lenovo tab p12.jpeg",
    price: "₦568,000",
    rating: 5,
    reviews: 42,
    Processor: "MediaTek Dimensiyt 7050, octa-core -2 x Cortex-A78 at 2.6GHz",
    RAM: "4GB OR 8GB LPDDR4X",
    Storage: "128GB or 256GB",
    Display: "12.7-inch 3k touchscren, 2944 x 1840 resolution, 400 nits",
    Camera: "13MP rear camera and 8MP front camera",
    Battery: "10,200mAh, supporting 30W charging",
  },
  {
    name: "Anker 20,000mAh Power Bank",
    category: "Accessories",
    image: "/images-featured/anker 20000mAH powerbank.jpeg",
    price: "₦46,000",
    rating: 5,
    reviews: 62,
    Compatability: "Designed for charging smartphones, tablets, laptops, cameras and other USB-powered devices",
    Connectivity: "Uses USB charging ports, generally including USB-C and USB-A",
    Power: "Provides high-output charging",
    Battery: "200,000mAh",
  },
  {
    name: "UGREEN USB-C Hub",
    category: "Accessories",
    image: "/images-featured/ugreen usb-c hub.jpeg",
    price: "₦45,000",
    rating: 5,
    reviews: 32,
    Compatability: "USB-C laptops, tablets and smartphones that support USB-C peripherals/video output",
    Connectivity: "Provides USB-C, USB-A and HDMI",
    Power: "Many models support USB-C PD",
    Battery: "Draws power from the connected devices",
  },
  {
    name: "Logitech MX Keys Keyboard",
    category: "Accessories",
    image: "/images-featured/logitech mx keys keyboard.jpeg",
    price: "₦130,000",
    rating: 5,
    reviews: 21,
    Compatability: "Compatible with Windows, macOS, Linux, IOS, and Android",
    Connectivity: "Bluetooth low energy",
    Power: "Charges through USB-C",
    Battery: "Built rechargeable battery",
  },
  {
    name: "Apple MagSafe Charger",
    category: "Accessories",
    image: "/images-featured/apple magsafe charger.jpeg",
    price: "₦25,000",
    rating: 5,
    reviews: 75,
    Compatability: "Designed primarily for MagSafe-compatible iPhones, while also supporting compatible Qi/Qi2 wirless-charging devices",
    Connectivity: "Magnetic wireless charging devices",
    Power: "Up to 2W with compatible newer iPhone Models",
  },

  {
    name: "AirPods Pro 2",
    category: "Audio",
    image: "/images-featured/Apple Airpods Pro.jpeg",
    price: "₦460,000",
    rating: 5,
    reviews: 23,
    Type: "True wireless in-ear earbuds",
    Connectivity: "Bluetooth 5.3 wireless technology",
    Battery: "Up to 6 hours on a single charge",
    Driver: "Custom high-excursion AApple driver",
  },
  {
    name: "Sony WH-1000XM6",
    category: "Audio",
    image: "/images-featured/sony wh-1000xm6.jpeg",
    price: "₦550,000",
    rating: 5,
    reviews: 12,
      Type: "Wireles over-ear headdphones",
    Connectivity: "Bluetooth 5.3, 3.5mm",
    Battery: "Up to 30 hours with noisecancellation ON or for 40 hours with noise cancellation OFF",
    Driver: "30mm 1.15-inch driver unit",
  },
  {
    name: "JBL Flip 7",
    category: "Audio",
    image: "/images-featured/JBL Flip 7.jpeg",
    price: "₦220,000",
    rating: 5,
    reviews: 56,
      Type: "Portable bluetooth speaker",
    Connectivity: "Bluetooth 5.4, including Auracast support",
    Battery: "Up to 14 hours",
    Driver: "45 x 80mm woofer andd 16mm tweeter",
  },
  {
    name: "Beats Studio Pro",
    category: "Audio",
    image: "/images-featured/beats studio.jpeg",
    price: "₦380,000",
    rating: 5,
    reviews: 46,
      Type: "Wireeless over-ear headphones",
    Connectivity: "Class 1 Bluetooth, 3.5mm analog connection",
    Battery: "Up to 40 hours with ANC/Transparency off",
    Driver: "40mm custom acoustic driver",
  },

  {
    name: "Apple Watch Series 11",
    category: "Smartwatch",
    image: "/images-featured/Apple Watch Series 11.jpeg",
    price: "₦600,000",
    rating: 5,
    reviews: 73,
    Display: "Retina display with wide-angle OLED and LTPO3",
    Battery: "Up to 24hours of normal use",
    Connectivity: "Bluetooth 5.3, 2.4/5GHz Wi-Fi, GPS",
    Compatability: "Designed to work with compatible iPhones",
  },
  {
    name: "Samsung Galaxy Watch Ultra",
    category: "Smartwatch",
    image: "/images-featured/Samsung Galaxy Watch Ultra.jpeg",
    price: "₦700,000",
    rating: 5,
    reviews: 25,
      Display: "1.5-inch Super AMOLED,480 x 480 resolution",
    Battery: "Up to 80 hours with AOD off, 60 hours with AOD on",
    Connectivity: "Bluetooth 5.3, Wi-fi, NFC, GPS/Galileo/Glonass/BeiDou and 4G LTE through eSIM",
    Compatability: "Android smartphones ",
  },
  {
    name: "Google Pixel Watch 3",
    category: "Smartwatch",
    image: "/images-featured/google pixel watch 3.jpeg",
    price: "₦630,000",
    rating: 5,
    reviews: 15,
      Display: "Actua AMOLED LTPO display with 320 ppi, up to 2,000 nits",
    Battery: "Up to 24 hours with Always on Display",
    Connectivity: "Bluetooth 5.3, Wi-Fi, NFC and GPS",
    Compatability: "Android 10 or newer",
  },
  {
    name: "Garmin Venu 3",
    category: "Smartwatch",
    image: "/images-featured/garmin venu 3.jpeg",
    price: "₦1,200,000",
    rating: 5,
    reviews: 34,
      Display: "1.4-inch AMOLED touchscreen, 454 x 454 resolution with optional Always on mode",
    Battery: "Up to an impessive 14 days in smartwatch mode",
    Connectivity: "Bluetooth, Wi-Fi and ANT+",
    Compatability: "Both iPhones and android",
  },

  {
    name: "PlayStation 5",
    category: "Gaming",
    image: "/images-featured/PlayStation 5.jpeg",
    price: "₦900,000",
    rating: 5,
    reviews: 10,
    Compatability: "Supports backward compatability with the vast majority of PS4 games",
    Connectivity: "Wi-Fi 6,Bluetooth 5.1, HDMI 2.1",
    Battery: "No internal battery- it is powered from an A outtlet ",
    Response: "Supports 120Hz outputm, VRR and ALLM", 
  },
  {
    name: "Xbox Series X",
    category: "Gaming",
    image: "/images-featured/Xbox Series X.jpeg",
    price: "₦820,000",
    rating: 5,
    reviews: 52,
     Compatability: "Xbox Series X/S games, Xbox One games and selected Xbox 360/Original Xbox titles",
    Connectivity: "Wi-Fi, Gigabit Ethernet,HDMI 2.1 USB ports and Xbox Wireless connectivity",
    Battery: "requires AC power",
    Response: "For low-latency gaming and supports up to 120 FPS, with HDMI Variable Refresh Rate and Auto Low latency Mode", 
  },
  {
    name: "Nintendo Switch 2",
    category: "Gaming",
    image: "/images-featured/Nintendo switch2.jpeg",
    price: "₦870,000",
    rating: 5,
    reviews: 43,
    Compatibility: "Plays Nintendo Switch 2 games and compatible Nintendo Switch games.",
    Connectivity: "Wi-Fi 6, Bluetooth, USB-C and wired LAN through the dock.",
    Battery: "Approximately 2-6.5 hours, depending on the game and usage.",
    Response: "The 7.9-inch display supports VRR up to 120Hz. In TV mode, it can support up to 120 FPS at selected resolutions.",
  },
  {
    name: "ASUS ROG Ally X",
    category: "Gaming",
    image: "/images-featured/ASUS ROG Ally X.jpeg",
    price: "₦1,600,000",
    rating: 5,
    reviews: 61,
    Compatibility: "Windows 11 PC gaming, including Steam, Xbox Game Pass, Epic Games Store and other PC platforms.",
    Connectivity: "Wi-Fi 6E, Bluetooth 5.4, USB-C/USB4 and a 3.5mm audio jack.",
    Battery: "80Wh battery; ASUS rates it at more than 2.7 hours for heavy AAA gaming and up to 14.5 hours for Netflix video playback.",
    Response: "7ms response time with a 120Hz refresh rate and AMD FreeSync Premium.",
  },

  {
    name: "Dyson V15 Vacuum",
    category: "Home Appliances",
    image: "/images-featured/Dyson V15 Vacuum.jpeg",
    price: "₦1,900,000",
    rating: 5,
    reviews: 60,
    Power: "230W motor. ",
    Capacity: "0.76L dust bin.", 
     Dimensions: "Approximately 1260 × 250 × 266mm.",
     Rating: "Dyson does not normally provide a conventional household-appliance energy label for the V15 Detect.",
  },
  {
    name: "LG Dual Inverter AC",
    category: "Home Appliances",
    image: "/images-featured/LG Dual Inverter ac.jpeg ",
    price: "₦1,200,000",
    rating: 5,
    reviews: 90,
    Power: "Depends on the model and cooling capacity. LG Dual Inverter ACs commonly range from approximately 1HP to 2HP+.",
    Capacity: "Cooling capacity varies according to the BTU/HP rating. Common residential models range from approximately 9,000 to 24,000 BTU.",
    Dimensions: "Varies depending on the indoor/outdoor unit and model.",
    Rating: "Designed for high energy efficiency through LG’s Dual Inverter Compressor technology. Exact energy rating depends on the model and country.",
  },
  {
    name: "Philips Air Purifier",
    category: "Home Appliances",
    image: "/images-featured/Philips Air Purifier.jpeg ",
    price: "₦900,000",
    rating: 5,
    reviews: 80,
    Power: "Depends on the model; Philips home air purifiers generally use relatively low electrical power.",
    Capacity: "Rather than a physical capacity, air purifiers are normally rated by CADR (Clean Air Delivery Rate). Depending on the model, CADR can range from around 200 m³/h to over 500 m³/h. ",
    Dimensions: "Varies by model.",
    Rating: "Generally designed for low energy consumption, particularly when operating in automatic/sleep modes.",
  },
  {
    name: "Xiaomi Robot Vacuum",
    category: "Home Appliances",
    image: "/images-featured/Xiaomi Robot Vacuum.jpeg ",
    price: "₦950,000",
    rating: 5,
    reviews: 70,
    Power: "Varies significantly by model; higher-end Xiaomi robot vacuums can provide very high suction power.",
    Capacity: "Depends on the model. Some include separate dust and water tanks, while premium models may have an automatic-emptying/cleaning station.",
    Dimensions: "Varies according to the robot and charging/cleaning station.",
    Rating: "Xiaomi does not generally use a simple household-style energy rating across its robot vacuum range.",
  },

  {
    name: "Samsung Neo QLED 4K TV",
    category: "TV's & Entertainment",
    image: "/images-featured/samsung neo.jpeg ",
    price: "₦4,900,000",
    rating: 5,
    reviews: 96,
    Power: "Varies significantly by model; higher-end Xiaomi robot vacuums can provide very high suction power.",
    Capacity: "Depends on the model. Some include separate dust and water tanks, while premium models may have an automatic-emptying/cleaning station.",
     Dimensions: "Varies according to the robot and charging/cleaning station.",
    Rating: "Xiaomi does not generally use a simple household-style energy rating across its robot vacuum range.",
  },
  {
    name: "LG OLED evo TV",
    category: "TV's & Entertainment",
    image: "/images-featured/LG OLED evo.jpeg ",
    price: "₦4,200,000",
    rating: 5,
    reviews: 85,
    Display: "OLED evo, with individually self-lit pixels for deep blacks and high contrast.",
    Resolution: "4K Ultra HD — 3,840 × 2,160 pixels.",
    Size: "Depending on the model, LG OLED evo TVs are available from around 42” up to 97”.",
    Connectivity: "Wi-Fi, Bluetooth 5.3, Ethernet, 4 HDMI inputs, USB and eARC.",
  },
  {
    name: "Sony BRAVIA 9",
    category: "TV's & Entertainment",
    image: "/images-featured/sony bravia 9.jpeg ",
    price: "₦3,000,000",
    rating: 5,
    reviews: 74,
    Display: "Premium Mini LED display with Sony’s XR Backlight Master Drive technology.",
    Resolution: "4K Ultra HD — 3,840 × 2,160 pixels.",
    Size: "Sony lists the BRAVIA 9 in 75-inch and 85-inch versions for the Nigerian market.",
    Connectivity: "Wi-Fi, Bluetooth, HDMI including HDMI 2.1, USB and Ethernet.",
  },
  {
    name: "Amazon Fire TV Stick 4K Max",
    category: "TV's & Entertainment",
    image: "/images-featured/Amazon Fire.jpeg ",
    price: "₦100,000",
    rating: 5,
    reviews: 69,
    Display: "No built-in display; outputs video to a compatible TV.",
    Resolution: "Supports up to 4K Ultra HD at 60fps.",
    Size: "No screen — works with compatible TVs of different sizes.",
    Connectivity: "Wi-Fi 6E, Bluetooth 5.2, HDMI 2.1 and USB-C power. Ethernet can be added with an external adapter.",
  },

  {
    name: "Canon EOS R10",
    category: "Cameras",
    image: "/images-featured/canon eos .jpeg",
    price: "₦2,100,000",
    rating: 5,
    reviews: 58,
    Resolution: "24.2 megapixels.",
    Sensor: "APS-C CMOS sensor measuring approximately 22.3 × 14.9mm.",
    Lens: "Canon RF/RF-S mount, with EF/EF-S lenses supported using an EF-EOS R adapter.",
    Video: "4K at 30fps, oversampled from 6K, and 4K at 60fps with a crop; Full HD up to 120fps.",
    Battery: "Approximately 430 shots using the LCD or 260 shots using the viewfinder under CIPA testing.",
  },
  {
    name: "Sony Alpha a7 IV",
    category: "Cameras",
    image: "/images-featured/Sony Alpha 7 IV.jpeg",
    price: "₦3,200,000",
    rating: 5,
    reviews: 47,
    Resolution: "33 megapixels effective.",
    Sensor: "35mm full-frame Exmor R CMOS, 35.9 × 23.9mm.",
    Lens: "Sony E-mount, supporting interchangeable Sony and compatible E-mount lenses.",
    Video: "Up to 4K 60p, with 10-bit 4:2:2 recording and XAVC formats.",
    Battery: "Approximately 580 shots using the LCD or 520 shots using the electronic viewfinder.",
  },
  {
    name: "Nikon Z6 III",
    category: "Cameras",
    image: "/images-featured/Nikon Z6iii.jpeg",
    price: "₦2,900,000",
    rating: 5,
    reviews: 63,
    Resolution: "24.5 megapixels.",
    Sensor: "Full-frame FX-format partially stacked CMOS, measuring 35.9 × 23.9mm.",
    Lens: "Nikon Z mount, supporting interchangeable Z-mount lenses.",
    Video: "Up to 6K/60p internal RAW, 5.4K/60p and 4K/120p, making it one of the strongest video options here.",
    Battery: "Approximately 410 shots using the monitor or 380 shots using the viewfinder. Video recording is approximately 100 minutes per charge under Nikon’s stated conditions.",
  },
  {
    name: "Fujifilm X-T5",
    category: "Cameras",
    image: "/images-featured/fujifilm.jpeg ",
    price: "₦3,000,000",
    rating: 5,
    reviews: 52,
    Resolution: "40.2 megapixels.",
    Sensor: "APS-C X-Trans CMOS 5 HR, measuring 23.5 × 15.7mm.",
    Lens: "Fujifilm X-mount, with a wide range of interchangeable XF/XC lenses.",
    Video: "6.2K at 30p, 4K up to 60p and Full HD up to 240p.",
    Battery: "Approximately 580 shots in Normal mode or 740 shots in Economy mode.",

  },

  {
    name: "TP-Link Archer AX73",
    category: "Networking",
    image: "/images-featured/Tp-link Ax300.jpeg",
    price: "₦298,000",
    rating: 5,
    reviews: 41,
    Standard: "Wi-Fi 6 (802.11ax).",
    Speed: "Up to 5,400 Mbps — 4,804 Mbps on 5GHz and 574 Mbps on 2.4GHz. ",
    Ports: "1× Gigabit WAN, 4× Gigabit LAN and 1× USB 3.0.",
    Range: "Designed to cover approximately a 3-bedroom house, using six high-performance antennas, beamforming and a high-power FEM.",
  },
  {
    name: "ASUS RT-AX88U Pro",
    category: "Networking",
    image: "/images-featured/asus rt.jpeg",
    price: "₦500,000",
    rating: 5,
    reviews: 30,
    Standard: "Wi-Fi 6 (802.11ax).",
    Speed: "AX6000, with up to 4,804 Mbps on 5GHz + 1,148 Mbps on 2.4GHz.",
    Ports: "1× 2.5Gbps WAN, 1× 2.5Gbps LAN, 4× Gigabit LAN and 1× USB 3.2 Gen 1.",
    Range: "Designed for high-performance coverage in larger homes; actual range depends on building layout and interference.",
  },
  {
    name: "NETGEAR Nighthawk AX5400",
    category: "Networking",
    image: "/images-featured/netgear (2).jpeg",
    price: "₦385,000",
    rating: 5,
    reviews: 20,
    Standard: "Wi-Fi 6 (802.11ax) dual-band.",
    Speed: "Up to 5.4Gbps (AX5400).",
    Ports: "5 Gigabit Ethernet ports — 1 WAN + 4 LAN — plus 1× USB 3.0.",
    Range: "Uses four high-performance antennas and Beamforming+ to improve coverage and reliability.",
  },
  {
    name: "TP-Link Deco X55",
    category: "Networking",
    image: "/images-featured/tp link deco.jpeg",
    price: "₦780,000",
    rating: 5,
    reviews: 10,
    Standard: "Wi-Fi 6 (802.11ax).",
    Speed: "AX3000 — up to 3.0Gbps, with 2,402 Mbps on 5GHz and 574 Mbps on 2.4GHz.",
    Ports: "3× Gigabit ports per Deco unit, which can automatically function as WAN or LAN.",
    Range: "A 3-pack can cover up to 6,500 sq. ft. according to TP-Link.",
  },

  {
    name: "Ninja Air Fryer",
    category: "Kitchen Appliances",
    image: "/images-featured/Ninja Food air.jpeg ",
    price: "₦900,000",
    rating: 5,
    reviews: 74,
     Power: "Around 1,750W for common 5.2L/5.5-qt models.",
    Capacity: "Approximately 5.2L (5.5 qt).",
    Dimensions: "Approximately 36 × 25 × 32cm, depending on the specific model.",
    Material: "Cooking basket and crisper plate with a non-stick coating.",

  },
  {
    name: "NutriBullet Pro Blender",
    category: "Kitchen Appliances",
    image: "/images-featured/NutriBullet Blender.jpeg ",
    price: "₦135,000",
    rating: 5,
    reviews: 45,
 Power: "900W motor.",
    Capacity: "700ml / 24 oz cup.",
    Dimensions: "Approximately 14 × 14 × 35cm, depending on the model.",
    Material: "BPA-free blending cups with a stainless-steel extraction blade.",
 
     },
  {
    name: "Philips Electric Kettle",
    category: "Kitchen Appliances",
    image: "/images-featured/philips electric kettle.jpeg ",
    price: "₦65,000",
    rating: 5,
    reviews: 31,
      Power: "Approximately 2,200W.",
    Capacity: "1.7L on many Philips models.",
    Dimensions: "Varies by model; approximately 25 × 23 × 25cm for common 1.7L versions.",
    Material: "Depending on the model, stainless steel or food-grade plastic.",
 
    },
  {
    name: "Instant Pot Duo",
    category: "Kitchen Appliances",
    image: "/images-featured/Instant Pot Duo.jpeg",
    price: "₦280,000",
    rating: 5,
    reviews: 10,
      Power: "Approximately 1,000W for the 6-quart/5.7L model.",
     Capacity: "5.7L / 6 qt.",
      Dimensions: "Approximately 33 × 32 × 32cm. ",
     Material: "Stainless-steel inner cooking pot.",

   },

  {
    name: "HP LaserJet Pro Printer",
    category: "Office Appliances",
    image: "/images-featured/HP LaserJet Pro.jpeg",
    price: "₦680,000",
    rating: 5,
    reviews: 34,
    Power: "Approximately 480W while printing on representative LaserJet Pro models.",
    Capacity: "Paper tray capacity can reach around 250 sheets, depending on the model. ",
    Connectivity: "Wi-Fi, Ethernet and USB are available on many LaserJet Pro models. ",
    Dimensions: "Varies considerably between LaserJet Pro models.",
    },
  {
    name: "Epson EcoTank L4260",
    category: "Office Appliances",
    image: "/images-featured/epson.jpeg",
    price: "₦500,000",
    rating: 5,
    reviews: 12,
    Power: "Approximately 12W during printing.",
     Capacity: "Rear paper feed holds approximately 100 sheets.",
      Connectivity: "Wi-Fi, Wi-Fi Direct and USB. ",
    Dimensions: "375 × 347 × 187mm.",
  },
  {
    name: "Canon PIXMA G3430",
    category: "Office Appliances",
    image: "/images-featured/Canon PIXMA.jpeg",
    price: "₦300,000",
    rating: 5,
    reviews: 64,
    Power: "Approximately 16W while printing.",
     Capacity: "Rear paper tray holds approximately 100 sheets.",
      Connectivity: "Wi-Fi and USB.",
    Dimensions: "Approximately 416 × 337 × 177mm.",
  },
  {
    name: "Fellowes Paper Shredder",
    category: "Office Appliances",
    image: "/images-featured/Fellowes Powershred.jpeg",
    price: "₦670,000",
    rating: 5,
    reviews: 34,
    Power: "Varies according to the model and motor size.",
    Capacity: "Depends on the model; common office shredders can handle around 8–20+ sheets per pass, with wastebaskets ranging from small personal sizes to large office capacities.",
     Connectivity: "None — shredders generally operate independently without Wi-Fi or Bluetooth.",
    Dimensions: "Varies by model and shredder capacity.",
  },
];

function Category() {
  const {
    addToCart,
    cartMessage,
    closeCartMessage,
  } = useCart();
const { wishlist } = useWishlist();

const { toggleWishlist, isWishlisted } = useWishlist();
  const location = useLocation();

const [selectedCategory, setSelectedCategory] = useState(
  location.state?.selectedCategory || "All Products"
);
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
      <button
  type="button"
  className={`wishlist-btn ${
    isWishlisted(product.name) ? "wishlisted" : ""
  }`}
  onClick={() => toggleWishlist(product)}
>
  <FiHeart
    fill={isWishlisted(product.name) ? "currentColor" : "none"}
  />
</button>

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
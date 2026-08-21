import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Category from "./component/Category";
import Search from "./component/Search";
import Cart from "./component/Cart";
import Profile from "./component/Profile";
import Checkout from "./component/Checkout.jsx";
import OrderSuccess from "./component/OrderSuccess.jsx";
import ProductDetails from "./component/ProductDetails.jsx";
import Settings from "./component/Settings";

import MainLayout from "./component/MainLayout";
import AuthLayout from "./component/AuthLayout";

import "./component/Home.css";
import "./component/Contact.css";
import "./component/Cart.css";
import "./component/Search.css";
import "./component/About.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AuthLayout />}>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>


        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/product/:productName"
            element={<ProductDetails />}
          />
          <Route
            path="/order-success"
            element={<OrderSuccess />}
          />
          <Route path="/settings" element={<Settings />} />
        </Route>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
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
import MainLayout from "./component/MainLayout";
import AuthLayout from "./component/AuthLayout";
import "./component/Home.css";
import "./component/Contact.css";
import "./component/Cart.css";
import "./component/Search.css";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>

        <Route path="/" element={<MainLayout />}>

          <Route path="home" element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<Search />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Profile" element={<Profile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
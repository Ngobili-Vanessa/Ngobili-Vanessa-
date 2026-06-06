import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from "./component/Signup";
import './component/Signup.css';
import Signin from "./component/Signin";
import './component/Signin.css';
import Home from "./component/Home";
import './component/Home.css';
import Header from "./component/Header";
import './component/Header.css';
import Category from "./component/Category";
import About from "./component/About";
import Contact from "./component/Contact";
import Search from "./component/Search";
import Cart from "./component/Cart";
import Profile from "./component/Profile";
import Footer from './component/Footer';
import './component/Search.css';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

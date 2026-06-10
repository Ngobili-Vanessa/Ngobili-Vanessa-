import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>PLUGGED</h2>
      </div>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/category">Category</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

   <div className="icons">
        <Link to="/search">
          <FaSearch />
        </Link>

        <Link to="/cart">
          <FaShoppingCart />
        </Link>

        <Link to="/profile">
          <FaUser /> 
        </Link>
      </div>
    </header>
  );
}

export default Header;
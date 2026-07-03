import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div className="search-container">
      <h1 className="search-title">Search Products</h1>
      <div className="search-box">
        <FiSearch className="search-icon" />
        <input
         type="text"
         placeholder="Search for products...." />
      </div>
      <div className="search-empty">
        <h2>Find Your Perfect Product</h2>
        <p>Search by product name, category or brand.</p>
      </div>
    </div>
  );
};

export default Search;
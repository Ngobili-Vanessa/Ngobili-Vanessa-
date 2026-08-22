import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((currentItems) => {
      const alreadyExists = currentItems.some(
        (item) => item.name === product.name
      );

      if (alreadyExists) {
        return currentItems;
      }

      return [...currentItems, product];
    });
  };

  const removeFromWishlist = (productName) => {
    setWishlist((currentItems) =>
      currentItems.filter((item) => item.name !== productName)
    );
  };

  const isWishlisted = (productName) => {
    return wishlist.some(
      (item) => item.name === productName
    );
  };

  const toggleWishlist = (product) => {
    if (isWishlisted(product.name)) {
      removeFromWishlist(product.name);
    } else {
      addToWishlist(product);
    }
  };

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount,
        addToWishlist,
        removeFromWishlist,
        isWishlisted,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
import { createContext, useContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  // Shopping Cart - Increment Quantity
  const [count, setCount] = useState(0);

  //Shopping Cart - Add Products to Cart
  const [cartProducts, setCartProducts] = useState([]);
  
  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  function openProductDetail(){ setIsProductDetailOpen(true)}
  function closeProductDetail (){ setIsProductDetailOpen(false)}
  
  // Produc Detail - Show Product

  const [ productToShow, setProductToShow ] = useState({})

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      setIsProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
    }} >
      {children}
    </ShoppingCartContext.Provider>
  )
};

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

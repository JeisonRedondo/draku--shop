import { createContext, useContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  function openProductDetail(){ setIsProductDetailOpen(true)}
  function closeProductDetail (){ setIsProductDetailOpen(false)}
  

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      setIsProductDetailOpen,
    }} >
      {children}
    </ShoppingCartContext.Provider>
  )
};

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  const [count, setCount] = useState(0);

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount
    }} >
      {children}
    </ShoppingCartContext.Provider>
  )
};

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

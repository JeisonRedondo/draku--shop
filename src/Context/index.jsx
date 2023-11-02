import { createContext, useContext, useState, useEffect } from "react";
import { API_URL } from "../API";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  // Shopping Cart - Increment Quantity
  const [count, setCount] = useState(0);

  //Shopping Cart - Add Products to Cart
  const [cartProducts, setCartProducts] = useState([]);

  //Shopping Cart- Order
  const [order, setOrder] = useState([]);

  // Get <Products  
  const [items, setItems] = useState(null);

  const [filteredItems, setFilteredItems] = useState(null);

  //Get products by title
  const [searchByTitle, setSearchByTitle] = useState("");

  useEffect(() => {

    const fetchProps = async () => {
      try {

        const response = await fetch(`${API_URL}/products`);
        const props = await response.json();
        setItems(props)

      } catch (error) {
        console.error(`Ah ocurrido un error:${error}`)
      }
    }
    fetchProps();
  }, []);

  function filteredItemsByTitle(items, searchByTitle) {
    let filteredArray = items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    return filteredArray;
  };


  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  function openProductDetail() { setIsProductDetailOpen(true) }
  function closeProductDetail() { setIsProductDetailOpen(false) }

  // Produc Detail - Show Product

  const [productToShow, setProductToShow] = useState({})

  // CheckoutSideMenu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  function openCheckoutSideMenu() { setIsCheckoutSideMenuOpen(true) }
  function closeCheckoutSideMenu() { setIsCheckoutSideMenuOpen(false) }

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
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItemsByTitle,
    }} >
      {children}
    </ShoppingCartContext.Provider>
  )
};

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

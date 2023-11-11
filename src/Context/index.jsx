import { createContext, useContext, useState, useEffect } from "react";
import { API_URL } from "../API";
import { Storage } from "../utils/storage";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  const [view, setView] = useState('user-info');

  //Account
  const [account, setAccount] = useState(Storage.getItem("account")?.signOut);

  //Sign out
  const [signOut, setSignOut] = useState(true);
  Storage.setItem('sign-out',true);

  // Shopping Cart - Increment Quantity
  const [count, setCount] = useState(0);

  //Shopping Cart - Add Products to Cart
  const [cartProducts, setCartProducts] = useState([]);

  //Shopping Cart- Order
  const [order, setOrder] = useState([]);

  // Get Products
  const [items, setItems] = useState(null);

  //Get products by title
  const [searchByTitle, setSearchByTitle] = useState("");

  // Call to API fakestore.api
  useEffect(() => {
    const fetchProps = async () => {
      try {
        const response = await fetch(`${API_URL}/products`);
        const props = await response.json();
        setItems(props);
      } catch (error) {
        console.error(`Ah ocurrido un error:${error}`);
      }
    };
    fetchProps();
  }, []);

  //Handle SignOut
  function handleSignOut() {
    const stringifiedSignOut = JSON.stringify(!signOut);
    localStorage.setItem("sign-out", stringifiedSignOut);
    setSignOut(!signOut);
  }

  function filteredItemsByTitle(items, searchByTitle) {
    let filteredArray = items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase()),
    );
    return filteredArray;
  }

  function filteredItemsByCategory(items, category) {
    let filteredArray = items?.filter(
      (item) => item.category.toLowerCase() === category,
    );
    return filteredArray;
  }

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  function openProductDetail() {
    setIsProductDetailOpen(true);
  }
  function closeProductDetail() {
    setIsProductDetailOpen(false);
  }

  // Produc Detail - Show Product
  const [productToShow, setProductToShow] = useState({});

  // CheckoutSideMenu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  function openCheckoutSideMenu() {
    setIsCheckoutSideMenuOpen(true);
  }
  function closeCheckoutSideMenu() {
    setIsCheckoutSideMenuOpen(false);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
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
        filteredItemsByCategory,
        account,
        setAccount,
        signOut,
        setSignOut,
        handleSignOut,
        view,
        setView,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils/totalPrice.js";
import { dateTime } from "../../utils/dateTime.js";

export function CheckoutSideMenu() {

  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, setCartProducts, cartProducts, count, setCount, setOrder, order } = useShoppingCartContext();

  let dateOfCheckout = dateTime();

  function handleCheckout() {
    const orderToAdd = {
      date: dateOfCheckout,
      products: cartProducts,
      totalProducts: count,
      totalPrice: totalPrice(cartProducts)
    };

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setCount(0);
  };

  return (

    <aside
      className={`top-[50px] right-0 bottom-0 w-[360px] h-[calc(100vh-60px)] ${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed  border border-black rounded-lg bg-white `}
    >
      <div className="flex justify-between items-center p-2">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="w-6 h-6 text-black cursor-pointer"
          onClick={() => {
            closeCheckoutSideMenu()
          }}
        ></XMarkIcon>

      </div>
      <div className="px-4 overflow-y-scroll flex-1">
        {
          cartProducts.map((product) => (
            <OrderCard key={product.id} {...product} />
          ))
        }
      </div>
      <div className="px-4 mb-3">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">${totalPrice(cartProducts)}</span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="bg-black w-full py-3 text-white rounded-lg"
            onClick={() => handleCheckout()}
          >Checkout</button>
        </Link>
      </div>
    </aside>
  )
};

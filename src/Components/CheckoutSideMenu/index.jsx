import { XMarkIcon } from "@heroicons/react/24/solid";
import { useShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";

export function CheckoutSideMenu() {

    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, setCartProducts, cartProducts, count, setOrder, order } = useShoppingCartContext();

    function handleCheckout() {
        const orderToAdd = {
            date: '01.02.23',
            products: cartProducts,
            totalProducts: count,
            totalPrice: totalPrice(cartProducts)
        };

        setOrder([...order, orderToAdd]);
        setCartProducts([]);
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
                <button
                    className="bg-black w-full py-3 text-white rounded-lg"
                    onClick={() => handleCheckout()}
                >Checkout</button>
            </div>
        </aside>
    )
};

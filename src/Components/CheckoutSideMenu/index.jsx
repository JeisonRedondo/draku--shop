import { XMarkIcon } from "@heroicons/react/24/solid";
import { useShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";

export function CheckoutSideMenu() {

    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } = useShoppingCartContext();

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
            <div className="px-6">
                {
                    cartProducts.map((product) => (
                        <OrderCard key={product.id} {...product} />
                    ))
                }
            </div>
        </aside>
    )
};

import { useShoppingCartContext } from "../../Context";

export function OrdersCard(props) {

    const { totalPrice, totalProducts } = props;

    const { cartProducts, setCartProducts, setCount, count } = useShoppingCartContext();

    return (
        <div className="flex justify-between items-center mb-3 border border-black">
           <p>
            <span>01.02.2023</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
           </p>
           <p></p>
        </div>
    )
};
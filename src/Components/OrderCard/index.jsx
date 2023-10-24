import { XMarkIcon } from "@heroicons/react/24/solid";
import { useShoppingCartContext } from "../../Context";

export function OrderCard({id, title, image, price, quantity }) {

    const {cartProducts, setCartProducts } = useShoppingCartContext();

    function increasedProducts (){
        const increasedProducts = cartProducts.findIndex((item)=> item.id == id);
        const newCartProducts = [...cartProducts]
        newCartProducts[increasedProducts].quantity++
        
        setCartProducts(newCartProducts);

    };

    function decreasedProducts (){
        const decreasedProducts = cartProducts.findIndex((item)=> item.id == id);
        const newCartProducts = [...cartProducts]
        newCartProducts[decreasedProducts].quantity>1?newCartProducts[decreasedProducts].quantity--:false;
        setCartProducts(newCartProducts);

    }

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img
                        className="w-full h-full rounded-lg object-cover"
                        src={image}
                        alt={title} />
                </figure>
                <p className="text-sm font-light ">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <div>
                    <button
                        onClick={()=> increasedProducts()}
                    >+</button>
                    <p>{quantity}</p>
                    <button
                    onClick={()=> decreasedProducts()}
                    >-</button>
                </div>
                <p className="text-lg font-medium">{price}</p>
                <XMarkIcon
                    className="w-6 h-6 text-black cursor-pointer"

                ></XMarkIcon>
            </div>
        </div>
    )
};
import { TrashIcon } from "@heroicons/react/24/solid";
import { useShoppingCartContext } from "../../Context";
import { useEffect } from "react";


export function OrderCard(props) {

    const {id, title, image, price, quantity } = props;

    const {cartProducts, setCartProducts, setCount, count} = useShoppingCartContext();

    function increasedProducts (){
        const increasedProducts = cartProducts.findIndex((item)=> item.id == id);
        const newCartProducts = [...cartProducts]
        newCartProducts[increasedProducts].quantity++
        
        setCartProducts(newCartProducts);
        setCount(count + 1);
    };

    function decreasedProducts (){
        const decreasedProducts = cartProducts.findIndex((item)=> item.id == id);
        const newCartProducts = [...cartProducts]
        newCartProducts[decreasedProducts].quantity>1?newCartProducts[decreasedProducts].quantity--:false;
        newCartProducts[decreasedProducts].quantity>=1?setCount(count - 1):false;
        setCartProducts(newCartProducts);
    };

    function deleteProductsOfCart (){
        const filteredProducts = cartProducts.filter((product) => product.id != id);
        setCartProducts(filteredProducts);
        setCount(count - 1);
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
                <p className="text-sm font-light line-clamp-2">{title}</p>
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
                <TrashIcon
                    className="w-6 h-6 text-black cursor-pointer"
                    onClick={()=>deleteProductsOfCart()}
                ></TrashIcon>
            </div>
        </div>
    )
};
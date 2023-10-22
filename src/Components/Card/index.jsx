import { PlusIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import { useShoppingCartContext } from "../../Context";

function Card({ title, category, image, price, description }) {

  const { 
    setCount, 
    count, 
    openProductDetail, 
    setProductToShow,
    setCartProducts,
    cartProducts, 
  } = useShoppingCartContext();

  function showProduct(productDetail) {
    openProductDetail();
    setProductToShow(productDetail);
  };

  function addProductsToCart (productData){
    setCartProducts([...cartProducts,productData]);
    console.log("Show Cart: ",cartProducts);
  };

  return (

    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => {
        showProduct({ title, category, image, price, description })
      }
      }
    >
      <figure className="relative mb-3 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">{category}</span>
        <img
          className="w-ful h-full object-cover rounded-lg max-h-96"
          src={image}
          alt={description} />
        <button
          className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1 bg-green-100 hover:bg-purple-700"
          onClick={(event) => {
            event.stopPropagation();
            setCount(count + 1);
            addProductsToCart({ title, category, image, price, description });
          }}
        ><PlusIcon
          className="h-6 w-6 text-black"
        ></PlusIcon></button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light truncate">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>

  )
};

export { Card };

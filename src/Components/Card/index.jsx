import { PlusIcon } from '@heroicons/react/24/solid';
import { CheckIcon } from '@heroicons/react/24/solid';
import { useShoppingCartContext } from "../../Context";


function Card(props) {

  const { id, title, category, image, price, description } = props;

  const {
    setCount,
    count,
    openProductDetail,
    setProductToShow,
    setCartProducts,
    cartProducts,
    openCheckoutSideMenu,
  } = useShoppingCartContext();

  function showProduct(productDetail) {
    openProductDetail();
    setProductToShow(productDetail);
  };

  function addProductsToCart(event, productData) {

    event.stopPropagation();

    setCount(count + 1);
    setCartProducts([...cartProducts,{ ...productData,quantity:1}]);

    openCheckoutSideMenu();
  };

  

  function renderIcon() {
    const isInCart = cartProducts.some(product => product.id === id);

    return (
      isInCart ?
        (
          <button
            className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1 bg-black hover:bg-purple-700"
            onClick={(event)=> event.stopPropagation()}
          >
            <CheckIcon className="h-6 w-6 text-white" />
          </button>
        )
        :
        (
          <button
            className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1 bg-green-100 hover:bg-purple-700"
            onClick={(event) => addProductsToCart(event, props)}
          >
            <PlusIcon className="h-6 w-6 text-black" />
          </button>
        )
    )
  };

  return (

    <div
      className="bg-white cursor-pointer w-48 h-60 rounded-lg border border-black p-2 shadow-lg shadow-blue-500/40"
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
        {renderIcon()}
      </figure>
      <p className="flex justify-between">
        <span className="text-xs font-normal line-clamp-2 ">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>

  )
};

export { Card };

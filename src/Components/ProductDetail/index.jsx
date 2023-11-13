import { XMarkIcon } from "@heroicons/react/24/solid";
import { useShoppingCartContext } from "../../Context";



export function ProductDetail() {

  const { isProductDetailOpen, closeProductDetail, productToShow } = useShoppingCartContext();

  return (

    <aside
      className={`top-[60px] right-0 bottom-0 w-[360px] h-[calc(100vh-65px)] ${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed  border border-black rounded-lg bg-white overflow-y-scroll `}
    >
      <div className="flex justify-between items-center p-2 ">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          className="w-6 h-6 text-black cursor-pointer"
          onClick={() => {
            closeProductDetail()
          }}
        ></XMarkIcon>

      </div>
      <div className="overflow-y-scroll">
        <figure className="px-6">
          <div className="w-full h-60 overflow-hidden rounded-lg">
            <img
              className="w-full h-auto object-center object-contain"
              src={productToShow.image}
              alt={productToShow.title}
            />
          </div>
        </figure>
        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl">${productToShow.price}</span>
          <span className="font-medium text-md">{productToShow.title}</span>
          <span className="font-light text-md">{productToShow.description}</span>
        </p>
      </div>
    </aside>
  )
};

import { XMarkIcon } from "@heroicons/react/24/solid";
import { useShoppingCartContext } from "../../Context";



export function ProductDetail() {

  const { isProductDetailOpen , closeProductDetail } = useShoppingCartContext();
  return (
    
    <aside 
    className={`${ isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white top-[44px] w-[360px] h-[calc(100vh-45px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon 
        className="w-6 h-6 text-black"
        onClick={() => {
          closeProductDetail()
        }}
        ></XMarkIcon>
      
      </div>
    </aside>
  )
};

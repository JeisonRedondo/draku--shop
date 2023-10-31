import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../../Context";

import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid"; "@heroicons/react/24/solid";
import { OrderCard } from "../../Components/OrderCard";

function MyOrder() {

  const { order } = useShoppingCartContext();
  return (
    <div>
      <div className="flex flex-col w-80">
        <div className="flex w-80 justify-center relative items-center mb-3">
          <Link to={"/my-orders"} className="absolute left-0 ">
            <ChevronDoubleLeftIcon
              className="w-6 h-6 text-black cursor-pointer"
            />
          </Link>
          <h1>My Order</h1>
        </div>
        {
          order.slice(-1)[0]?.products.map((product) => (
            <OrderCard key={product.id} {...product} />
          ))
        }
      </div>
    </div>
  )
}

export { MyOrder };

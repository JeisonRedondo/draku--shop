import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";


export function OrdersCard(props) {

  const { totalPrice, totalProducts, date } = props;
  return (
    <div className="flex justify-between gap-2 items-center mb-3 
      border border-black p-2 rounded">
      <div className="flex flex-col">
        <p className="flex flex-row gap-2">
          <CalendarDaysIcon className="w-5 h-6 text-black" />
          <span className="">{date}</span>
        </p>
        <p className="flex flex-row gap-2">
          <ShoppingCartIcon className="w-5 h-6 text-black" />
          <span> {totalProducts} products</span>
        </p>

      </div>
      <p className="flex flex-row text-2xl">
        <CurrencyDollarIcon className="w-5 h-6 text-black" />
        <span>{totalPrice}</span>
      </p>
    </div>
  )
};

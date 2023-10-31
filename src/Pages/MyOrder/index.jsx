import { useShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";

function MyOrder() {

  const { order } = useShoppingCartContext();
console.log("Order: ",order.slice(-1)[0]?.products);
  return (
    <div>
      MyOrder
      <div className="flex flex-col w-80">
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

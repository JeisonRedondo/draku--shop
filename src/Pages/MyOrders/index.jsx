import { Link } from "react-router-dom";
import { OrdersCard } from "../../Components/OrdersCard";
import { useShoppingCartContext } from "../../Context";

function MyOrders() {

  const { order } = useShoppingCartContext();

  return (
    <div>
        <h1>My Orders</h1>
      {
        order.map((item, index) => {
          <Link to={`/my-orders/${item.id}`}>
            <OrdersCard
              key={index}
              {...item}
            />
          </Link>
        })
      }
    </div>
  )
}

export { MyOrders };

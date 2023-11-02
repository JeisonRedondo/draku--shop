import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { useShoppingCartContext } from "../../Context";

function Home() {

  const { items, setSearchByTitle } = useShoppingCartContext();

  return (
    <div>
      <div className="flex items-center justify-center relative w-full mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a products"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 w-ful max-w-screen-lg">
        {
          items?.map((item) => (
            <Card key={item.id} {...item} />
          ))
        }
      </div>
      <ProductDetail />
    </div>
  )
}

export { Home };

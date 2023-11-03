import { useParams } from "react-router-dom";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { useShoppingCartContext } from "../../Context";

function Home() {

  const { items, searchByTitle, setSearchByTitle, filteredItemsByTitle, filteredItemsByCategory } = useShoppingCartContext();

  const params = useParams();
  const category = params.category;

  const page = category ? category : "Exclusive Products";
  const pageTitle = page.charAt(0).toUpperCase() + page.slice(1);


  const itemsToRender = params.category ? filteredItemsByCategory(items, category) : items;

  function renderItems() {
    let itemsSearched = searchByTitle?.length > 0
      ? filteredItemsByTitle(itemsToRender, searchByTitle)
      : itemsToRender;

    return (
      itemsSearched?.length > 0 ?
        (
          itemsSearched?.map((item) => (
            <Card key={item.id} {...item} />
          ))
        )
        :
        (
          <p>
            No Results Found
          </p>
        )
    )
  }
  return (
    <div >
      <div className="flex flex-col items-center justify-center relative w-full mb-4">
        <h1 className="font-medium text-xl">{pageTitle}</h1>

        <input
          type="text"
          placeholder="Search a products"
          value={searchByTitle}
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(event) => setSearchByTitle(event.target.value)}
        />
      </div>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 w-ful max-w-screen-lg">
        {
          renderItems()
        }
      </div>
      <ProductDetail />
    </div>
  )
}

export { Home };

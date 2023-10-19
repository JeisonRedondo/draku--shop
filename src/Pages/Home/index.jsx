import { API_URL } from "../../API";

import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {

  const [items, setItems] = useState(null);

  useEffect(() => {

    const fetchProps = async () => {
      try {

        const response = await fetch(`${API_URL}/products`);
        const props = await response.json();
        setItems(props)

      } catch (error) {
        console.error(`Ah ocurrido un error:${error}`)
      }
    }
    fetchProps();
  }, []);



  return (
    <div>
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

import { useShoppingCartContext } from "../../Context";

function Card({ title, category, image, price, description }) {

  const { setCount, count } = useShoppingCartContext();
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-3 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">{category}</span>
        <img
          className="w-ful h-full object-cover rounded-lg"
          src={image}
          alt={description} />
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 bg-green-100"
          onClick={() => setCount(count + 1)}
        >+</button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  )
};

export { Card };

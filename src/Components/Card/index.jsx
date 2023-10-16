function Card() {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-3 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">Electronics</span>
        <img
          className="w-ful h-full object-cover rounded-lg"
          src="https://images.pexels.com/photos/164710/pexels-photo-164710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image about some headphones" />
        <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        >+</button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">Headphones</span>
        <span className="text-lg font-medium">300</span>
      </p>
    </div>
  )
};

export { Card };

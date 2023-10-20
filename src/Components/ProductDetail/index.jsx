import { XMarkIcon } from "@heroicons/react/24/solid";

export function ProductDetail() {
  return (
    <aside className="flex flex-col fixed right-0 border border-black rounded-lg bg-white top-[44px] w-[360px] h-[calc(100vh-45px)]">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon className="w-6 h-6 text-black"></XMarkIcon>
      </div>
    </aside>
  )
};

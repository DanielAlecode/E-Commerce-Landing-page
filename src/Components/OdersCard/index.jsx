import { XMarkIcon } from "@heroicons/react/16/solid";

const OrdersCard = ({ totalPrice, totalProducts }) => {
  return (
    <div className="flex justify-between items-center border border-gray-200 px-6 py-4 bg-white shadow-md rounded-2xl mb-4 transition hover:shadow-lg">
      <div className="flex flex-col">
        <span className="text-gray-500 text-sm">Fecha</span>
        <span className="text-black font-medium">01/02/2024</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-gray-500 text-sm">Productos</span>
        <span className="text-black font-medium">{totalProducts}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-gray-500 text-sm">Total</span>
        <span className="text-green-600 font-semibold">${totalPrice}</span>
      </div>
      <XMarkIcon className="h-5 w-5 text-gray-400 cursor-pointer hover:text-red-500" />
    </div>
  );
};

export default OrdersCard;

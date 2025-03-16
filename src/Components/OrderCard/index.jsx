import { XMarkIcon } from "@heroicons/react/16/solid";

const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {
    return (
        <div className="flex justify-between items-center px-4 py-2 bg-white shadow-sm rounded-lg">
            {/* Contenido de la orden */}
            <div className="flex items-center gap-4">
                {/* Imagen */}
                <figure className="w-16 h-16">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                {/* Título y precio */}
                <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-700">{title}</p>
                    <p className="text-sm font-semibold text-gray-900">${price}</p>
                </div>
            </div>

            {/* Botón de eliminar */}
            <button className="p-1 rounded-full hover:bg-gray-200 transition duration-200" onClick={() => handleDelete(id)}>
                <XMarkIcon className="h-5 w-5 text-gray-600 hover:text-red-500" />
            </button>
        </div>
    );
};

export default OrderCard;

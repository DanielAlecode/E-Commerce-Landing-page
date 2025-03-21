import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${context.isProductDetailOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-[68px] right-0 w-[360px] h-[calc(100vh-68px)] bg-white shadow-lg border-l border-gray-300 rounded-l-lg transition-transform duration-300 ease-in-out flex flex-col`}
    >
      {/* Encabezado */}
      <div className="flex justify-between items-center p-5 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Product Detail</h2>
        <XMarkIcon
          className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800 transition"
          onClick={() => context.closeProductDetail()}
        />
      </div>

      {/* Contenido */}
      {/* Verifica si hay un producto seleccionado antes de mostrar su contenido */}
      {context.productToShow && (
        <div className="flex flex-col p-4 gap-4">
          {/* Imagen */}
          <figure className="w-full h-56 rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              src={context.productToShow.images}
              alt={context.productToShow.title}
            />
          </figure>

          {/* Información del Producto */}
          <div className="flex flex-col items-start">
            <span className="text-2xl font-bold text-gray-900">
              ${context.productToShow.price}
            </span>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              {context.productToShow.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mt-1">
              {context.productToShow.description}
            </p>
          </div>
        </div>
      )}

    </aside>
  );
};

export default ProductDetail;

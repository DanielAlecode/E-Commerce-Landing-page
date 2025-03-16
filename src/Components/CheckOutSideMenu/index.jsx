import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../Utils/index.js";

const CheckOutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id);
    context.setCartProducts(filteredProducts);
  }
  return (
    <aside
      className={`${context.isCheckOutSideMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-[68px] right-0 w-[360px] h-[calc(100vh-68px)] bg-white shadow-lg border-l border-gray-300 rounded-l-lg transition-transform duration-300 ease-in-out flex flex-col`}
    >
      {/* Encabezado */}
      <div className="flex justify-between items-center p-5 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">My order</h2>
        <XMarkIcon
          className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800 transition"
          onClick={() => context.closeCheckOutSideMenu()}
        />
      </div>


      <div className="overflow-y-scroll">
        {
          context.cartProducts.map(product => (
            <OrderCard 
            key={product.id} id={product.id} title={product.title} imageUrl={product.images} price={product.price} 
            handleDelete={handleDelete}
            />
          ))
        }
      </div>
      {/*total de productos*/}
      <div className="px-6">
        <p className="flex justify-between">
          <span>Total: </span>
          <span>${totalPrice(context.cartProducts)}</span>
        </p>
      </div>
    </aside>
  );
};

export default CheckOutSideMenu;

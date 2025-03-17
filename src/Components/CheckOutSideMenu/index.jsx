import { useContext, useCallback, useMemo } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../Utils/index.js";
import { Link } from "react-router-dom";

const CheckOutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  // Calcular el total solo cuando cartProducts cambie
  const total = useMemo(() => totalPrice(context.cartProducts), [context.cartProducts]);

  // Función para eliminar un producto del carrito
  const handleDelete = useCallback((id) => {
    context.setCartProducts((prev) => prev.filter(product => product.id !== id));
  }, [context]);

  // Función para realizar el checkout
  const handleCheckout = useCallback(() => {
    if (context.cartProducts.length === 0) return;

    const orderToAdd = {
      date: new Date().toISOString(), // Agrega la fecha actual
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: total
    };

    context.setOrder((prev) => [...prev, orderToAdd]);
    context.setCartProducts([]);
  }, [context, total]);

  return (
    <aside
      className={`fixed top-[68px] right-0 w-[360px] h-[calc(100vh-68px)] bg-white shadow-lg border-l border-gray-300 rounded-l-lg transition-transform duration-300 ease-in-out flex flex-col 
        ${context.isCheckOutSideMenuOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Encabezado */}
      <div className="flex justify-between items-center p-5 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">My order</h2>
        <XMarkIcon
          className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800 transition"
          onClick={context.closeCheckOutSideMenu}
        />
      </div>

      {/* Lista de productos */}
      <div className="flex-1 overflow-y-auto p-5 space-y-3">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      {/* Total y botón de checkout */}
      <div className="px-6 py-4 border-t border-gray-200">
        <p className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>${total}</span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="w-full bg-black text-white py-2 rounded-lg mt-3  cursor cursor-pointer"
            onClick={handleCheckout}
            disabled={context.cartProducts.length === 0}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckOutSideMenu;

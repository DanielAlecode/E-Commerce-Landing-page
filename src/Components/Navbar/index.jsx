import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "relative after:content-[''] after:block after:h-[2px] after:w-full after:bg-blue-600 after:rounded-full";

  return (
    <nav className="flex justify-between items-center bg-white shadow-md fixed top-0 z-10 w-full py-4 px-8 text-sm font-medium border-b border-gray-200">
      {/* Sección izquierda - Logo y Categorías */}
      <ul className="flex items-center gap-6">
        <li className="text-xl font-bold text-gray-800">
          <NavLink to="/" className="hover:text-blue-600 transition">Shopi</NavLink>
        </li>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : "hover:text-blue-600 transition")}>All</NavLink></li>
        <li><NavLink to="/clothes" className={({ isActive }) => (isActive ? activeStyle : "hover:text-blue-600 transition")}>Clothes</NavLink></li>
        <li><NavLink to="/electronics" className={({ isActive }) => (isActive ? activeStyle : "hover:text-blue-600 transition")}>Electronics</NavLink></li>
        <li><NavLink to="/furnitures" className={({ isActive }) => (isActive ? activeStyle : "hover:text-blue-600 transition")}>Furnitures</NavLink></li>
        <li><NavLink to="/toys" className={({ isActive }) => (isActive ? activeStyle : "hover:text-blue-600 transition")}>Toys</NavLink></li>
        <li><NavLink to="/others" className={({ isActive }) => (isActive ? activeStyle : "hover:text-blue-600 transition")}>Others</NavLink></li>
      </ul>

      {/* Sección derecha - Usuario y Carrito */}
      <ul className="flex items-center gap-6">
        <li className="text-gray-500 hidden md:block">john.doe@gmail.com</li>
        <li><NavLink to="/my-orders" className={({ isActive }) => (isActive ? activeStyle : "hover:text-blue-600 transition")}>My Orders</NavLink></li>
        <li><NavLink to="/my-account" className={({ isActive }) => (isActive ? activeStyle : "hover:text-blue-600 transition")}>My Account</NavLink></li>
        <li><NavLink to="/sign-in" className={({ isActive }) => (isActive ? activeStyle : "hover:text-blue-600 transition")}>Sign-In</NavLink></li>
        
        {/* Carrito de compras */}
        <li className="relative flex items-center">
          <ShoppingBagIcon className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
          {context.counter > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {context.counter}
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

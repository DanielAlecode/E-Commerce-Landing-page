import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  // Corrección: length estaba mal escrito
  if (index === 'last') index = context.order?.length - 1;

  const lastOrder = context.order?.[index];

  return (
    <Layout>
      {/* Encabezado */}
      <div className="flex items-center gap-2 mb-6">
        <Link to="/my-orders" className="hover:scale-105 transition-transform">
          <ChevronLeftIcon className="h-6 w-6 text-gray-600 hover:text-black" />
        </Link>
        <h2 className="text-2xl font-semibold text-gray-800">My Order</h2>
      </div>

      {/* Contenedor de la orden */}
      <div className="flex flex-col gap-4 max-w-md mx-auto bg-white shadow-lg rounded-2xl p-4">
        {lastOrder?.products?.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;

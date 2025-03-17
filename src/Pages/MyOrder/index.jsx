import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const lastOrder = context.order?.slice(-1)[0]; // Último pedido

  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-4">My Order</h2>

      {/* Lista de productos */}
      <div className="flex flex-col w-80">
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

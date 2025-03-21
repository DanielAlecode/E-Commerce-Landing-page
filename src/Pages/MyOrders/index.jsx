import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  
  return (

    <Layout>
      My Orders
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
          </Link>
        ))
      }

    </Layout>
  )
}

export default MyOrders;
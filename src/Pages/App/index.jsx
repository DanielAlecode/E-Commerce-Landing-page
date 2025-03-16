import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import SignIn from '../SignIn';
import NotFound from '../NotFound';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import MyAccount from '../MyAccount';
import Navbar from '../../Components/Navbar';

import './App.css'
import CheckOutSideMenu from '../../Components/CheckOutSideMenu';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
  ]);

  return routes;
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckOutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App;
import { useRoutes } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { MyAccount } from '../Pages/MyAccount';
import { MyOrder } from '../Pages/MyOrder';
import { MyOrders } from '../Pages/MyOrders';
import { NotFound } from '../Pages/NotFound/';
import { SignIn } from '../Pages/SignIn';
import { Electronics } from '../Pages/Electronics';


function AppRoutes() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/electronics', element: <Electronics /> },
    { path: '/category/:category', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
};

export { AppRoutes };



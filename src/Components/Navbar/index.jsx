import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { NavLink } from "react-router-dom";
import { useShoppingCartContext } from "../../Context";

function Navbar() {
  const { count } = useShoppingCartContext();
  const activeStyle = 'underline underline-offset-4';

  return (
    <nav 
    className="flex justify-between items-center fixed z-10 top-0 w-full py-2 px-8 text-sm font-light bg-white"
    id="navbar"
    >
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to='/'
          >
            DrakuShopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/all'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/jewelery'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men's clothing"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Men's Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women's clothing"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Women's Clothing
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          draku@drakunom.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/signin'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex ">
          <ShoppingCartIcon className="w-5 h-6 text-black"></ShoppingCartIcon>
          {count}
        </li>
      </ul>

    </nav>
  )
};

export { Navbar };

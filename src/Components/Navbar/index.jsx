import { NavLink } from "react-router-dom";
import { useShoppingCartContext } from "../../Context";

function Navbar() {
  const { count } = useShoppingCartContext();
  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-2 px-8 text-sm font-light bg-white">
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          {count}
        </li>
      </ul>

    </nav>
  )
};

export { Navbar };

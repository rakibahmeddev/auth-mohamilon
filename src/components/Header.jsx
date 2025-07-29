import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user?.email);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-base mx-4 hover:text-blue-500 ${
            isActive ? 'text-blue-700 font-semibold' : 'text-black'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          `text-base mx-4 hover:text-blue-500 ${
            isActive ? 'text-blue-700 font-semibold' : 'text-black'
          }`
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          `text-base mx-4 hover:text-blue-500 ${
            isActive ? 'text-blue-700 font-semibold' : 'text-black'
          }`
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/orders"
        className={({ isActive }) =>
          `text-base mx-4 hover:text-blue-500 ${
            isActive ? 'text-blue-700 font-semibold' : 'text-black'
          }`
        }
      >
        Orders
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100  border border-blue-500 rounded-2xl my-6">
      <div className="navbar-start">
        <Link
          to="/"
          className=" mx-4 py-2 px-4 rounded-xl hover:bg-blue-500 hover:text-white text-xl"
        >
          Auth Mohamilon
        </Link>
      </div>
      <div className="navbar-center">
        {/* Desktop menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
      <div className="navbar-end">
        {/* button  */}
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              <p>{user?.email}</p>
              <button
                onClick={signOutUser}
                className="btn bg-blue-500 text-white rounded-xl"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn bg-blue-500 text-white rounded-xl">
              Login
            </Link>
          )}
        </div>

        {/* Mobile dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-white border-0 px-3 py-2 hover:bg-blue-500 hover:text-white ml-2 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-4 shadow bg-base-100 rounded-box w-52 text-right"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

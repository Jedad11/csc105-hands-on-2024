import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between bg-gray-800 p-4 text-white shadow-md">
        <div className="flex space-x-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition ${isActive ? "bg-gray-600" : "hover:bg-gray-700"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition ${isActive ? "bg-gray-600" : "hover:bg-gray-700"}`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/fav"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition ${isActive ? "bg-gray-600" : "hover:bg-gray-700"}`
            }
          >
            Favorite
          </NavLink>
        </div>
      </nav>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
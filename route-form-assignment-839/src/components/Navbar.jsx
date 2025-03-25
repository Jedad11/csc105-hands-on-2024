import React from "react"; //You can safely remove this line
import { NavLink,Outlet } from "react-router-dom";

const  NavBar = () => {
    return <div>
      <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/fav">Favorite</NavLink>
      </nav>
        <Outlet />
    </div>;
};
export default NavBar;
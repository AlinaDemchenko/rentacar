import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="px-10 py-1.5 mb-1">
      <nav>
      <ul className="font-light flex gap-x-12 items-center h-16">
        <li className="w-16">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="w-16">
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            Catalog
          </NavLink>
        </li>
        <li className="w-16">
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            Favorites
          </NavLink>
        </li>
      </ul>
      </nav>
    </header>
  );
}

export default Header;

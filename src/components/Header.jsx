import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className=" px-10 py-1.5 h-16 mb-2.5 flex gap-x-12 items-center font-light">
      <NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : "")}>Home</NavLink>
      <NavLink to="/catalog" className={({ isActive }) => (isActive ? "activeLink" : "")}>Catalog</NavLink>
      <NavLink to="/favorites" className={({ isActive }) => (isActive ? "activeLink" : "")}>Favorites</NavLink>
    </header>
  );
}

export default Header;

import React, { useRef, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu, BiMoon, BiSun } from "react-icons/bi";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About Us" },
  { path: "/cold-storage", display: "Cold Storage" },
  { path: "/market", display: "Marketplace" },
  { path: "/blog", display: "Blogs" },
  { path: "/contact", display: "Contact Us" },
];

const Navbar = () => {
  const menuRef = useRef(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
  };

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show-menu");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">FARMLOC</h1>

        <nav ref={menuRef} className="nav-menu">
          {navLinks.map((link, index) => (
            <NavLink key={index} to={link.path} className="nav-link">
              {link.display}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="login-btn">Login</Link>
          <button onClick={toggleTheme} className="theme-btn">
            {theme === "light" ? <BiMoon /> : <BiSun />}
          </button>
          <span onClick={toggleMenu} className="menu-icon">
            <BiMenu />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

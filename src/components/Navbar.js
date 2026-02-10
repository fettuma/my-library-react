import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/icon.png" alt="logo" />
        <span>My Library</span>
      </div>

      {/* 🍔 Hamburger */}
      <div
        className={`burger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/books" onClick={() => setOpen(false)}>Books</Link>
        <Link to="/stats" onClick={() => setOpen(false)}>Statistics</Link>
        <Link to="/add" onClick={() => setOpen(false)}>AddBook</Link>
        <a href="/#About" onClick={() => setOpen(false)}>About</a>
        <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
      <div className={`nav-links nav-right ${open ? "active" : ""}`}>
        <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
        <Link to="/register" onClick={() => setOpen(false)}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <div className="logo">
        <h1>KASETSERT</h1>
      </div>
      <>
        <ul className={toggle ? "toggle" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li className="close" onClick={menuToggle}>
            X
          </li>
        </ul>
        <div className="menu" onClick={menuToggle}>
          menu
        </div>
      </>
    </header>
  );
}

export default Header;

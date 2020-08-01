import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import auth from "./section/firebase/index";
function Header() {
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState("");
  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setStatus(true);
        setEmail(user.email);
      } else {
      }
    });

    return () => {
      handleAuth();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut().then((response) => {
      setStatus(false);
      console.log(response);
    });
  };
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
          {!status && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
          {status && (
            <>
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
                <h1>{email}</h1>
              </li>
              <li>
                <Link to="#" onClick={handleLogout}>
                  Logout
                </Link>
                {/* <h1 onClick={handleLogout}>logout</h1> */}
              </li>
            </>
          )}
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

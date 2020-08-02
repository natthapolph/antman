import React, { useState } from "react";
import auth from "./firebase/index";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // console.log("email-->" + e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    // console.log("email-->" + e.target.value);
  };

  const handleLogin = async () => {
    const response = await auth.signInWithEmailAndPassword(email, password);

    const { user } = response;
    console.log(user);
  };

  return (
    <div className="Body-login">
      <div className="Container-login">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={handleEmail}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={handlePassword}
        />

        <Link to="/home" onClick={handleLogin}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Login;

import React from "react";

function Login() {
  return (
    <div className="Body-login">
      <div className="Container-login">
         <h2>Login</h2>
        <input type="email" placeholder="Enter Your Email" />
        <input type="password" placeholder="Enter Your Password" />
        <div className="Login-row">
          <label className="Label-login">
            <input type="checkbox" />
            Remember Password
          </label>
          <a href="#">Forget Password?</a>
        </div>
        <button className="Button-login">login</button>
      </div>
    </div>
 
  );
}

export default Login;

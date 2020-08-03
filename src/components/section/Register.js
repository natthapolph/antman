import React, { useState, useEffect } from "react";
import axios from "axios";
import auth from "../section/firebase/index";
import { Link } from "react-router-dom";
function Example() {
  const [data, setData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [error, setError] = useState({
    name: false,
    email: false,
    password: false,
    cpassword: false,
    massage1: "",
    massage2: "",
    massage3: "",
  });
  const init = async () => {
    const response = await axios.get("http://localhost:3005/res");
    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {
    init();
  }, []);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleCpassword = (e) => {
    setCpassword(e.target.value);
  };
  const hadleBlur = (e) => {
    const Temail = e.target.value;
    if (!Temail) {
      setError({
        email: true,
        massage1: "Email is required.",
      });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(Temail)) {
      setError({
        email: true,
        massage1: "Invalid email address",
      });
    } else {
      setError({
        email: false,
      });
    }
  };

  const hadleBlurPass = (e) => {
    const TPass = e.target.value;
    if (!TPass) {
      setError({
        password: true,
        massage2: "Password is required.",
      });
    } else if (!/^(?=.*\d)/.test(TPass)) {
      setError({
        password: true,
        massage2: "Password must contain at least one number.",
      });
    } else if (!/(?=.*[a-z])/.test(TPass)) {
      setError({
        password: true,
        massage2: "'Password must contain at least one lowercase letter.'",
      });
    } else if (!/(?=.*[A-Z])/.test(TPass)) {
      setError({
        password: true,
        massage2: "Password must contain at least one uppercase letter.",
      });
    } else if (!/(?=.[!@#$%^&*?+-/()<>[\]{}:;])/.test(TPass)) {
      setError({
        password: true,
        massage2: "Password must contain at least one special character.",
      });
    } else if (!/(?=.*[A-Z])/.test(TPass)) {
      setError({
        password: true,
        massage2: "Password must contain at least one number.",
      });
    } else if (TPass.includes(" ")) {
      setError({
        password: true,
        massage2: "Password must NOT contain space.",
      });
    } else if (TPass.length < 8) {
      setError({
        password: true,
        massage2: "Password must be at least 8 character",
      });
    } else if (TPass.length > 20) {
      setError({
        password: true,
        massage2: "Password is too long (max 20 characters).",
      });
    } else if (TPass.toLowerCase() === "password") {
      setError({
        password: true,
        massage2: 'Cannot use "password" as a password',
      });
    } else {
      setError({
        password: false,
      });
    }
  };
  const hadleBlurCPass = (e) => {
    const TCPass = e.target.value;
    if (!TCPass) {
      setError({
        cpassword: true,
        massage3: "ComfirmPassword is required.",
      });
    } else {
      if (password !== TCPass) {
        setError({
          cpassword: true,
          massage3: "Password does not match.",
        });
      }
    }
  };
  const handleRegister = async () => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const { user } = response;
      auth.currentUser.sendEmailVerification();
      alert("please verify your email address");
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <div className="Body-regis">
      <div className="Container-regis">
        <p>{data.name}</p>
        <div>
          <h2>Register</h2>

          <input
            type="email"
            placeholder="Email Adress"
            onChange={handleEmail}
            onBlur={hadleBlur}
          />

          {error.email && <div className="error1">{error.massage1}</div>}

          <input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
            onBlur={hadleBlurPass}
          />
          {error.password && <div className="error2">{error.massage2}</div>}
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleCpassword}
            onBlur={hadleBlurCPass}
          />
          {error.cpassword && <div className="error3">{error.massage3}</div>}
          <Link to="/login">
            <button
              onClick={handleRegister}
              disabled={error.password || error.email || error.cpassword}
            >
              submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Example;

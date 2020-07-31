import React, { useState, useEffect } from "react";
import axios from "axios";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [data, setData] = useState({});

  const init = async () => {
    const response = await axios.get("http://localhost:3005/res");
    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="Body-regis">
      <div className="Container-regis">
        <p>{data.name}</p>
      <div>
        <h2>Register</h2>
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
        <input type="email" placeholder="Email Adress" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button>submit</button>
      </div>
      </div>
      
    </div>
  );
}

export default Example;

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
    <div>
      <p>{data.name}</p>
      <div>
        <h1>Register</h1>
        <input type="email" placeholder="email@" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="password" />
        <button>submit</button>
      </div>
    </div>
  );
}

export default Example;

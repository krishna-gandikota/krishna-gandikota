import React, { useState } from "react";
// import "./styles.css";

export default function App() {
  const [data, setData] = useState({ username: "", password: "" });
  const { username, password } = data;
  const handleChange = (event:any) => {
    setData({ ...data,[event.target.value]: [event.target.value] });
  };
  const handleSubmit = (event:any) => {
    // event.prevendDefult();
    console.log(data);
  };
  return (
   
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
         value={username}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <input type="submit" name="submit" />
      </form>
   
  );
}

import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleClick = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

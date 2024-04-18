import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const addValue = () => {
    count++;
    setCount(count);
    console.log("value added", count);
  };

  const decreaseVal = () => {
    if (count == 0) {
      return;
    }
    count--;
    setCount(count);
  };
  return (
    <>
      <h1>Ashish And React</h1>
      <h2>Counter Value {count}</h2>
      <button onClick={addValue}>Add value {count}</button>
      <br />
      <br />
      <button onClick={decreaseVal}>Decrease Value {count}</button>
      <p>footer: {count}</p>
    </>
  );
}

export default App;

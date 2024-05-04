import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ColorPalete from "./ColorPalete";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ColorPalete />
    </>
  );
}

export default App;

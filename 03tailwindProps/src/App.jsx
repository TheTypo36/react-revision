import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  let myobj = {
    name: "anand",
    age: 21,
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        TailWind Test
      </h1>
      <Card className="m-4" userName="Ashish" myobj={myobj} />
      <Card userName="Anand" myobj={myobj} />
    </>
  );
}

export default App;

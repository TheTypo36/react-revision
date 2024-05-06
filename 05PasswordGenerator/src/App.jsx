import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [len, setLen] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "!@#$%^&*()_+:|}{<>?</>}";
    }
    for (let i = 0; i < len; i++) {
      let ch = str[Math.floor(Math.random() * str.length)];
      pass += ch;
    }

    setPassword(pass);
  }, [len, charAllow, numAllow]);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    //  passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);
  useEffect(() => {
    passwordGenerator();
  }, [len, charAllow, numAllow]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700 ">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={len}
              className="cursor-pointer"
              onChange={(e) => {
                setLen(e.target.value);
              }}
            />
            <label>length: {len}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => setNumAllow((prev) => !prev)}
            />
            <label htmlFor="numberInput"> number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => setCharAllow((prev) => !prev)}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

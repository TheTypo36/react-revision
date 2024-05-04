import React, { useEffect } from "react";
const ColorPalete = () => {
  const color = [
    "#000000",
    "#CA8A04",
    "#DC2626",
    "#16A34A",
    "#C084FC",
    "#0D9488",
    "#2563EB",
    "#EA580C",
  ];

  const handleBgChange = (event) => {
    document.body.style.backgroundColor = color[event.target.id - 1];
    event.stopPropagation();
  };

  const addEventToButn = () => {
    const btns = document.querySelectorAll("button");
    btns.forEach((item) => item.addEventListener("click", handleBgChange));
  };
  useEffect(() => {
    addEventToButn();
  }, []);
  return (
    <div className="absolute inset-x-10 bottom-10 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        id="1"
      >
        black
      </button>
      <button
        type="button"
        className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        id="2"
      >
        yellow
      </button>
      <button
        type="button"
        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        id="3"
      >
        red
      </button>
      <button
        type="button"
        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        id="4"
      >
        green
      </button>
      <button
        type="button"
        className="rounded-md bg-purple-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        id="5"
      >
        purple
      </button>
      <button
        type="button"
        className="rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        id="6"
      >
        teal
      </button>
      <button
        type="button"
        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        id="7"
      >
        blue
      </button>
      <button
        type="button"
        className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        id="8"
      >
        orange
      </button>
    </div>
  );
};

export default ColorPalete;

import React, { useState, useEffect } from "react";

import Todo from "./Todo";

const name = "waqas";
function App() {
  // react states are immutable. mean hum react state (count) ko directly update nhi kr skte.
  //agr hume state update krni hui to hum setCount se krnge.
  // usestate returns 2 values: getter, setter
  const [rollNumber, setRollNumber] = useState("GFC124");
  const [day, setDay] = useState(true);
  const [textColor, setTextColor] = useState("text-blue-600");
  const [count, setCount] = useState(1);

  const colors = ["bg-blue-100", "bg-yellow-100", "bg-green-100", "bg-red-500"];
  const [colorIndex, setColorIndex] = useState(0);

  const next = () => {
    if (colorIndex < colors.length - 1) {
      setColorIndex(colorIndex + 1);
    }
  };

  const prev = () => {
    if (colorIndex > 0) {
      setColorIndex(colorIndex - 1);
    }
  };

  const clickMe = () => {
    setRollNumber("WAQ123");
  };

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const changeBackground = () => {
    setTextColor("text-black-200");

    // set toggle - hme day ki value ko toggle krna hai. agr true hui to false krni hai. false hui to true krni hai
    //Option 1. not recommended. because very lengthy
    // if (day) {
    //   setDay(false);
    // } else {
    //   setDay(true);
    // }

    //Option 2. in few cases.
    // setDay(day ? false : true);

    //Option 3. smart way
    setDay(!day);
  };
  // images
  const images = [
    "/img/download (1).jpeg",
    "/img/download (2).jpeg",
    "/img/download (3).jpeg",
    "/img/download (4).jpeg",
    "/img/download (5).jpeg",
    "/img/download (6).jpeg",
  ];
  const [pictures, setPictures] = useState(0);
  const newpic = pictures < images.length - 1;
  const backpic = pictures > 0;
  const forward = () => {
    if (newpic) {
      setPictures(pictures + 1);
    }
  };

  const backward = () => {
    if (backpic) {
      setPictures(pictures - 1);
    }
  };
  // ? mean if
  // : mean else
  // aek line me if else likhne k lie hum ? : use krte hain
  return (
    <>
      <div
        className={`${
          day ? "bg-yellow-200" : "bg-slate-400"
        } pt-20 pl-20 ${textColor}`}
      >
        <p>{name}</p>
        <p>{rollNumber}</p>
        <p className="text-4xl pb-3">{count}</p>
        <button
          className="bg-blue-600 text-white font-semibold rounded-sm py-3 px-4 hover:bg-blue-700 active:bg-blue-800"
          onClick={changeBackground}
        >
          {day ? "it is day. swith to night" : "it is night. switch to day"}
        </button>
        <button
          className="ml-3 bg-blue-600 text-white font-semibold rounded-sm py-3 px-4 hover:bg-blue-700 active:bg-blue-800"
          onClick={clickMe}
        >
          Add
        </button>
        <button
          className="ml-3 bg-blue-600 text-white font-semibold rounded-sm py-3 px-4 hover:bg-blue-700 active:bg-blue-800"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="ml-3 bg-blue-600 text-white font-semibold rounded-sm py-3 px-4 hover:bg-blue-700 active:bg-blue-800"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
      <div className="mt-4  ">
        <p className={`${colors[colorIndex]}  p-4`}>
          waqar {colors[colorIndex]}
          {colorIndex}
        </p>
        <button
          className="ml-3 bg-blue-600 text-white font-semibold rounded-sm py-3 px-4 hover:bg-blue-700 active:bg-blue-800"
          onClick={next}
        >
          Next
        </button>
        <button
          onClick={prev}
          className="ml-3 bg-blue-600 text-white font-semibold rounded-sm py-3 px-4 hover:bg-blue-700 active:bg-blue-800"
        >
          Previous
        </button>
      </div>
      <div className="mt-4">
        <img src={images[pictures]} />
        <button
          onClick={forward}
          disabled={!newpic}
          className={`ml-3 bg-blue-600 text-white font-semibold rounded-sm py-3 px-4 hover:bg-blue-700 active:bg-blue-800`}
        >
          Forward
        </button>
        <button
          onClick={backward}
          className="ml-3 bg-blue-600 text-white font-semibold rounded-sm py-3 px-4 hover:bg-blue-700 active:bg-blue-800"
        >
          Backward
        </button>
      </div>
    </>
  );
}

export default App;

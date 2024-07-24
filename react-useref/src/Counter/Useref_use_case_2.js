import "./Counter.css";
import React, { useEffect, useState, useRef } from "react";
export default function Counteruseref() {
  const [count, setCount] = useState(0);
  const btnRef = useRef(0);
  useEffect(() => {
    console.log(`rendering....`);
    btnRef.current.style.background = "blue";
  });
  return (
    <div className="row mt-5">
      <div className="text-center mt-5">
        <h1>Counter App</h1>
        <div className="mt-5">
          <h1>{count}</h1>
        </div>
        <div className="mt-5">
          <button
            ref={btnRef}
            className="btn btn-success"
            id="increment"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment Button
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrement Button
          </button>
        </div>
      </div>
    </div>
  );
}

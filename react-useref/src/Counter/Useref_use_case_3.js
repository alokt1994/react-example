import "./Counter.css";
import React, { useEffect, useState, useRef } from "react";
export default function Counteruseref3() {
  const [count, setCount] = useState(0);
  const incrementBtnRef = useRef();
  const decrementBtnRef = useRef();

  function hiddenButton() {
    incrementBtnRef.current.style.display = "none";
    decrementBtnRef.current.style.display = "none";
  }
  return (
    <div className="row mt-5">
      <div className="text-center mt-5">
        <h1>Counter App</h1>
        <div className="mt-5">
          <h1>{count}</h1>
        </div>
        <div className="mt-5">
          <button
            ref={incrementBtnRef}
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
            ref={decrementBtnRef}
            className="btn btn-danger"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrement Button
          </button>
          <br />
          <br />
          <button className="btn btn-secondary" onClick={hiddenButton}>
            Hide Button
          </button>
        </div>
      </div>
    </div>
  );
}

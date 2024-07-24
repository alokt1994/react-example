import "./Counter.css";
import React, { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }
  return (
    <div className="row mt-5">
      <div className="text-center mt-5">
        <h1>Counter app</h1>
        <div className="mt-5">
          <h1>{count}</h1>
        </div>
        <div className="mt-5">
          <button
            className="btn btn-success"
            id="increment"
            onClick={() => {
              increment();
            }}
          >
            Increment Button
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              decrement();
            }}
          >
            Decrement Button
          </button>
        </div>
      </div>
    </div>
  );
}

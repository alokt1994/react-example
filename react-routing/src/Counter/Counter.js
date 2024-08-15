import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }
  function decrement() {
    setCount((count) => count - 1);
  }
  return (
    <div className="text-center mt-5">
      <h1>Counter App</h1>
      <p className="counterpara">{count}</p>
      &nbsp;&nbsp;&nbsp;
      <button
        className="btn btn-success"
        onClick={() => {
          increment();
          increment();
        }}
      >
        Increment
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        className="btn btn-danger"
        onClick={() => {
          decrement();
          decrement();
        }}
      >
        decrement
      </button>
      {/* <button onClick={increment, increment }>Increment</button> */}
      {/* <button onClick={decrement}>decrement</button> */}
    </div>
  );
}

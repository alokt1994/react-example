import React from "react";
import useCounter from "./useCounter";

function CounterComponent() {
  const [counter, increment, decrement] = useCounter(0);

  return (
    <div>
      <h1>Custom Hooks counter example</h1>
      <div className="d-flex justify-content-center align-items-center">
        <h1>Counter: {counter}</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-success" onClick={increment}>
          Increment
        </button>
        &nbsp; &nbsp;
        <button className="btn btn-danger" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterComponent;

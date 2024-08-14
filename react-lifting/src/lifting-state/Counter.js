import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

function CounterDisplay({ count }) {
  // We pass the mutable state to the counter display function
  return (
    <h2>
      Lifting State Example <br />
      <br />
      Counter Display function {count}
    </h2>
  );
}

function CounterButton({ count, incrementOnClick }) {
  // We pass the mutable state and increment function from the app to the button function
  return (
    <button onClick={incrementOnClick}>Counter Button function {count}</button>
  );
}

export default function Counter() {
  // We lift state up one level, from the component to the app
  const [count, setCount] = React.useState(0);
  const incrementCounter = () => setCount((current) => current + 1);
  return (
    <div>
      <CounterDisplay count={count} />
      <CounterButton count={count} incrementOnClick={incrementCounter} />
      <h3>Main Function</h3>
    </div>
  );
}

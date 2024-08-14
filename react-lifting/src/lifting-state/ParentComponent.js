import { useState } from "react";
export default function ParentComponent() {
  const [sharedState, setSharedState] = useState(0);

  return (
    <div>
      <ChildComponent1 state={sharedState} setState={setSharedState} />
      <ChildComponent2 state={sharedState} />
    </div>
  );
}

function ChildComponent1({ state, setState }) {
  return (
    <div>
      <p>Child 1: {state}</p>
      <button onClick={() => setState(state + 1)}>Increase</button>
    </div>
  );
}

function ChildComponent2({ state }) {
  return (
    <div>
      <p>Child {state}</p>
    </div>
  );
}

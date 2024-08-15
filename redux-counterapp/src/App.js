// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <h1>Redux Counter App Example</h1>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;

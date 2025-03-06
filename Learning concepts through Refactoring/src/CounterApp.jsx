// This counter app is working, but it has messy code, unnecessary state updates, and poor structure.
// Clean it up, remove redundant code, and improve performance.

// Before refactor

/* 
import React, { useState } from "react";

function CounterApp() {
  let [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={() => increase()}>Increase</button>
      <button onClick={() => decrease()}>Decrease</button>
    </div>
  );
}

export default CounterApp;
*/

// After Refactor

import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default CounterApp;

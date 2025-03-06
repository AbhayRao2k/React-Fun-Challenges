import { useState } from "react";
import CounterApp from "./CounterApp";
import TodoApp from "./TodoApp.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterApp />
      <TodoApp />
    </>
  );
}

export default App;

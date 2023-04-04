import React, { useState } from "react";

function useIncrement(addAmount) {
  const [count, setCount] = useState(0);

  function increase(addAmount) {
    setCount(count + addAmount);
  }

  return [count, increase];
}

function Counter1() {
  const [count, increase] = useIncrement(1);

  return (
    <div>
      <p>Counter 1: {count}</p>
      <button onClick={() => increase(1)}>Increase</button>
    </div>
  );
}

function Counter2() {
  const [count, increase] = useIncrement(2);

  return (
    <div>
      <p>Counter 2: {count}</p>
      <button onClick={() => increase(2)}>Increase</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;

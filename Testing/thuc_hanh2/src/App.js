import React, { useState } from 'react';
 
const App = () => {
  const [counter, setcounter] = useState(0);
 
  return (
    <div>
      <h1>This is counter app</h1>
      <div className="counter-value">Count: {counter}</div>
      <button className="increment" onClick={() => setcounter(counter + 1)}>
        Increment
      </button>
      <button className="decrement" onClick={() => setcounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
}
 
export default App
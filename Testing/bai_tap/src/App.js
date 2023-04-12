import React, { useState } from "react";

const getSum = (value1, value2) => {
  return value1 + value2;
};

const App = () => {
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  const [sum, setSum] = useState(0);

  const add = () => {
    const result = getSum(parseFloat(valueOne), parseFloat(valueTwo));
    setSum(result);
  };

  return (
    <form style={{ margin: "20px" }}>
      <input
        type="number"
        data-testid="value-one-input"
        name="valueOne"
        value={valueOne}
        onChange={e => setValueOne(e.target.value)}
      />
      <input
        type="number"
        data-testid="value-two-input"
        name="valueTwo"
        value={valueTwo}
        onChange={e => setValueTwo(e.target.value)}
      />
      <button
        type="button"
        data-testid="button-add"
        onClick={add}
        aria-label="Add"
      >
        Add
      </button>
      <p className="result" data-testid="result">
        Result: {sum}
      </p>
    </form>
  );
};

export { getSum };
export default App;
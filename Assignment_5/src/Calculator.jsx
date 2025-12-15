import { useState } from "react";

function Calculator() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [result, setResult] = useState("");

  const add = () => {
    setResult(Number(n1) + Number(n2));
  };

  const subtract = () => {
    setResult(Number(n1) - Number(n2));
  };

  const multiply = () => {
    setResult(Number(n1) * Number(n2));
  };

  const divide = () => {
    if (Number(n2) === 0) {
      setResult("Cannot divide by 0");
    } else {
      setResult(Number(n1) / Number(n2));
    }
  };

  return (
    <div className="container">
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={n1}
        onChange={(e) => setN1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={n2}
        onChange={(e) => setN2(e.target.value)}
      />

      <div className="buttons">
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={divide}>Divide</button>
      </div>

      <div>Result: {result} </div>
    </div>
  );
};

export default Calculator;

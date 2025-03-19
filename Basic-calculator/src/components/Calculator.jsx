import { useState } from "react";
import '../styles/Calculator.css'

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^-?\d*\.?\d*$/.test(value) || value === "") {
      setInput(value);
    }
  };

  const getInputValue = () => {
    return input ? parseFloat(input) : 0;
  };

  const add = () => {
    setResult(result + getInputValue());
    setInput("");
  };
  const subtract = () => {
    setResult(result - getInputValue());
    setInput("");
  };
  const multiply = () => {
    setResult(result * getInputValue());
    setInput("");
  };
  const divide = () => {
    if (getInputValue() !== 0) {
      setResult(result / getInputValue());
    } else {
      alert("Cannot divide by zero");
    }
    setInput("");
  };

  const resetInput = () => setInput("");
  const resetResult = () => setResult(0);

  return (
    <div className="calculator-container">
      <h2>Simple Calculator</h2>
      <div className="result">Result: {result}</div>
      <input
        type="text"
        inputMode="decimal"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <div className="buttons">
        <button className="btn operation" onClick={add}>Add</button>
        <button className="btn operation" onClick={subtract}>Subtract</button>
        <button className="btn operation" onClick={multiply}>Multiply</button>
        <button className="btn operation" onClick={divide}>Divide</button>
      </div>
        <div className="buttons">
            <button className="btn operation" onClick={resetInput}>Reset Input</button>
            <button className="btn reset" onClick={resetResult}>Reset Result</button>
        </div>
    </div>
  );
};

export default Calculator;

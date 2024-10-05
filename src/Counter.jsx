import React from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div className="container">
      <div>
        <h1 className="title">{count}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;

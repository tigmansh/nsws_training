import { useState } from "react";

function Counter({ initCount }) {
  const [count, setCount] = useState(initCount);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function double() {
    setCount(count * 2);
  }

  return (
    <div>
      <h2 data-testid="counter-header">Counter</h2>
      <h3 data-testid="count">{count}</h3>
      <button onClick={increment} data-testid="add-btn">+</button>
      <button onClick={decrement} data-testid="subtract-btn">-</button>
      <button onClick={double} data-testid="double-btn">Double</button>
    </div>
  );
}

export default Counter;
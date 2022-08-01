import { useState } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div >
      <button className="button" onClick={increase}>+</button>
      <span className="crimson-text">{count}</span>
      <button className="button" onClick={decrease}>-</button>
    </div>
  );
}

export default Counter;

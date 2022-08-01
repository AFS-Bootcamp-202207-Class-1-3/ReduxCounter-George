import { useState } from "react";
import "./Counter.css";
function Counter(props) {
  const [count, setCount] = useState(0);
  const {updateSum} = props
  const increase = () => {
    setCount(count + 1);
    updateSum(1)
  };

  const decrease = () => {
    setCount(count - 1);
    updateSum(-1)
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

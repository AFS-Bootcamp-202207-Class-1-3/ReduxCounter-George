import { useState } from "react";
import "../../Counter.css";
import {useDispatch} from "react-redux"
import { decrement, increment } from "./counterSlice";
function Counter() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const increase = () => {
    setCount(count + 1);
    dispatch(increment())
  };

  const decrease = () => {
    setCount(count - 1);
    dispatch(decrement())
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

import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import {useState} from "react";
import CounterGroupSum from "./CounterGroupSum";
function MultipleCounter() {
    const [counterSize, setCounterSzie] = useState(0)
    const [sum, setSum] = useState(0)

    const updateCounterSize = (size) => {
        setCounterSzie(size)
    }

    const updateSum = (changeValue) => {
        setSum(sum + changeValue)
    }

    return(
        <div className="multiple-counter">
            <CounterSizeGenerator updateCounterSize={updateCounterSize}/>
            <CounterGroupSum sum={sum}/>
            <CounterGroup counterSize={counterSize} updateSum={updateSum}/>
        </div>
    )
}

export default MultipleCounter
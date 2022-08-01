import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import {useState} from "react";
function MultipleCounter() {
    const [counterSize, setCounterSzie] = useState(0)

    const updateCounterSize = (size) => {
        setCounterSzie(size)
    }
    return(
        <div className="multiple-counter">
            <CounterSizeGenerator updateCounterSize={updateCounterSize}/>
            <CounterGroup counterSize={counterSize}/>
        </div>
    )
}

export default MultipleCounter
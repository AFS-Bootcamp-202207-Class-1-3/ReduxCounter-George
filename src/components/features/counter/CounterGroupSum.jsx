import {useSelector} from "react-redux"
function CounterGroupSum() {
    const sum = useSelector(state => state.counter.sum)
    return(
        <div>
            <span>Sum:</span>
            <span>{sum}</span>
        </div>
    )
}

export default CounterGroupSum
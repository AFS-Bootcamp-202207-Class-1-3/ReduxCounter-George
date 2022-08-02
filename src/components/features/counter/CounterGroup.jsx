import Counter from "./Counter";
import {useSelector} from "react-redux"
function CounterGroup() {
    const size = useSelector(state => state.counter.size)

    // const counters = new Array(parseInt(counterSize)).fill(1)
    // .map((element, index) => (<Counter updateSum={updateSum} key={index}/>))
    const group = Array(size).fill(0);
    return group.map((item, index) => (
        <Counter key={index} size={size}/>
    ));
}

export default CounterGroup
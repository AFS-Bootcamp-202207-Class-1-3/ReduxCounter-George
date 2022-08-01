import Counter from "./Counter";

function CounterGroup(props) {
    const {counterSize, updateSum} = props
    const counters = new Array(parseInt(counterSize)).fill(1).map((element, index) => (<Counter updateSum={updateSum} key={index}/>))

    return(
        <div className="couter-group">
           {counters}
        </div>
    )
}

export default CounterGroup
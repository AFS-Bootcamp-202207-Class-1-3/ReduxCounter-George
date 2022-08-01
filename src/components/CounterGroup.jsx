import Counter from "./Counter";

function CounterGroup(props) {
    const {counterSize} = props
    const counters = new Array(parseInt(counterSize)).fill(1).map((element, index) => (<Counter key={index}/>))

    return(
        <div className="couter-group">
           {counters}
        </div>
    )
}

export default CounterGroup
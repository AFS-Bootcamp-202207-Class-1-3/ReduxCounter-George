import "./CounterSizeGenerator.css"
function CounterSizeGenerator(props) {
    const {updateCounterSize} = props
    const handleChange = (event) => {
        const size = event.target.value;
        updateCounterSize(size)
    }
    return(
        <div>
            <span className="counter-size-generator">Size:</span>
            <input className="input" type="number" onChange={handleChange}/>
        </div>
    )
}

export default CounterSizeGenerator
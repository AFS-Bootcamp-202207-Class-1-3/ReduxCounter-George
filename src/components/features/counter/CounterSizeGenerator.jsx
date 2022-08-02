import "./CounterSizeGenerator.css"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {updateSize} from "./counterSlice"
function CounterSizeGenerator() {
    const [size, setSize] = useState()
    const dispatch = useDispatch()
    const handleChange = (event) => {
        const sizeValue = event.target.value;
        const inputSize = sizeValue === "" ? 0 : parseInt(sizeValue)
        setSize(inputSize)
        dispatch(updateSize(inputSize))
    }
    return(
        <div>
            <span className="counter-size-generator">Size:</span>
            <input className="input" type="number" onChange={handleChange} value={size}/>
        </div>
    )
}

export default CounterSizeGenerator
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    size: 0,
    sum: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.sum += 1
        },
        decrement(state) {
            state.sum -= 1
        },
        updateSize(state, action) {
            state.size = action.payload
        }
    }
})

export const {increment, decrement, updateSize} = counterSlice.actions
export default counterSlice.reducer
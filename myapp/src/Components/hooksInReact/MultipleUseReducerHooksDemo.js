import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1


        case 'decrement':
            return state - 1


        case 'reset':
            return initialState


        default:
            return state
    }

}




const initialStateOne = 0;
const reducerOne = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 5


        case 'decrement':
            return state - 5


        case 'reset':
            return initialState


        default:
            return state
    }

}

function UseReducerHookDemo() {
    const [count, setCount] = useReducer(reducer, initialState)
    const [countOne, setCountOne] = useReducer(reducerOne, initialStateOne)

    return (
        <>
        <div style={{color: "orange", textAlign:'center', marginBottom:'50px'}}>
            <div>count:{count}</div>
            <button onClick={() => setCount('increment')}>increment</button>
            <button onClick={() => setCount('decrement')}>decrement</button>
            <button onClick={() => setCount('reset')}>reset</button>
            </div>
            <div  style={{color: "red", textAlign:'center'}}>
            <div>count:{countOne}</div>
            <button onClick={() => setCountOne('increment')}>increment by 5</button>
            <button onClick={() => setCountOne('decrement')}>decrement by 5</button>
            <button onClick={() => setCountOne('reset')}>reset</button>
            </div>


        </>
    )
}

export default React.memo(UseReducerHookDemo);
import React,{useReducer} from 'react'

const initialState=0;
const reducer=(state, action)=>{
    switch (action) {
        case 'increment':
            return state+1
        

            case 'decrement':
            return state-1
        

            case 'reset':
            return initialState
        
    
        default:
           return state
    }

}
function UseReducerHookDemo() {
   const [count, setCount]= useReducer(reducer, initialState)
  return (
   <>
   <div>count:{count}</div>
<button onClick={()=>setCount('increment')}>increment</button>
<button onClick={()=>setCount('decrement')}>decrement</button>
<button onClick={()=>setCount('reset')}>reset</button>
   </>
  )
}

export default UseReducerHookDemo;
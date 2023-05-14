import React from 'react'
import { useState, useCallback } from 'react'

function UseCallBackHook() {
let [count, setCount]=useState(0);
let [age, setAge]=useState(0)

const incrementCount=useCallback(
  () => {
    setCount(count+1)
  },
  [count]
)


const incrementAge=useCallback(
    () => {
      setAge(age+1)
    },
    [age]
  )
  
// let incrementCount=()=>{
//     setCount(count+1)
// }

  return (
    <>
    <h2>count:{count} </h2>
    <button onClick={()=>incrementCount()}>increment</button>

<h2>age:{age}</h2>
    <button onClick={()=>incrementAge()}>increment</button>

    </>
  )
}

export default React.memo(UseCallBackHook)
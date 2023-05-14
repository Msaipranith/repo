import React from 'react'
import { useState } from 'react'

const submit = () => {

}



function FunctionClick() {

  //   cstate = {
  //     message:'hello',
  //     Age:21
  //  }

const submit=()=>{
  alert('welcome')
  setState('pranith');
}
let obj={name:"praniht", age:21}
console.log(obj)


  const [state, setState ] = useState('sai');
  
  return (

    <>
      
      <h2>{state}</h2>
      <div><button onClick={submit}>FunctionClick</button></div>
    </>
  )
}

export default FunctionClick
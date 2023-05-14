import React from "react";

function Props(props){
  console.log(props)
    return(
       
       <div>
         
         <h2>my name is  {props.ob.forEach(element => {
           <>{element}</>
         })} </h2>
       </div>
    )
}
export default Props;




//destructuring props
/*function Props({name,age}){
  return(
     
     <div>
       
       <h2>my name is  {name} and my age is {age}</h2>
     </div>
  )
}
export default Props;*/
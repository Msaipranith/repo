
import React, { useState } from 'react';



/*function FunctionalComponents(){
return( 
<h2>welcome to functional components</h2>
);
}*/


let FunctionalComponents=()=>{
    

    const [count, setCount] = useState(0);

    const increment=()=>{
  setCount(count+1)
    }

    
    const decrement=()=>{
        if(count>0){
            setCount(count-1)
        }
        else{
            setCount(0)
        }
          }

    return( 
        <>
        
        <h2><button >{count}</button></h2>

        <button onClick={increment}>add</button>
        <button onClick={decrement}>sub</button>
        </>
        );  
}




export default FunctionalComponents ;
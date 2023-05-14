import React from 'react'
import Person from './Person'



function Lists() {
    const arr = ["pranith", "sunny", "di"]

    let personList = [{ name: "pranith", age: 21, skill: "html" },
    { name: "sai", age: 20, skill: "react" },
    { name: "pranit", age: 21, skill: "javascript" },
    { name: "sunny", age: 22, skill: "node" }]

    return (
        <>
           <Person  person={personList}/>
   
        </>
    )
}

export default Lists



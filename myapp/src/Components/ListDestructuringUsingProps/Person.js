import React from 'react'

function Person(props) {
   
  

  return (
      <>
        <div>{ props.person.map((person, index) => <h2 key={index}>  my name is {person.name} and Im  {person.age} years old and I have a little knowledge on {person.skill}</h2>)
    }</div>
 
      </>
 
  )
}

export default Person
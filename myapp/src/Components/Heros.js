import React from 'react'

function Heros({heroname}) {
    if(heroname==="pranit"){
        throw new Error('not a hero')
    }
  return (
    <div><h2>{heroname}</h2></div>
  )
}

export default Heros
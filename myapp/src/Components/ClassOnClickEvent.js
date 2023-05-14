import React, { Component } from 'react'
 //import { useState } from 'react'
class ClassOnClickEvent extends Component {

constructor(props) {
  super(props)

  this.state = {
     message:'hello',
     Age:21
  }
}
submit=()=>{
  this.setState(x={
    message:'welcome',
    Age:23
  })
}
 
  render() {
    return (
    <>
    <h2> {this.state.Age}</h2>
      <div><button onClick={()=>this.submit()}>ClassOnClickEvent</button></div>
      </>
    )
  }
}

export default ClassOnClickEvent
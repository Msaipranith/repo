import React, { Component } from 'react'
import HomeC from './HomeC'
import { UserConsumer } from './UserContext'
 class HomeB extends Component {
  render() {
    return (
        <>
      <UserConsumer>
          {

          
          (data)=>{
              
              return(
                  <>
                  <div>
                      <h1>{data}</h1>
                  </div>
                  </>
              )
          }
        }
      </UserConsumer>
        <HomeC></HomeC>
        </>
   
    )
  }
}

export default HomeB
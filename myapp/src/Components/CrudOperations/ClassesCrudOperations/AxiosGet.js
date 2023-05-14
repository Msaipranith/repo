import React, { Component } from 'react'
import axios from 'axios'
 class AxiosGet extends Component {
constructor(props) {
  super(props)

  this.state = {
     post:[]
  }
}
//in classes crud operations are done in componentDidMount method
componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
         console.log(res)
        this.setState({post:res.data})
    })
    .catch(err=>{
        console.log(err)
    })

}


  render() {
    const {post}=this.state
return(
  <>
  {
    post.length?post.map((e,i)=><h2 key={i}>id {e.id} with title {e.title} </h2> ):null
  }
  </>
)
  }
}

export default AxiosGet
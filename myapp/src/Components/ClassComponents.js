import React from "react";
import { Component } from "react";

/*class Hello extends Component{
render(){
    return <h2>welcome to class components</h2>
}
}
export default Hello;*/



class Helloworld extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'pranit',
         age:21
      }

      this.setState={
          name:'sai'
      }
    }
    render() {

        return (
            <>



<h2> {this.state.name}</h2>
            </>


            /*
            props in class components
             <h2>Hello {this.props.name}</h2>
             */
        )
    }
}

export default Helloworld;
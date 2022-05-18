import React, { Component } from 'react'
import PureCom from './Pure'
import RegCom from './Reg'
export class Parentcom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'akila'
      }
    }
    componentDidMount(){
        setInterval( () => {
            this.setState({
                name:"akila"
            })
        },3000)
    }
  render() {
      console.log('**********************Parent****************')
    return (
      <div>
          <b>*****************************</b>
          <h4>ParentComponent</h4>
          <RegCom name={this.state.name}></RegCom>
          <PureCom name={this.state.name}></PureCom>
      </div>
    )
  }
}

export default Parentcom
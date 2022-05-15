import React, { Component } from 'react'

export class Message extends Component {
    constructor(){
        super()
        this.state={
            message:'Welcome Visitor'
        }
    }
    changeMessage(){
        this.setState({
            message:'Visit Again Peoples'
        })
    }
  render() {
    return (
      <div>
          <h2>{this.state.message}</h2>
          <button onClick={()=>this.changeMessage()}>Visit</button>
      </div>
    )
  }
}


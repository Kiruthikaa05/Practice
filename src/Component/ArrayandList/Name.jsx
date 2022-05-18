import React from 'react'

function State() {
    
    const State =['Andhra','Delhi','TamilNadu','Kerala']
    const States=State.map( object=> <h3>{object}</h3> )
  return (      
    <div>
        <h3>{State[0]}</h3>
        <h3>{State[1]}</h3>
        <h3>{State[2]}</h3>
        <h3>{State[3]}</h3>  
        <p>---------------------------------------------</p>
        <h2>Second Way Access</h2>
        {
            State.map( object=> <h3>{object}</h3> )
        }
        <p>--------------------------------------------</p>
        <h2>Third way Access </h2>
        <h3>{States} </h3>   
    </div>
  )}

export default State
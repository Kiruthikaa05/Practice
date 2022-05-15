import React from "react";

const Greet= (props)=>{
    return(        
        <div className='greet'>       
            <h1>Hello {props.name}!!! form function props</h1>
            <h2>Good morning {props.funname}</h2>
        </div> //more then one line using div             

    )
}
export  default Greet;

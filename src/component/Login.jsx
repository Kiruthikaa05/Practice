import React from 'react'
import { useDispatch } from 'react-redux'
import {login,logout} from './User'

function Login() {
    const dispatch = useDispatch()



  return (
      <div className='Login'>
         <button 
         onClick={ () => {
             dispatch(login ( { name:"kiruthi",age:21, email:"kiruthi@gmail.com"} ))
         }}>Login</button>

        <button 
         onClick={ () => {
             dispatch(logout ())
         }}>Logout</button>
      </div>   
  )}
export default Login
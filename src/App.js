
import './App.css';
import React from 'react';
import { useReducer } from 'react';
import DataFecth from './Component/DataFetch';
import  CompA  from './Component/ReducerandContext/CompA';
import CompB from './Component/ReducerandContext/CompB';

  export const Component=React.createContext()
const initialState=0
const reducer=(state,action)=>{
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
function App() {

  const [ count, dispatch ] = useReducer(reducer,initialState)
  return (
    <Component.Provider 
      value={{ countState:count , countDispatch:dispatch }}>
        <div>
          
      Count = { count }
      <CompA />
      <CompB />
      
      <DataFecth/>
      </div>
    </Component.Provider>
   
  );
}

export default App;

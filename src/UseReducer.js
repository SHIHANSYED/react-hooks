import React, { useReducer } from 'react'

const valueReducer=(state,action)=>{
if(action=== 'increment'){
    return state + 1 ;   
}else{
    return state - 1 ;
}

}

export const UseReducer = () => {

 //same as usestate
 //to manage state 
 //complex state management
 //pattern same as Redux
 //write reducer function outside the main function 
const [value,dispatch]=useReducer(valueReducer,0) 
//value=0 dispatch is action selecting function
 //valueReducer is a function to update the state

return (
    <>
    <h1>useReducer</h1>
    <button onClick={()=>{dispatch('decrement')}}>minus</button>
    <h1>{value}</h1>
    <button  onClick={()=>{dispatch('increment')}}>plus</button>
    </>
  )
}


import { useState } from 'react';

function UseState(){
    const[name,setName]=useState(["raju","radha","mayavi"])
    const[list,setList]=useState("")
    const addName=()=>{
      setName([...name,list])
    }
    return(
      <div>
        <h1>useState</h1>
        <ul>
          {name.map((name)=>(
            <li>{name}</li>
          ))}
        </ul>
        <input type="text" value={list} onChange={(e)=>{setList(e.target.value)}}/>
        <button onClick={addName}> Add Name</button>
      </div>
    )
  }

  export default UseState;
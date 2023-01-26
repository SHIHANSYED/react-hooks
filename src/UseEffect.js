import React, { useEffect } from 'react'

export const UseEffect = () => {

    useEffect(()=>{
console.log("first mount");
return ()=>{ console.log("cleanup");}
    },[])

  return (
  <h1>useEffect</h1>//load or mount ,unload or unmount ,update
  
 
  
  
  )
}

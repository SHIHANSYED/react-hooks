import React, { useEffect, useLayoutEffect } from 'react'

export const UseLayoutEffect = () => {

{/* useLayoutEffect same as useEffect
    useLayoutEffect call first before rendering, useffect after first rendering  */}
    useEffect(()=>{
        console.log("hi from useEffect ");
    })
useLayoutEffect(()=>{
    console.log("hi from useLayoutEffectt..");
},[])

  return (
    <> 
    <h1>UseLayoutEffect</h1>
 
 
     


    </>
  )
}

import React, { useRef } from 'react'

export const UseRef = () => {


    const inputRef=useRef(null);
    const focus=()=>{
        console.log(inputRef.current.value);
        inputRef.current.focus();
    }
  return (
    <>
   <h1>UseRef</h1>
   <p>Shihan</p>
   <input type="text" placeholder='type something..' ref={inputRef} />
   <button onClick={focus}>change name</button>
    </>
  )
}

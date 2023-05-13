import React from 'react';
import { useState,useEffect,useRef } from 'react';
import './index.css';
const Greet=()=>{
    //useRef hook is used to change mutable value
    const [input,setinput]=useState("");
    const num=useRef(0);
    useEffect(()=>{
        num.current=num.current+1;
    });
    return(
        <div className='center2'>
        <input type="text"
         value={input}
        placeholder='Enter a string'
         onChange={(e)=>setinput(e.target.value)}
          className='trial'/>
        <h1>{num.current}</h1>
        
        </div>
    );
}
export default Greet;
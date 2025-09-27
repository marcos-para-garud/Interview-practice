// import react from "react"
// import useDebounce from "../CustomHooks/UseDebounce";
// import {useState} from "react"

// function Debounce(){
//      const [input , setInput] = useState("")
//     const value = useDebounce(2000 , input);
   
//     return(
//         <div>
            
//             <input
//             value={input}
//             type="text"
//             onChange={(e)=>setInput(e.target.value)}
//             />
//             <label>Typed Value: {input}</label>
//             <label>Debounced Value: {value}</label>
//         </div>
//     )

// }
// export default Debounce;






import React, { useState } from "react";
import useDebounce from "../CustomHooks/UseDebounce";

function Debounce() {
  const [input, setInput] = useState("");
  const debouncedValue = useDebounce(input, 500);

  return (
    <div>
      <input
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <label>Typed Value: {input}</label> <br />
      <label>Debounced Value: {debouncedValue}</label>
    </div>
  );
}

export default Debounce;

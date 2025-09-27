// import react from "react";
// import {useEffect , useState} from "react"

// function useDebounce(seconds , input){
//     const [debouncedValue , setDebouncedValue] = useState(input)
//     useEffect(()=>{
//         const timeId = setTimeout(()=>{
//             console.log("text till 5 seconds");
//            setDebouncedValue(input);
            
//         } , seconds)
//         return ()=>clearTimeout(timeId);
//     },[seconds,input])
//     // return [input]
//     return debouncedValue;
// }
// export default useDebounce;


import { useEffect, useState } from "react";

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

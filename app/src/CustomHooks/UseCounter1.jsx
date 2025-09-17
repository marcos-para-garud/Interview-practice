import react, { useState } from "react"

function useCounter1(step){
    let [input , setInput] = useState(0)

    let increment = (prev)=>{
       // prev = prev+1;
       setInput(input+step);
    }
    let decrement = (prev)=>{
       // prev = prev-1;
        setInput(input-step);
        if(input<0){
            setInput(0);
        }
    }

    let reset = ()=>{
        setInput(0);
    }

    return [input , increment , decrement , reset]

}
export default useCounter1
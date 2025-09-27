import react, { useState } from "react"

function useCounter2(step){
    let [input , setInput] = useState(0)

    let increment = (prev)=>{
       // prev = prev+step;
       setInput(input+step);
    }
    let decrement = (prev)=>{
       // prev = prev-step;
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
export default useCounter2
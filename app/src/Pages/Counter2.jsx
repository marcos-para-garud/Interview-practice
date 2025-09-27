import react, { useState } from "react"

function Counter2(){
    let [input , setInput] = useState(0)

    let increment = (prev)=>{
       // prev = prev+1;
       setInput(input+3);
    }
    let decrement = (prev)=>{
       // prev = prev-1;
        setInput(input-3);
        if(input<0){
            setInput(0);
        }
    }

    let reset = ()=>{
        setInput(0);
    }

    return (
        <div className="flex flex-wrap gap-9">
            <button
            onClick={(prev)=>(increment(prev))}>
                +
            </button>
            <div>
                {input>=0 ? input:0}
            </div>
            <button
            onClick={(prev)=>(decrement(prev))}>
                -
            </button>
            <button
            onClick={reset}>
                Reset
            </button>
        </div>
    )

}
export default Counter2
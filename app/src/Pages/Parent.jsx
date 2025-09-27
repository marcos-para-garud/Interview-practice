import React from "react";
import Counter from "./Counter1";
import Counter2 from "./Counter2";
import { useState } from "react";
import useCounter1 from "../CustomHooks/UseCounter1";
import useCounter2 from "../CustomHooks/UseCounter2";

 function Parent(){
    const [input1 , ] = useCounter1(1)
    const [input2] = useCounter2(2)

     let [input , setInput] = useState(0)
    
        let increment = (prev)=>{
           // prev = prev+1;
           setInput(input+1);
        }
        let decrement = (prev)=>{
           // prev = prev-1;
            setInput(input-1);
            if(input<0){
                setInput(0);
            }
        }
    
        let reset = ()=>{
            setInput(0);
        }

    return(
        <div>
            {/* <div className="flex flex-wrap gap-9">
                <div>
            <Counter/>
            </div>
            <div>
            <Counter2/>
            </div>
            
            </div> */}
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

        </div>
    )
}

export default Parent;

import react from "react"
import {useState} from "react"
import useTimer from "../CustomHooks/UseTimer"

function Timer(){
    const [reset , seconds] = useTimer();
  
return(
    <div>
        <button
        type="submit"
        onClick={reset}>
            Reset
        </button>
        <div>{seconds}</div>
        

    </div>
)
}

export default Timer
import react from "react"
import usePrevious from "../CustomHooks/UsePrevious";
import useState from "react";

function PreviousValue(){
    const [input , setInput] = useState("");
    const [PreviousValue] = usePrevious(input , "default previous value");

    return (

        <div>
            
                <label>Current Value</label>
                <input
                type="text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                />
                <button type="submit">Submit</button>
                <label>Previous Value</label>
                <div>{PreviousValue} </div>
           

        </div>
    )
}

export default PreviousValue;
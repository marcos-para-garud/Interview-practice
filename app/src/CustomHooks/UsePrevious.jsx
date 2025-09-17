import react from "react";
import useEffect from "react"

function usePrevious(currentVal , preVal){

    // localStorage.setItem("preVal" , preVal)
    // localStorage.setItem("currVal", currentVal)

    useEffect(()=>{
        localStorage.setItem("preVal", JSON.stringify(currentVal))
    },[currentVal])

    return [JSON.parse(localStorage.getItem("preVal"))]
}

export default usePrevious;

import react from "react"
import {useState} from "react"

function Toggle(){
    const [isTrue , setIsTrue] = useState(false)

    const toggle = ()=>{
        setIsTrue(!isTrue)
    }

return(
    <div>
        <button
        type="toggle"
        onClick={toggle}>
            {isTrue? "ON ":"OFF "}

        </button>

    </div>
)
}

export default Toggle
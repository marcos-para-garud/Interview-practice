import react from "react";
import useLocalStorage from "../CustomHooks/UseLocalStorage";
import {useState , useEffect} from "react";

function LocalStorage(){
    const [key , setKey] = useState(null);
    const [value , setValue] = useState(null);
    const [input , setInput] = useState("");

    const [] = useLocalStorage(key , value);

    return (
        <div>
            <form onSubmit={useLocalStorage()}>
                <input
                type="text"
                value={key}
                onChange={((e)=>setKey(e.target.value))}
                />
                <input
                type="text"
                value={value}
                onChange={((e)=>setValue(e.target.value))}
                />
            </form>

        </div>
    )

}

export default LocalStorage;
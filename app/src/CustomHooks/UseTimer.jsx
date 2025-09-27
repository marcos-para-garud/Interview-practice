import react from "react"
import {useState , useEffect} from "react"

function useTimer(){
   
    const [seconds , setSeconds] = useState(0);
    // useEffect(()=>{
    //     setInterval(()=>{
    //         setSeconds(seconds+1);
    //     } , 1000)
    // },[])
    // const reset = ()=>{
    //     setSeconds(0);
    // }
    useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // return () => clearInterval(intervalId); // cleanup
  }, []);


   const reset = ()=>{
        setSeconds(0);
    }
    
  
return [reset , seconds]
}

export default useTimer
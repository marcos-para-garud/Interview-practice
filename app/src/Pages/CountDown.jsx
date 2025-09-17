import React from "react";
import { useState , useEffect } from "react";

const CountDown = ()=>{

    const [hour , setHour] = useState(0)
    const [minute , setMinute] = useState(0)
    const [sec , setSec] = useState(0)

    const [timeLeft , setTimeLeft] = useState(0)
    const [status , setStatus] = useState("idle")

    useEffect(()=>{
        let timer;
        if(status==="running" && timeLeft>0)
        {
            timer = setInterval(() => {
                setTimeLeft((prev)=>prev-1)
            }, 1000);
        }
           if (timeLeft === 0 && status === "running") {
      setStatus("idle"); // stop when finished
    }
        return ()=>clearInterval(timer)
    } , [status , timeLeft])

    const normalizeTime = (h , m , s)=>{
        let totalSeconds = Number(h)*60*60 + Number(m)*60 + Number(s)
        return totalSeconds;
    }

    const formatTime = ()=>{
        let h = Math.floor(timeLeft/3600);
        let m = Math.floor((timeLeft%3600)/60)
        let s = timeLeft % 60;
  return [h, m, s];
    } 

    const Reset = ()=>{
        setHour(0)
        setMinute(0)
        setSec(0)
        setTimeLeft(0)
        setStatus("idle")
    }

    const Start = ()=>{
          const total = normalizeTime(hour, minute, sec);
    setTimeLeft(total);
    setStatus("running");
    }

    const Pause = ()=>{
        setStatus("paused")
    }

    const Continue = ()=>{
           if (timeLeft > 0) {
      setStatus("running");
    }
    }

    const [h , m , s] = formatTime();
return (
    <div>
        <h1>Count Down</h1>
          {status === "idle" && (
        <div>
            <input
            type="number"
            value={hour}
            onChange={(e)=>setHour(Number(e.target.value))}/>
            <input
             type="number"
            value={minute}
            onChange={(e)=>setMinute(Number(e.target.value))}/>
            
            <input
             type="number"
            value={sec}
            onChange={(e)=>setSec(Number(e.target.value))}/>
        </div>

          )}

             <h2 style={{ fontSize: "2rem", margin: "1rem 0" }}>
        {h} : {m} : {s}
      </h2>
        <div className="flex flex-row gap-7">
            
            {status==="running" && <button onClick={Pause}>Pause</button> }
            {status==="paused" && <button onClick={Continue}>Continue</button> }
            {status==="idle" && <button onClick={Start}>Start</button> }
            <button 
            onClick={Reset}>Reset</button>
        </div>

    </div>
)
}

export default CountDown;
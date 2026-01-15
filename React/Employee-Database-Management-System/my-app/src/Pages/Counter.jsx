import React, { useEffect, useState } from "react";

export default function Counter() {

    const [hour , setHour] = useState(0);
    const [min , setMin] = useState(0);
    const [sec , setSec] = useState(0);
    const [totalSec , setTotalSec] = useState(0);
    const [isRunning , setIsRunning] = useState(false);

    const normalise = (h , m , s)=>{
        let total = h*60*60 + m*60 + s;
        const nh = Math.floor(total / 3600);
        const nm = Math.floor((total % 3600)/60);
        const ns = (total % 60);
        return {nh , nm , ns , total};
    }
    
    const handleStart = (h , m , s) => {
        const {nh , nm , ns , total} = normalise(h , m , s);
        setHour(nh);
        setMin(nm);
        setSec(ns);
        setTotalSec(total);
        setIsRunning(true);
    }

    const handleReset = () => {
        setHour(0);
        setMin(0);
        setSec(0);
        setTotalSec(0);
        setIsRunning(false);
    }

    useEffect(()=>{
        if (!isRunning || totalSec <= 0) return;
        const timer = setInterval(()=>{
            setTotalSec((prev)=>prev-1);
        } , 1000)
        return () => clearInterval(timer);
    } , [isRunning , totalSec])

    useEffect(() => {
        const h = Math.floor(totalSec / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = totalSec % 60;

        setHour(h);
        setMin(m);
        setSec(s);
    }, [totalSec]);


    return(
        <div className="flex flex-col justify-center items-center h-screen bg-blue-600">
            <div> 
                <h1 className="text-4xl text-white">Count Down Timer</h1> 
            </div>
            <div className="mt-3"
            >
            <span className="rounded-md">
                <input className="rounded-sm"
                value={hour}
                onChange={(e)=>setHour(Number(e.target.value))}>
                </input> 
                </span>
            <span className="mx-2 text-white">:</span>
            <span className="rounded-md">
                <input className="rounded-sm"
                value={min}
                onChange={(e)=>setMin(Number(e.target.value))}>
                </input> 
                </span>
            <span className="mx-2 text-white">:</span>
            <span>
                <input className="rounded-sm"
                value={sec}
                onChange={(e)=>setSec(Number(e.target.value))}>
                </input>
            </span>
            </div>
            <div className="mt-3">
                <button className="bg-green-500 text-white h-8 p-1 px-4 rounded-md m-3 hover:bg-green-900"
                onClick={()=> {
                    if(isRunning)
                    {
                        setIsRunning(false)
                    }
                    else
                    {
                        handleStart(hour , min , sec)
                    }
                }
                    
                    }>
                    {isRunning ? "Pause" : "Start"}
                </button>
                <button className="bg-red-700 text-white h-8 p-1 px-4 rounded-md m-3 hover:bg-red-950"
                onClick={handleReset}>Reset</button>
            </div>

        </div>
    )
}
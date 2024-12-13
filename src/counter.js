import { useEffect, useState } from "react";

function Counter(){

    const [counter, setCounter] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    // const [intervalId, setIntervalId] = useState(null);


    useEffect(()=>{
        let intervalId;
        if(isCounting){
            intervalId = setInterval(()=>{
                setCounter((prevValue)=>prevValue + 1);
            },1000);
        }

        else{
            clearInterval(intervalId)
            // setCounter(0);
        }

        return ()=> clearInterval(intervalId);
    },[isCounting])

    const start = () => setIsCounting(true);
    const stop = () => setIsCounting(false);
    const reset = () => {
        setIsCounting(false);
        setCounter(0);
    };

    return (
        <>
            <div>Counter : {counter}</div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </>
        

    );
}

export default Counter;
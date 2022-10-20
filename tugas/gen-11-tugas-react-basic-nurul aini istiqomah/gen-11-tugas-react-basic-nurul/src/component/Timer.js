import React from "react";
import Button from "./Button";

//fungsi timer
const Timer = () => {
    const [second, setSecond]= React.useState(0);
    const [minute, setMinute]= React.useState(0);
    
    //Buat timernya bisa jalan
    var timer;
    React.useEffect(()=> {
        timer= setInterval(()=> { 
            setSecond(second+1);
            
            //kondisi detik pindah ke menit
            if(second==59){
                setMinute(minute+1);
                setSecond(0);
            }
        },1000)

        return ()=> clearInterval(timer);
    });


//fungsi restart
const restart = () => {
    setSecond(0);
    setMinute(0);
}

//fungsi stop
const stop = () => {
    clearInterval(timer);
}

    return (
        <center>
        <div className="bg-rose-400 m-5 p-10 inline-block text-center rounded-lg shadow-xl">
            <h1 className="font-semibold text-xl text-white mb-3"> Timer in React </h1>
            <h2 className="text-lg"> {minute}:{second} </h2>
        </div>
        <br/>

        <Button buttonName= "Restart"
            handleClick={restart}/>
        <Button buttonName= "Stop"
            handleClick={stop}/>
        </center>

    )
}
export default Timer;
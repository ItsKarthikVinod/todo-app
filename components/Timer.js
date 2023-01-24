import React, { useEffect, useState } from 'react'

function Timer() {
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [displayMessage, setDisplayMessage] = useState(false)


    useEffect(()=>{
        let interval = setInterval(()=> {
            clearInterval(interval)
            if (seconds===0){
                if (minutes !== 0){
                    setSeconds(59)
                    setMinutes( minutes -1)
                }else{
                    let minutes = displayMessage ? 24 : 4;
                    let seconds = 59

                    setSeconds(seconds)
                    setMinutes(minutes)
                    setDisplayMessage(!displayMessage)
                }
            }else{
                setSeconds(seconds-1)
            }
        }, 1000)
        
    },[seconds])
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return (
    <div className='flex flex-col items-center justify-center my-20'>
        <div>
            {displayMessage && <div>Break time! New session starts in:</div>}
        </div>
        <div className='text-6xl align-center font-bold'>{timerMinutes}:{timerSeconds}</div>
        <code className='my-10 text-center'>❓  This features requires you to focus on a task for 25 minutes and then will grant you a 5 minutes break. Get your tasks done faster and much efficiently with this feature. ↪ Quick Tip: Refresh the page to restart the timer.</code>
        
    </div>
  )
}

export default Timer
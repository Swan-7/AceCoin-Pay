import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [minutes, setMinutes] = useState(5)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) { //setting count-down timer functionality
                setSeconds(seconds - 1)
            } if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1)
                    setSeconds(59)
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval)
        }
    })

    return (
        <>
            {minutes === 0 && seconds === 0 ? (
                <>
                    <span className='bg-blue-950 text-white w-7 h-10 rounded flex items-center justify-center'>0</span>
                    <span className='bg-blue-950 text-white w-7 h-10 rounded flex items-center justify-center'>0</span>
                    <span className='text-md flex items-center mx-px'>:</span>
                    <span className='bg-blue-950 text-white w-7 h-10 rounded flex items-center justify-center'>0</span>
                    <span className='bg-blue-950 text-white w-7 h-10 rounded flex items-center justify-center'>0</span>
                </>
            ) : (
                <>
                    <div className="flex gap-0.5">
                        <span className="bg-blue-950 text-white w-7 h-10 rounded flex items-center justify-center">
                            {minutes < 10 ? "0" : minutes.toString().charAt(0)}
                        </span>
                        <span className="bg-blue-950 text-white w-7 h-10 rounded flex items-center justify-center">
                            {minutes < 10 ? minutes : minutes.toString().charAt(1)}
                        </span>
                    </div>

                    <span className='text-md flex items-center mx-px'>:</span>
                    <div className="flex gap-0.5">
                        <span className="bg-blue-950 text-white w-7 h-10 rounded flex items-center justify-center">
                            {seconds < 10 ? "0" : seconds.toString().charAt(0)}
                        </span>
                        <span className="bg-blue-950 text-white w-7 h-10 rounded flex items-center justify-center">
                            {seconds < 10 ? seconds : seconds.toString().charAt(1)}
                        </span>
                    </div>


                </>
            )}
        </>
    )
}

export default Timer


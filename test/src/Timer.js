import React, {useState, useEffect} from 'react'

function Timer() {
    const [timer, setTimer] = useState(0)

    useEffect( () => {
       return setTimer(prevTimer => prevTimer +1)
    ,1000})

    return (
        <div>
            <h1>test</h1>
            {timer}
        </div>
    )
}

export default Timer

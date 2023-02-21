import React, { useState } from 'react'

const Component01 = () => {

    const [timeHours, setTimeHours] = useState(0);
    const [timeStats, setTimeStats] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const handleOnChange = (event) => {
        setTimeHours(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const timeMinutes = timeHours * 60;
        const timeSeconds = timeHours * 60 * 60;
        setTimeStats({
            hours: timeHours,
            minutes: timeMinutes,
            seconds: timeSeconds
        })
    }

    return (
        <div>
            <h2>Ingresa una hora en segundos</h2>
            <form onSubmit={handleOnSubmit}>
                <input type="number" step=".1" onChange={handleOnChange} />
                <button>Calcular tiempo</button>
            </form>
            <div>
                <h4>Tiempo en horas: {timeStats.hours}</h4>
                <h4>Tiempo en minutos: {timeStats.minutes}</h4>
                <h4>Tiempo en segundos: {timeStats.seconds}</h4>
            </div>
        </div>
    )
}

export default Component01
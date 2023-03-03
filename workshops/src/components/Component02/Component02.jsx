import React, { useState } from 'react'

const Component02 = () => {
    const [timeCall, setTimeCall] = useState(0);
    const [total, setTotal] = useState(0);

    const handleOnChange = (event) => {
        setTimeCall(parseInt(event.target.value))
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (timeCall < 3) {
            setTotal(300)
        } else if (timeCall === 3) {
            setTotal(timeCall * 50)
        } else {
            const difference = timeCall - 3;
            setTotal(timeCall * 50 + difference * 50)
        }
    }

    return (
        <div>
            <h2>Ingrese tiempo en minutos de la llamada</h2>
            <form onSubmit={handleOnSubmit}>
                <input type="number" step=".1" onChange={handleOnChange} />
                <button>Calcular total</button>
            </form>
            <h3>Total precio llamada: ${total}</h3>
        </div >
    )
}

export default Component02
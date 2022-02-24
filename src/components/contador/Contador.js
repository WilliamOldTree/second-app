import React, { useState } from 'react'


export default props => {

    const [numero, setNumero] = useState(props.inicial)

    const inc = () => {
        if (numero >= props.limiteMax) {
            console.log("Limite maximo ultrapassado");
            return
        }
        setNumero(numero + props.passo)
    }



    const dec = () => {
        if (numero <= props.limiteMin) {
            console.log("Limite minimo ultrapassado")
            return
        }
        setNumero(numero - props.passo)
    }



    return (
        <div>
            <h2>{numero}</h2>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>

    )//end return

}
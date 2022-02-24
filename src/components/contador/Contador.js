import React, { useState } from 'react'


export default props => {
    const [numero, setNumero] = useState(props.inicial)

    const inc = () => setNumero(numero + props.passo)
    const dec = () => setNumero(numero - props.passo)
    return (
        <div>
            <h2>{numero}</h2>
            <button onclick={inc}>+</button>
            <button onclick={dec}>-</button>
        </div>

    )//end return

}
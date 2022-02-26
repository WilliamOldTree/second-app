import React from "react"
export default props => {// funcao que recebe as propriedades do elemento pai

    return (// retorno da funcao props, o que sera redenrizado

        <>
            <h2>{props.a}</h2>
            <h2>{props.b}</h2>
        </>

    )
}
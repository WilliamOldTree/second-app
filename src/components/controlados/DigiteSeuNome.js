import React, { useState } from "react";

export default props =>{
    const [nome, setNome] = useState("");
    return(
        <div>
            <h2>
                {nome}
            </h2>
            <input type="text" placeholder="Digite seu nome" value="name" onChange={event=> setNome(event.target.value)}/>
        </div>
    )
}
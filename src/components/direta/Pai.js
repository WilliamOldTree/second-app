import React from "react";
import Filho from "./Filho"


function Pai (props){
    
    //variaveis locais para passar a funcao
    let x = 13;
    let y = 100; 
    return(
        <>
            <Filho a={x} b={y}/>
            <Filho a={x+100} b={y+200}/>
        </>
    );

}

export default Pai;
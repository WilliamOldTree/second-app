import React, { useState } from "react";

export default props => {
    return (
        <>
            <div>
                {props.modelo}          <br/>
                {props.marca}           <br/>
                {props.cor}             <br/>
                {props.ano}             <br/>
                {props.portas}          <br/>
                {props.combustivel}     <br/>
                {props.cambio}          <br/>
                {props.aro}             <br/>
                {props.potencia}        <br/>
                {props.preco}           <br/>
            </div>
        </>
    )
}

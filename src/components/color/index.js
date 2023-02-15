import React from "react";

const inputColor = (props) => {
    // criar uma função para armazenar o valor do input 
    // chamar com 'onChange={função}'
    return (
        <div className="flex justify-between gap-2">
            <label>{props.label}</label>
            <input type="color" value={props.valor} onChange={event => props.setCor(event.target.value)} required={props.obrigatorio} placeholder={props.placeholder} className="border-none"></input>
        </div>
    )
}
export default inputColor;
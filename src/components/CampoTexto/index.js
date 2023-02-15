import React from "react";

const CampoTexto = (props) => {
    // criar uma função para armazenar o valor do input 
    // chamar com 'onChange={função}'
    return (
        <div className="flex flex-col gap-2">
            <label>{props.label}</label>
            <input value={props.valor} onChange={event => props.seAlterado(event.target.value)} required={props.obrigatorio} placeholder={props.placeholder} className="bg-white p-2 rounded-md"></input>
        </div>
    )
}
export default CampoTexto;
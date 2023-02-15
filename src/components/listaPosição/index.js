import React from "react";

    const Lista = ({label, seAlterado, obrigatorio, valor, itens }) => {
    return(
        <div className="flex flex-col gap-4">
            <label>{label}</label>  
            <select onChange={event => seAlterado(event.target.value)} value={valor} required={obrigatorio} className="bg-white p-2 rounded-md"> 
                {itens.map(item => <option key={item} className="bg-gray-100">{item}</option>)}
            </select>
        </div>
    )
}
export default Lista;
import React, { useState } from "react";
import Botao from "../botao";
import CampoTexto from "../CampoTexto";

const FormularioTime = () => {
    const [nomeTime, setNomeTime] = useState("");
    const [corFundo, setCorFundo] = useState("");
    const [corCard, setCorCard] = useState("")
    return(
        <section className="flex justify-center">
            <form className="m-8 p-10 bg-gray-100 shadow-md rounded-2xl flex flex-col justify-center gap-2 lg:w-[50%]"> 
                <h1>Preencha os campos para criar seus times!</h1>
                <CampoTexto 
                    obrigatorio={true} 
                    placeholder="Digite o nome do time" 
                    label="Nome"
                    valor= {nomeTime}
                    seAlterado={valor => setNomeTime(valor)}
                />
                <div className="flex justify-between">
                    <label>Selecione cor de fundo </label>
                    <input type="color"></input>
                </div>
                <div className="flex justify-between">
                    <label>Selecione cor do card</label>
                    <input type="color"></input>
                </div>
                <Botao texto="Criar Time"/>
            </form>
        </section>
    )
}
export default FormularioTime;
import React, { useState } from "react";
import CampoTexto from "../CampoTexto";
import Lista from "../listaPosição";
import Botao from "../botao"
import InputColor from "../color";

const Formulario = (props) => {         
    const posicao = [
        "Atacante",
        "Goleiro",
        "Zagueiro",
        "Tecnico",
        "Capitão"
    ]
    const listaTitularReserva = [
        "Titular",
        "Reserva"
    ]
    const [nome, setNome] = useState("");
    const [imagem,setImagem] = useState("");
    const [cargo, setCargo] = useState(posicao[0]);
    const [time, setTime] = useState(props.times[0]);
    const [titularReserva, setTitularReserva] = useState(listaTitularReserva[0]);

    const [nomeTime, setNomeTime] = useState("");
    const [corFundo, setCorFundo] = useState("");
    const [corCard, setCorCard] = useState("")

    const aoSalvar = (evento) => {
        //previne o comportamento padrão de recarregar a pagina ao submeter o formulario
        evento.preventDefault()
        const index = props.index;
        props.novoAtleta({
            nome,
            imagem,
            cargo,
            time,
            titularReserva,
            index,
        })
    }
    return(
        <section className="flex flex-col content-center ">
            <form onSubmit={aoSalvar} className="m-8 p-10 bg-gray-100 shadow-md rounded-2xl flex flex-col justify-center gap-2 lg:w-[50%]"> 
                <h1>Preencha os campos para escalar seus times!</h1>
                <CampoTexto 
                    obrigatorio={true} 
                    placeholder="Digite o nome do atleta ..." 
                    label="Nome"
                    valor= {nome}
                    seAlterado={valor => setNome(valor)}
                />
                    
                <CampoTexto
                    placeholder="Digite a url ..." 
                    label="url da imagem"
                    valor={imagem}
                    seAlterado={valor => setImagem(valor)}
                />
                

                <Lista
                    obrigatorio={true} 
                    label="Selecione a posição" 
                    itens={posicao}
                    valor={cargo}
                    seAlterado={valor => setCargo(valor)}
                />
                {(cargo !== 'Tecnico') && (
                    <Lista
                        obrigatorio={true}
                        valor={titularReserva}
                        itens={listaTitularReserva}
                        label="Selecione como:"
                        seAlterado= {valor => setTitularReserva(valor)}
                    />
                )}

                {props.erroTitular && (
                    <p className='text-orange text-sm'>Voce já tem 11 titulares</p>
                )}

                {props.erroTecnico && (
                    <p className='text-orange text-sm'>Esse time já tem um tecnico</p>
                )}

                {props.erroCapitao && (
                    <p className='text-orange text-sm'>Esse time já tem um Capitão!</p>
                )}
                <Lista 
                    obrigatorio={true} 
                    label="Selecione o time do jogador" 
                    itens={props.times}
                    valor={time}
                    seAlterado={valor => setTime(valor)}
                />
                <Botao texto="escalar"/>
            </form>
            <form className="m-8 p-10 bg-gray-100 shadow-md rounded-2xl flex flex-col justify-center gap-2 lg:w-[50%]" 
            onSubmit={(evento) => {
                evento.preventDefault()
                props.criarTime({nome: nomeTime, corSecundaria: corFundo, corPrimaria: corCard})

            } } > 
                <h1>Preencha os campos para criar seus times!</h1>
                <CampoTexto 
                    obrigatorio={true} 
                    placeholder="Digite o nome do time" 
                    label="Nome"
                    valor={nomeTime}
                    seAlterado={valor => setNomeTime(valor)}
                />
                <InputColor
                    obrigatorio={true}
                    label="Cor de fundo"
                    valor={corFundo}
                    setCor={setCorFundo}
                />
                <InputColor
                    obrigatorio={true}
                    label="Cor do card"
                    valor={corCard}
                    setCor={setCorCard}
                    
                />
                <Botao texto="Criar Time"/>
            </form>
        </section>
    )
}
export default Formulario;
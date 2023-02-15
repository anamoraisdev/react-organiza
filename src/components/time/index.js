import React from "react";
import Card from "../card";
import { v4 as uuidv4 } from 'uuid';

const Times = ({atletas, time, mudarCor, atletaa, setAtleta}) => {
    return(
        atletas.length > 0 &&  <section style={{backgroundColor: time.corSecundaria}} className="p-12 text-center ">
           <input onChange={evento => mudarCor(evento.target.value, time.nome, 'secundaria' )} value={time.corSecundaria} type="color" ></input>
           <h3  className="p-3 m-3 text-white"> {time.nome}</h3>
           <div className="flex justify-around flex-wrap gap-3">
                {atletas.map(atleta => 
                    <Card 
                        key={atleta.index}
                        atleta={atletaa}
                        setAtleta={setAtleta} 
                        nome={atleta.nome} 
                        cargo={atleta.cargo} 
                        imagem={atleta.imagem}
                        index={atleta.index}
                        titularReserva={atleta.titularReserva}
                        time={time}
                        mudarCor={mudarCor}
                    />
                )}
           </div>
        </section>
    )
}
export default Times;
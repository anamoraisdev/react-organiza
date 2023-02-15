import Banner from './components/Banner';
import Formulario from './components/Formulario';
import {React, useState} from 'react';
import Times from './components/time';


function App() {
  if(!JSON.parse(localStorage.getItem('times'))){
    localStorage.setItem('times', JSON.stringify([
    {
      nome: "Brasil",
      corPrimaria:"#96E831",
      corSecundaria:"#F0E95C",
    },
    {
      nome:"Argentina",
      corPrimaria: "#1B5AEB",
      corSecundaria:"#6196EB"
    },
    {
      nome:"França",
      corPrimaria: "#BD1E19",
      corSecundaria:"#3B64BD"
    }
  ]))}
  const [times, setTimes] = useState(JSON.parse(localStorage.getItem('times')));
  const [atleta, setAtleta] = useState(JSON.parse(localStorage.getItem('atleta'))|| []);
  const [erroTecnico, setErroTecnico] = useState(false);
  const [erroCapitao, setErroCapitao] = useState(false);
  const [erroTitular, setErroTitular] = useState(false);

  const adicionarJogador = (atletaEvent) => {
    console.log(atletaEvent)
    const podeEscalar = verificarEscalacao(atletaEvent)
    if (podeEscalar) {
      setAtleta([...atleta, atletaEvent])
      localStorage.setItem('atleta', JSON.stringify([...atleta, atletaEvent]))
    }
  }
 
  const verificarEscalacao = (atletaEvent) => {
    let titulares = atleta.filter(a => a.titularReserva === 'Titular' && a.time === atletaEvent.time);
    if (atletaEvent.cargo === 'Tecnico' && atleta.some(atleta => atleta.cargo === 'Tecnico' && atleta.time === atletaEvent.time)) {
      setErroTecnico(true);
      setTimeout(() => {
        setErroTecnico(false);
      }, 2000)
      return false;

    } else if (atletaEvent.cargo === 'Capitão' && atletaEvent.titularReserva === 'Titular' && atleta.some(atleta => atleta.cargo === "Capitão" && atleta.time === atletaEvent.time && atleta.titularReserva === 'Titular')){
      setErroCapitao(true);
      setTimeout(() => {
        setErroCapitao(false);
      }, 2000);
      return false;
    } else if (atletaEvent.cargo === 'Capitão' && atletaEvent.titularReserva === 'Reserva' && atleta.some(atleta => atleta.cargo === "Capitão" && atleta.time === atletaEvent.time && atleta.titularReserva === 'Reserva')){
      setErroCapitao(true);
      setTimeout(() => {
        setErroCapitao(false);
      }, 2000);
      return false;
    } else if (atletaEvent.titularReserva === 'Titular' && titulares.length === 11){
      setErroTitular(true);
      setTimeout(() => {
        setErroTitular(false);
      }, 2000);
      return false;
    }
    else return true;
  }
  const mudarCorTime = (cor, nome, seletor) => {
    const novosTimes = times.map(time => {
      if(time.nome === nome && seletor === 'secundaria'){
        time.corSecundaria = cor;
      }else if (time.nome === nome && seletor === 'primaria'){
        time.corPrimaria = cor;
      }
      return time;
    })
    setTimes(novosTimes)
    localStorage.setItem('times', JSON.stringify(novosTimes))
  }

  const criarTime = (novoTime) => {
    if(times.find((time) => time.nome === novoTime.nome)) return
    const novosTimes = [...times, novoTime]
    setTimes(novosTimes)
    localStorage.setItem('times', JSON.stringify(novosTimes))
  }

  return (
    <div className="">
        <Banner/>
        <div className=''>
          <Formulario
            criarTime={criarTime}
            index={atleta.length + 1}
            erroTitular={erroTitular} 
            erroCapitao={erroCapitao} 
            erroTecnico={erroTecnico} 
            times={times.map(time => time.nome )} 
            novoAtleta={atletaEvent => adicionarJogador(atletaEvent)}
          />
        </div>
        
        {times.map(time => <Times
          mudarCor={mudarCorTime}
          atletaa={atleta}
          setAtleta={setAtleta} 
          key={time.nome}
          time={time}
          atletas={atleta.filter(atletaEvent => atletaEvent.time === time.nome)}
        /> )}
    </div>
  );
}

export default App;

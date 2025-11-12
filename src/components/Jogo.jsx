import { useState, useEffect, useRef } from 'react';
import perguntas from '../data/perguntas.js';
import Pergunta from './uiElements/Pergunta.jsx';
import styled from 'styled-components';

const JogoContainer = styled.div`
  position: absolute;
  background-image: url(/fundo_jogo.png);
  background-size: cover;
  background-repeat:no-repeat;
  background-position:center;
  display: grid;
  place-content:center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

function embaralharArray(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

export default function Jogo({ globalConfig, dadosJogador, setDadosJogador, endGame }) {
    const [perguntasFiltradas, setPerguntasFiltradas] = useState([]);
    const perguntasEmbaralhadas = useRef(embaralharArray(perguntas));
    const [perguntaAtualIndex, setPerguntaAtualIndex] = useState(0);
    const [timerFinalizado, setTimerFinalizado] = useState(false);
    const [msg, setMsg] = useState("")
    const [respondida, setRespondida] = useState(false)

    function responder(idx, pergunta){
        setRespondida(true)
        pergunta.respondendo = true;
        if(perguntaAtualIndex <= globalConfig.qnt_questoes){
            if(idx == pergunta.corretas[0]){
                setMsg("VOCÊ ACERTOU!")
                setDadosJogador({...dadosJogador, pontos: dadosJogador.pontos + 1})
                setTimeout(() => {
                    setMsg("")
                }, 2000)
            } else {
                setMsg("Você errou!")
                setTimeout(() => {
                    setMsg("")
                }, 2000)
            }

            setTimeout(() => {
                setPerguntaAtualIndex((prev) => prev + 1)
                setRespondida(false)
        pergunta.respondendo = false;

            }, 2000)
        }
        
    }
    
    useEffect(() => {
        const filtradas = perguntasEmbaralhadas.current.slice(0, globalConfig.qnt_questoes);
        setPerguntasFiltradas(filtradas);
    }, [globalConfig]);

    useEffect(()=> {
        if(perguntaAtualIndex == globalConfig.qnt_questoes){
            endGame()
        }
    }, [perguntaAtualIndex])

    useEffect(() => {
        if(!respondida && timerFinalizado){
            setPerguntaAtualIndex((prev) => prev + 0.5)
            setTimerFinalizado(false)
        }
    }, [timerFinalizado])

    return (
        <JogoContainer>
            {perguntasFiltradas.map((item, index) => (
                <div key={index}>
                    <Pergunta index={index} item={item} perguntaAtualIndex={perguntaAtualIndex} responder={responder} msg={msg} setTimerFinalizado={setTimerFinalizado} globalConfig={globalConfig}/>
                </div>
            ))}
        </JogoContainer>
    )
}
import styled from "styled-components"
import CountdownTimer from "./CoutdownTimer";

const COR_BASE = "#68216D";
const BTN_FONT_COLOR = "#DD8CEF";

const TimerWrapper = styled.div`
    background-color: ${COR_BASE};
    color: ${BTN_FONT_COLOR};
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    height: 100px;
    display: grid;
    place-content: center;
    border-radius: 50%;
    transform: translate(50%, -50%);
    box-shadow: 0 4px 8px rgba(0,0,0,0.5);
`;

const PerguntaEstilizada = styled.div`
    display: ${(props) => (props.$index === props.$perguntaatualindex ? 'flex' : 'none')};
    flex-direction: column;
    border: solid 0.5px white;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 32px;
    border-radius: 8px;
    font-family: sans;
    user-select: none;
    backdrop-filter: blur(6px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.5);
    max-width: 500px;
`;

const Texto = styled.h2`
    font-weight: 200;
    background-color: white;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.5);
`;

const Respostas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Resposta = styled.button`
    padding: 16px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    background-color:${($props => $props.bg)};
    color: ${($props => $props.color)};
    font-size: 20px;

    &:hover{
        background-color: #ecc664ff;
    }
`;

export default function Pergunta({item, index, perguntaAtualIndex, responder, msg, setTimerFinalizado, globalConfig}){
    return (
        <PerguntaEstilizada key={index} $index={index} $perguntaatualindex={perguntaAtualIndex}>
            <Texto>{item.pergunta}</Texto>
            <Respostas>
                {item.opcoes.map((opcao, opcaoIndex) => (
                    <Resposta color={item.respondendo ? "white" : COR_BASE} bg={!item.respondendo ? "white" : (item.corretas[0] == opcaoIndex ? "#9dec6d" : "#ff8d8d") }  key={opcaoIndex} onClick={() => responder(opcaoIndex, item)}>{opcao}</Resposta>
                ))}
            </Respostas>
            <p style={{width: "100%", textAlign: "center", fontSize:"18px", fontWeight:"bold", color: (msg == "VOCÊ ACERTOU!") ? "#78E627" : "red", background: BTN_FONT_COLOR, padding: (msg ? 8 : 0)}}>{msg}</p>
            <TimerWrapper>
                <CountdownTimer setTimerFinalizado={setTimerFinalizado} globalConfig={globalConfig} perguntaAtualIndex={perguntaAtualIndex}/>
            </TimerWrapper>
        </PerguntaEstilizada>
    )
}
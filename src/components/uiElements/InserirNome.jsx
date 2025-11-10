import styled from "styled-components";
import CustomButton, { Button } from "./customButton";

const COR_BASE = "#68216D";
const BTN_FONT_COLOR = "#DD8CEF";
const COR_SEC = "#4b1a0c";

const Container = styled.div`
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
`;

const Iniciar = styled(Button)`
    background-color: ${COR_BASE};
    color: ${BTN_FONT_COLOR};
    font-family: "La Belle Aurore", cursive;
    font-size: 25px;
    border-radius: 8px;
    border: none;
`;

export default function InserirNome({ startGame, setDadosJogador, dadosJogador }){
    return (
        <Container>
            <input style={{padding: "16px", borderRadius: "8px", outline: "none", border: `solid 2px ${COR_SEC}`}} type="text" name="nome" id="nome" placeholder="Insira seu primeiro nome" onChange={(e) => setDadosJogador({...dadosJogador, nome: e.target.value})}/>
            <Iniciar onClick={startGame}>Iniciar</Iniciar>
        </Container>
    )
}
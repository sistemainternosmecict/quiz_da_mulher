import styled from "styled-components";
import CustomButton, { Button} from "./customButton";
import Opcoes from "./Options";
import { useState } from "react";
import Titulo from "/logo_sm_branco.png";
import BarraCreditosPrefeitura from './BarraCreditosPrefeitura';

const COR_BASE = "#68216D";
const BTN_FONT_COLOR = "#DD8CEF";

const MenuContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 3.5em;
  z-index: 5;

  @media screen and (min-width: 1640px){
    margin-right: 128px;
  }
  `;
  
  const TelaDeTitulo = styled.div`
  padding: 32px;
  transform: translateY(-32px);
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
`;

const BtnHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  `;

const MenuButton = styled(Button)`
    font-family: "La Belle Aurore", cursive;
    font-size: 25px;
    background-color: ${COR_BASE};
    color: ${BTN_FONT_COLOR};
    border-radius: 8px;
    width: 100%;
    max-width: 286px;
    cursor: pointer;
`;

const SecureImage = styled.img`
  user-drag: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export default function StartMenu({ startGame, globalConfig, setGlobalConfig, mostrarRanking }) {
    const [options, setOptions] = useState(false);

    function openOptions() {
        setOptions(!options);
    }

    return (
        <MenuContainer>
            {!options ?
            <TelaDeTitulo>
                <SecureImage src={Titulo} alt="Titulo do jogo" style={{width: "26em"}} />
                <BtnHolder>
                    <MenuButton onClick={startGame}>Novo jogo</MenuButton>
                    <MenuButton onClick={openOptions}>Opções</MenuButton>
                </BtnHolder>
            </TelaDeTitulo> :
            <>
                <Opcoes globalConfig={globalConfig} setGlobalConfig={setGlobalConfig} mostrarRanking={mostrarRanking} openOptions={openOptions}/>
            </>}
            <BarraCreditosPrefeitura />
        </MenuContainer>
    )
}
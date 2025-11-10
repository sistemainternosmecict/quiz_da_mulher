import styled from "styled-components"
import StartMenu from "./uiElements/StartMenu";

const FundoJogo = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SecureImage = styled.img`
  user-drag: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const BgImageStage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default function Inicio({ startGame, globalConfig, setGlobalConfig, mostrarRanking }) {
    return (
        <FundoJogo>
            <Wrapper>
                <StartMenu startGame={startGame} globalConfig={globalConfig} setGlobalConfig={setGlobalConfig} mostrarRanking={mostrarRanking}/>
            </Wrapper>
            <BgImageStage>
              <SecureImage src="/mulheres_fundo.png" />
            </BgImageStage>
        </FundoJogo>
    )
}
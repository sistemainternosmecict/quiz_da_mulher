import styled from "styled-components";
import { Button } from "./customButton";

const COR_BASE = "#68216D";
const BTN_FONT_COLOR = "#DD8CEF";

const OpcaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: ${BTN_FONT_COLOR};
    padding: 16px;
    border-radius: 8px;
    color: ${COR_BASE};
    box-shadow: 0 2px 4px black;
    margin: 64px;
    width: 100%;
    max-width: 280px;

    ul{
        list-style: none;
        padding: 0;

        li{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .opcao {
        display: flex;
        justify-content: space-between;
        align-items: center;

        label {
            font-size: 14px;
            margin-right: 10px;
        }

        input {
            width: 60px;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }
    }

    button{
        font-family: "La Belle Aurore", cursive;
        font-size: 25px;
        background-color: ${COR_BASE};
        color: ${BTN_FONT_COLOR};
        border-radius: 8px;
        width: 100%;
        max-width: 286px;
        cursor: pointer;
    }
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

export default function Opcoes({globalConfig, setGlobalConfig, mostrarRanking, openOptions}) {
    return (
        <OpcaoContainer>
            <h2 style={{width: "100%", textAlign: "center", color: COR_BASE}}>Opções do jogo</h2>
            <ul>
                <li>
                    <div className="opcao">
                        <label htmlFor="questoes">Quantidade de questoes</label>
                        <input type="number" name="questoes" id="questoes" min={5} max={20} defaultValue={globalConfig.qnt_questoes} onChange={(e) => setGlobalConfig({...globalConfig, qnt_questoes: Number(e.target.value)})}/>
                    </div>
                    <div className="opcao">
                        <label htmlFor="tempo_questoes">Tempo por questao (seg)</label>
                        <input type="number" name="tempo_questoes" id="tempo_questoes" min={3} max={15} defaultValue={globalConfig.tempo_questoes} onChange={(e) => setGlobalConfig({...globalConfig, tempo_questoes: Number(e.target.value)})}/>
                    </div>
                    <Button style={{ margin: "16px auto", width: "100%"}} onClick={mostrarRanking}>Ver o ranking</Button>
                    <MenuButton onClick={openOptions}>Voltar</MenuButton>
                </li>
            </ul>
        </OpcaoContainer>
    )
}
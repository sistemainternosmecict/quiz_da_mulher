import styled from "styled-components"
import rankingImage from  "/ranking.svg";
import CustomButton, { Button} from "./customButton";

// const COR_BASE = "#ffb601";
const COR_BASE = "#68216D";
const BTN_FONT_COLOR = "#DD8CEF";

const Divisao = styled.div`
    display: flex;
    align-items: center;
`;

const RankingBase = styled.div`
    background-color: rgba(255,255,255,0.8);
    padding: 32px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
    backdrop-filter: blur(4px);
    border: solid 1px white;
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 16px;
`;

export const SecureImage = styled.img`
  user-drag: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const TituloRanking = styled(SecureImage)`
    width: 200px;
    position: absolute;
    top:0;
    filter: drop-shadow(0 2px 2px ${COR_BASE});
    transform: translateY(-70%);
`;

const TabelaEstilizada = styled.table`
    border: solid 4px #4b1a0c;
    padding: 8px;
    border-collapse: collapse;
    border-radius: 8px;
    overflow: hidden;
    // box-shadow: 0 2px 4px rgba(0,0,0,0.5);
    margin: 32px 0;
    position: relative;

    thead{
        background-color: #aaa;
        tr{
            td{
                border: solid 1px black;
                padding: 8px;
            }

            td:nth-child(2){
                padding: 0 32px;  
            }

            
        }
    }

    tbody{
        tr{
            td{
                padding: 8px;
            }

            td:nth-child(2){
                padding: 0 32px;  
            }
        }
    }
`;

const Voltar = styled(Button)`
    margin: 8px 0;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    background-color: ${COR_BASE};
    color: ${BTN_FONT_COLOR};
    width: 100%;
    font-family: "La Belle Aurore", cursive;
    font-size: 25px;

    &:hover{
        background-color: #744234ff;
    }
`;

const CorpoComRolagem = styled.div`
    max-height: 200px;
    overflow-y: auto;
    border: solid 2px #4b1a0c;
    border-radius: 4px;

     /* ===== Estilização da barra de rolagem (webkit) ===== */
    &::-webkit-scrollbar {
        width: 10px; /* largura da barra */
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1; /* fundo da trilha */
        border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: #c0392b; /* cor do “botão” da rolagem */
        border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #e74c3c; /* muda a cor ao passar o mouse */
    }

    /* Firefox */
    scrollbar-width: thin; /* “auto”, “thin” ou “none” */
    scrollbar-color: #c0392b #f1f1f1; /* cor do thumb e da trilha */
`;

export default function Ranking({ ranking, reiniciar, dadosJogador, globalConfig }){
    return (
        <Divisao>
            <RankingBase>
                <TituloRanking src={rankingImage} alt="Titulo do ranking" />
                {/* <h2 style={{textAlign: "center"}}>ranking</h2> */}
                <CorpoComRolagem>
                    <TabelaEstilizada>
                        <thead style={{position: "sticky", top: "0", zIndex: 1}}>
                            <tr style={{position: "sticky", top: "0", zIndex: 1}}>
                                <td>Jogador</td>
                                <td>...</td>
                                <td>Pontuação</td>
                            </tr>
                        </thead>

                        <tbody>
                            {ranking.map((item, idx) => {
                                return <tr key={idx}>
                                    <td>{item.nome}</td>
                                    <td>...</td>
                                    <td>{item.pontos} pontos</td>
                                </tr>
                            })}
                        </tbody>
                    </TabelaEstilizada>
                </CorpoComRolagem>
                <Voltar onClick={reiniciar}>Voltar a tela inicial</Voltar>
            </RankingBase>
        </Divisao>
    )
}
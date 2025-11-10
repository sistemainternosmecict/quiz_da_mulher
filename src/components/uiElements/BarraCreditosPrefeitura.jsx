import styled from "styled-components"
import { SecureImage } from './Ranking';

const COR_BASE = "#ffb601";

const Barra = styled.div`
    position: absolute;
    top:0;
    left:32px;
`;

const LogoPrefeitura = styled(SecureImage)`
    width: 500px;
    `;

export default function BarraCreditosPrefeitura(){
    return (
        <Barra>
            <LogoPrefeitura src="/logo_edu_mulher.svg" alt="logo" />
        </Barra>
    )
} 
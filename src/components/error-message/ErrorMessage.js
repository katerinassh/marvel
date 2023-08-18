import { styled } from 'styled-components';
import gif from './error.gif';
import { devices } from "../../constants";

const Img = styled.img`
        height: 100%;
        @media only screen and ${devices.lg} {
            max-height: 21vh;
        }
`;

function ErrorMessage() {
    return(
        <Img src={ gif } alt='Error'/>
    )
}

export default ErrorMessage;
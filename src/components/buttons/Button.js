import { styled } from "styled-components";

const Button = styled.button`
    display: ${props => props.hide ? 'none' : "block"};
    background: ${props => props.main ? '#9F0013' : "#5C5C5C"};
    width: 101px;
    height: 38px;
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    transform: skew(-10deg);
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    &:hover {
        border: 1px solid;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
        text-shadow: 1px 1px 2px #427388; 
    }

`;

export default Button;
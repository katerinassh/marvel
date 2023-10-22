import { Component, useState } from "react";
import { styled } from "styled-components";


const CardContainer = styled.div`
    display: flex;
    width: 30%;
    margin-bottom: 30px;
    flex-direction: column;
    transition: all 0.5s ease-out;
    cursor: pointer;
    &:hover {
        filter: drop-shadow(0px 5px 20px #9F0013);
    }
    ${(props) =>
        props.isSelected && `filter: drop-shadow(0px 5px 20px #9F0013);`};
`;

const TopBlock = styled.div`
    height: 70%;
    background: #232222;
    img {
        width: 100%;
        height: 100%;
    }
`;

const BottomBlock = styled.div`
    height: 30%;
    background: #232222;
    p {
        color: #FFF;
        font-size: 22px;
        font-weight: 700;
        padding: 15px;
    }
`;

const CharacterCard = ({ name, thumbnail, active, onSelect }) => {
    const [isSelected, setIsSelected] = useState(false)

    const focus = () => {
        setIsSelected(true);
    }

    const unfocus = () => {
        setIsSelected(false);
    }

    return (
        <CardContainer
            onClick={onSelect}
            isSelected={isSelected || active}>
            <TopBlock>
                <img src={thumbnail} alt="Marvel">
                </img>
            </TopBlock>
            <BottomBlock>
                <p>{name}</p>
            </BottomBlock>
        </CardContainer>
    )

}

export default CharacterCard;
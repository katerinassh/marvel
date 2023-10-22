import { styled } from "styled-components";
import BigCard from "../big-card/BigCard";
import CardMenu from "../card-menu/CardMenu";
import { useEffect, useState } from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import RandomCharacter from "../random-character/RandomCharacter";

const CardsContainer = styled.div`
    display: flex;
    margin-top: 53px;
`;

const backgrounds = ['red', 'yello', 'green', 'grey']

const CharactersSection = ({appRef}) => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    // useEffect(() => {
    //     if (appRef.current && selectedCharacter) {
    //         appRef.current.style.backgroundColor = backgrounds[Math.floor(Math.random()*backgrounds.length)];
    //     }
    // }, [selectedCharacter])

    return (
        <>
            <RandomCharacter/>
            <CardsContainer>
                <ErrorBoundary>
                    <CardMenu selectedCharacter={selectedCharacter} onSelectCharacter={id => setSelectedCharacter(id)}/>
                </ErrorBoundary>
                <BigCard characterId={selectedCharacter}/>
            </CardsContainer>
        </>
    )
}

export default CharactersSection;
import { styled } from "styled-components";
import BigCard from "../big-card/BigCard";
import CardMenu from "../card-menu/CardMenu";
import CharactersBanner from '../characters-banner/CharactersBanner';
import { Component } from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const CardsContainer = styled.div`
    display: flex;
    margin-top: 53px;
`;

class CharactersSection extends Component {
    state = {
        selectedCharacter: null
    }

    onSelectCharacter = (id) => {
        this.setState({ selectedCharacter: id });
    }

    render() {
        return (
            <>
                <CharactersBanner/>
                    <CardsContainer>
                        <ErrorBoundary>
                            <CardMenu onSelectCharacter={this.onSelectCharacter}/>
                        </ErrorBoundary>
                        <BigCard characterId={this.state.selectedCharacter}/>
                    </CardsContainer>
            </>
        )
    }
}

export default CharactersSection;
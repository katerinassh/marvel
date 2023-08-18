import { styled } from "styled-components";
import CharacterCard from "../character-cart/CharacterCard";
import Button from "../buttons/Button";
import { Component } from "react";
import MarvelService from "../../services/MarvelService";

const CardMenuContainer = styled.div`
    width: 60%;
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const LoadMore = styled.div`
    margin: 45px 0;
    display: flex;
    justify-content: center;
    Button {
        width: 30%;
    }
`;

class CardMenu extends Component {
    constructor(props) {
        super(props);
        this.selectedCards = [];
        this.state = {
            data: [],
            offset: 200,
            charactersEnded: false
        }
    }

    marvelService = new MarvelService();

    setRef = ref => {
        this.selectedCards.push(ref);
    }

    focusOnItem = id => {
        this.selectedCards.forEach(card => card?.unfocus());
        this.selectedCards[id].focus();
    }

    loadCharacters = offset => {
        this.marvelService.getAllCharacters(offset)
            .then(this.onLoadded);
    }

    onLoadded = newData => {
        this.setState(({ data, offset }) => ({
            data: [...data, ...newData],
            offset: offset + 9,
            charactersEnded: newData.length < 9 ? true : false
        }));
    }

    componentDidMount() {
        this.loadCharacters();
    }

    render() {
        const { data, offset, charactersEnded } = this.state;
        const cards = data.map((character, i) => {
            const { id, ...itemProps } = character;
            return (
                <CharacterCard
                    ref={this.setRef}
                    customClickEvent={() => this.props.onSelectCharacter(id)}
                    customRefEvent={() => this.focusOnItem(i)}
                    key={ id } {...itemProps}/>
            )
        });

        return (
            <CardMenuContainer>
                <Cards>
                    {cards}
                </Cards>
                <LoadMore>
                    <Button
                        onClick={() => this.loadCharacters(offset)}
                        type='button'
                        main
                        hide={charactersEnded}>Load more</Button>
                </LoadMore>
            </CardMenuContainer>
        )
    }
}

export default CardMenu;
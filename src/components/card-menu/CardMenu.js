import { styled } from "styled-components";
import CharacterCard from "../character-cart/CharacterCard";
import Button from "../buttons/Button";
import { useState, useRef, useEffect } from "react";
import useMarvelService from "../../services/MarvelService";

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

const CardMenu = ({onSelectCharacter, selectedCharacter}) => {
    const { getAllCharacters } = useMarvelService();

    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(200);
    const [charactersEnded, setCharactersEnded] = useState(false);

    useEffect(() => {
        loadCharacters();
    }, [])

    const loadCharacters = offset => {
        getAllCharacters(offset).then(onLoadded);
    }

    const onLoadded = newData => {
        setData(data => [...data, ...newData]);
        setOffset(offset => offset + 9);
        setCharactersEnded(newData.length < 9 ? true : false)
    }

    const cards = data.map((character, i) => {
        const { id, ...itemProps } = character;

        return (
            <CharacterCard
                key={ id } 
                active={selectedCharacter === id}
                onSelect={() => onSelectCharacter(id)}
                {...itemProps}
            />
        )
    });

    return (
        <CardMenuContainer>
            <Cards>
                {cards}
            </Cards>
            <LoadMore>
                <Button
                    onClick={() => loadCharacters(offset)}
                    type='button'
                    main
                    hide={charactersEnded}>Load more</Button>
            </LoadMore>
        </CardMenuContainer>
    )
}

export default CardMenu;
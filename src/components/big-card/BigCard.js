import { styled } from "styled-components";
import { devices } from "../../constants";
import LinkButton from '../buttons/LinkButton';
import DefaultBigCart from "../default-big-card/DefaultBigCard";
import { Component } from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../error-message/ErrorMessage";

const BigCartContainer = styled.div`
    width: 35%;
    margin-left: 25px;
    padding: 25px;
    background: #FFF;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
    height: fit-content;
    @media only screen and ${devices.lg} {
        padding: 40px;
    }
`;

const BriedInfo = styled.div`
    display: flex;
    flex-direction: row;
    height: 300px;
    img {
        max-height: 300px;
    }
`;

const RightColumn = styled.div`
    padding: 0 25px;
    height: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    p {
        font-size: 22px;
        font-weight: 700;
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`;


const TextWrapper = styled.div`
    p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

const ListWrapper = styled.div`
    p {
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

const ListWithItems = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
        margin-top: 10px;
        padding: 4px 3px 3px 10px;
        background: #FFF;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        color: #000;
        font-size: 14px;
        font-weight: 400;
    }
`;

class BigCart extends Component {
    state = {
        character: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.loadCharacter();
    }

    componentDidUpdate(prevProps) {
        if (this.props.characterId !== prevProps.characterId) {
            this.loadCharacter();
        }
    }


    onLoading = () => {
        this.setState({ loading: true });
    }


    onLoadedCharacter = (character) => {
        this.setState({ character, loading: false })
    }

    onError = () => {
        this.setState({ error: true, loading: false  })
    }

    loadCharacter = () => {
        const { characterId } = this.props;
        if (!characterId) return;
        this.onLoading();

        this.marvelService.getCharacterById(characterId)
            .then(this.onLoadedCharacter)
            .catch(this.onError);
    }

    render() {
        const { character, loading, error } = this.state;
        const defaultCart = (!character && !loading && !error) ? <DefaultBigCart/> : null;
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = !(spinner || errorMessage || defaultCart) ? <View character={character} /> : (spinner || errorMessage || defaultCart);

        return (
            <BigCartContainer>
                { content }
            </BigCartContainer>
        )
    }

}

const View = character => {
    const { character: { name, description, thumbnail, homepage, wiki, comics } } = character
    let i = 0;
    const listItems = [];
    while (i < 10 && i < comics.length) {
        listItems.push(<li key={i}>{comics[i].name}</li>)
        i++;
    }
   const list = listItems.length !== 0 ? (
    <ListWrapper>
        <p>Comics:</p>
        <ListWithItems>
            { listItems }
        </ListWithItems>
    </ListWrapper>
   ) : null

    return (
        <>
            <BriedInfo>
            <img src={ thumbnail } alt={ name }/>
            <RightColumn>
                <p>{ name }</p>
                <Buttons>
                    <LinkButton as="a"  href={homepage} main>homepage</LinkButton>
                    <LinkButton as="a"  href={wiki}>wiki</LinkButton>
                </Buttons>
            </RightColumn>
        </BriedInfo>
            <TextWrapper>
                <p>{description}</p>
            </TextWrapper>
            { list }
        </>
    )
}

export default BigCart;
import styled from 'styled-components';
import Button from '../buttons/Button';
import LinkButton from '../buttons/LinkButton';
import { devices } from "../../constants";
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../error-message/ErrorMessage';

const RandomCharacterContainer = styled.div`
    display: flex;
    padding: 35px 35px 35px 40px;
    width: 50%;
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    @media only screen and ${devices.lg} {
        width: 91%;
        max-height: 250px;
    }
`;

const ImageContainer = styled.div`
    img {
        height: 100%;
        @media only screen and ${devices.lg} {
            max-height: 21vh;
        }
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    width: 100%;
    p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

const NameText = styled.h3`
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    margin: 0;
`;

const ButtonsContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
`;

const CallToActionContainer = styled.div`
    width: 50%;
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.25);
    background: #232222;
    padding: 35px 40px;
    position: relative;
    overflow: hidden;
    p {
        color: #FFF;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    @media only screen and ${devices.lg} {
        width: 91%;
    }
`;

const Decoration = styled.div`
    height: 100%;
    width: 100%;
    top: 50px;
    position: absolute;
    background: url(./images/Decoration.svg);
    background-position: right top;
    background-repeat: no-repeat;
`

const View = character => {
    const { character: { name, description, thumbnail, homepage, wiki } } = character;
    return (
        <>
            <ImageContainer>
                <img src={thumbnail} alt="Character"></img>
            </ImageContainer>
            <InfoContainer>
                <NameText>{name}</NameText>
                <p>{description}</p>
                <ButtonsContainer>
                    <LinkButton as="a"  href={homepage} main>homepage</LinkButton>
                    <LinkButton as="a"  href={wiki}>wiki</LinkButton>
                </ButtonsContainer>
            </InfoContainer>
        </>
    )
};


class RandomCharacter extends Component {

    state = {
        character: {},
        loading: true,
        error: false
    };

    marvelService = new MarvelService();

    componentDidMount() {
        this.fullfillCharacter();
    }

    fullfillCharacter = () => {
        const randomId = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService.getCharacterById(randomId)
            .then(this.onLoadedCharacter)
            .catch(this.onError);
    }

    onLoadedCharacter = (character) => {
        this.setState({ character, loading: false })
    }

    onError = () => {
        this.setState({ error: true, loading: false  })
    }

    render() {
        const { character, loading, error } = this.state;
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = !(spinner || errorMessage) ? <View character={character} /> : (spinner || errorMessage);

        return (
            <>
                <RandomCharacterContainer>
                    {content}
                </RandomCharacterContainer>
                <CallToActionContainer>
                    <p>Random character for today!<br/>Do you want to get to know him better?</p>
                    <p>Or choose another one</p>
                    <Decoration/>
                    <Button type='button' onClick={this.fullfillCharacter} main>Try it</Button>
                </CallToActionContainer>
            </>
        )
    }
}

export default RandomCharacter;
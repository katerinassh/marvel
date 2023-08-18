import { Component } from "react";
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

class CharacterCard extends Component {
    state = {
        isSelected: false
    }

    focus = () => {
        console.log(this)
        this.setState({ isSelected: true });
    }

    unfocus = () => {
        this.setState({ isSelected: false });
    }

    render() {
        const { name, thumbnail, customClickEvent, customRefEvent } = this.props;
        const { isSelected } = this.state;
        return (
            <CardContainer 
                onClick={() => { customClickEvent(); customRefEvent() }}
                isSelected={isSelected}>
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

}

export default CharacterCard;
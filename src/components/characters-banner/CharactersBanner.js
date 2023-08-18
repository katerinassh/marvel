import { styled } from "styled-components";
import RandomCharacter from "../random-character/RandomCharacter";
import { devices } from "../../constants";
import { Component } from "react";

const BannerContainer = styled.div`
    width: 100%;
    display: flex;
    max-height: 250px;
    @media only screen and ${devices.lg} {
        flex-direction: column;
        max-height: none;
    }
`;

class CharactersBanner extends Component {
    render() {
        return (
            <BannerContainer>
                <RandomCharacter/>
            </BannerContainer>
        )
    }
}

export default CharactersBanner;
import { styled } from "styled-components";
import { devices } from "../../constants";

const ComicsBannerWrapper = styled.div`
    height: 100px;
    background: #232222;
    display: flex;
    padding: 0 45px;
    justify-content: space-between;
`;

const LeftWrapper = styled.div`
    display: flex;
    width: 45%;
    justify-content: space-between;
    @media only screen and ${devices.md} {
        width: 50%;
    }
`;

const LeftPicture = styled.div`
    background-image:  url(./images/avengers.svg);
    width: 160px;
    background-repeat: no-repeat;
`;


const RightPicture = styled.div`
    background-image: url(./images/avengers-logo.svg);
    width: 135px;
    background-repeat: no-repeat;
`;

const CenterBlock = styled.div`
    p {
        color: #FFF;
        font-size: 24px;
        font-weight: 700;
        align-self: center;
        @media only screen and ${devices.md} {
            font-size: 16px;
        }
    }
`;

function ComicsBanner() {
    return(
        <ComicsBannerWrapper>
            <LeftWrapper>
                <LeftPicture/>
                <CenterBlock>
                    <p>New comics every week!<br/>
                    Stay tuned!</p>
                </CenterBlock>
            </LeftWrapper>
            <RightPicture/>
        </ComicsBannerWrapper>
    )
}

export default ComicsBanner;
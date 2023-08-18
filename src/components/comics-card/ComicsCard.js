import { styled } from "styled-components";

const ComicsCardWrapper = styled.div`
    width: 21%;
`;

const ImageBlock = styled.div`
    background-image: url(./images/uw.svg);
    background-repeat: no-repeat;
    height: 350px;
    width: 100%;
`;

const UnderneathText = styled.div`
    margin-bottom: 55px;
    h5 {
        color: #000;
        font-size: 14px;
        font-weight: 700;
        margin: 0;
        padding-top: 10px;
        width: 60%;
    }
    p {
        color: rgba(0, 0, 0, 0.60);
        font-size: 14px;
        font-weight: 700;
        line-height: normal;
        padding-top: 5px;
        margin: 0;
    }
`;

function ComicsCard() {
    return(
        <ComicsCardWrapper>
            <ImageBlock/>
            <UnderneathText>
                <h5>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h5>
                <p>9.99$</p>
            </UnderneathText>
        </ComicsCardWrapper>
    )
}

export default ComicsCard;
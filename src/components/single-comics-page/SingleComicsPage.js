import styled from 'styled-components';

const SingleComicsPageWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`;

const PosterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden
    img {
        flex-shrink: 0;
        min-width: 100%;
        min-height: 100%
    }
`;

const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
`;

const FirstColumn = styled.div`
    width: 60%;
    h3 {
        color: #000;
        font-size: 22px;
        font-weight: 700;
    }
    p {
        color: #000;
        font-size: 18px;
        font-weight: 400;
    }
`;

const SecondColumn = styled.div`
    p {
        color: #000;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
    }
`;

const Price = styled.span`
    color: #9F0013;
    font-size: 24px;
    font-weight: 700;
`;


export default function SingleComicsPage() {
    return(
        <SingleComicsPageWrapper>
            <PosterWrapper>
                <img src="./images/x-men.svg" alt="" />
            </PosterWrapper>
            <TextWrapper>
                <FirstColumn>
                    <h3>X-Men: Days of Future Past</h3>
                    <p>Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
                    <p>144 pages</p>
                    <p>Language: en-us</p>
                    <Price>9.99$</Price>
                </FirstColumn>
                <SecondColumn>
                    <span>Back to all</span>
                </SecondColumn>
            </TextWrapper>
        </SingleComicsPageWrapper>
    )
};
import { styled } from "styled-components";

const CircleLine = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Circle = styled.div`
    height: 40px;
    width: 40px;
    background: #C4C4C4;
    border-radius: 50%;
    display: inline-block;
`;

const Line = styled.div`
    background: #C4C4C4;
    height: 16px;
    width: 80%;
    align-self: center;
`;

const RegularLine = styled.div`
    background-color: #C4C4C4;
    height: 35px;
    margin-top: 15px;
`;


function DefaultBigCart() {
    return(
        <>
            <h3>Please select a character to see information</h3>
        <CircleLine>
            <Circle/>
            <Line/>
        </CircleLine>
        <RegularLine/>
        <RegularLine/>
        <RegularLine/>
        </>
    )
}

export default DefaultBigCart;
import { styled } from "styled-components";
import ComicsCard from "../comics-card/ComicsCard";
import Button from "../buttons/Button";

const LoadMoreButton = styled.div`
    margin: 45px 0;
    display: flex;
    justify-content: center;
    Button {
        width: 15%;
    }
`;

const ComicsCardMenuWrapper = styled.div`
    display: flex;
    margin-top: 45px;
    justify-content: space-between;
    flex-wrap: wrap;
    
`;

function ComicsCardMenu() {
    return(
        <>
        <ComicsCardMenuWrapper>
            <ComicsCard/>
            <ComicsCard/>
            <ComicsCard/>
            <ComicsCard/>
            <ComicsCard/>
        </ComicsCardMenuWrapper>
        <LoadMoreButton>
            <Button type='button' main>Load more</Button>
        </LoadMoreButton>
        </>
    )
}

export default ComicsCardMenu;
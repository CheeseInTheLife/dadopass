import { TeaHouseListItem } from "./TeaHouseListItem";
import styled from "styled-components";

const ListWrapper = styled.div`
    display : flex;
    flex-direction : row;
`  


export const TeaHouseList = ( ) => {
    return(
        <ListWrapper>
            <TeaHouseListItem/>
            <TeaHouseListItem/>
            <TeaHouseListItem/>
        </ListWrapper>
       
    );
}
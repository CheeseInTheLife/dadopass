import styled from "styled-components";

const HeaderInterface = styled.div`

    width : 100%;
    text-align : center;
    background-color : yellow;
    height : 50px;
    display : flex;
    align-items : center;
    justify-content : space-between;
`;

export const Header =() => {
    return(
    <HeaderInterface>
        <span>버튼</span>
        <span>다도패스</span>
        <span>버튼</span>
    </HeaderInterface>
    );
}
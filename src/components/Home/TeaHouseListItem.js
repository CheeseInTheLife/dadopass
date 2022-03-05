import styled from "styled-components";


const ItemWrapper = styled.div`
width: 200px;
height : 300px;
margin-left: auto;
margin-right: auto;
padding-left: 16px;
padding-right: 16px;
border : 1px #e3e3e3 solid;
border-radius : 50px;
margin-top : 30px;

&:hover {
    background-color : #CFFFBE;
    cursor : pointer;

}
& + &  {
    margin-left : 1rem;
} 

h4 {
    color : #7E85FF;
}
`; 



export const TeaHouseListItem = ({name, location, phonenumber, reservation}) => {

    return(
        <ItemWrapper>
            <h1>{name}</h1>
            <div><b>장소</b> : {location}</div>
            <div><b>연락처</b> : {phonenumber}</div>
            <h4>예약방법</h4>
            <div>{reservation}</div>
        </ItemWrapper>
    );
}

TeaHouseListItem.defaultProps = {
    name : "찻집 이름",
    location : "어딘가",
    phonenumber : "010-0000-0000",
    reservation : "전화방문 및 전화예약"  
}
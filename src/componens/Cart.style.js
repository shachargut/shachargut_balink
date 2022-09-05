import styled from "styled-components";

export const CartWrap = styled.div`
    width: 85%;
    height: 70%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 500px) {
            width: 85%;
            height: 80%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
`
export const CartTable = styled.div`
    width: 80%;
    overflow: auto;
    &::-webkit-scrollbar{
        display: none;
    }
    @media (max-width: 500px) {
        width: 96%;
        height: 85%;
        }
`
export const WrapBtbNext = styled.div`
    display: flex;
    align-items: flex-end;    
`
export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;    
`
export const Tr = styled.tr``
export const Th = styled.th`
    text-align: start;
    padding: 8px;
    border: solid 1px black;  
    background-color: #e3e3e3;  
`
export const Td = styled.td`
    text-align: start;
    padding: 8px;
    border: solid 1px black;      
`

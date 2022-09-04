import styled from "styled-components";

export const HeaderA = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0px 0px 14px 0px #bcabab;
    display: flex;
    justify-content: center;
    position: fixed;
`
export const Hcontainer = styled.div`
    width: 93%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const HeaderLogo = styled.img`
    width: 44px;
    cursor: pointer;

    &:hover{
        width: 50px;
    }
`
export const CartLogo = styled.div`
    font-size: 20px;

    &:hover{
        cursor: pointer;
    font-size: 25px;
    }
`
export const CounterProduct = styled.div`
    cursor: pointer;
    position: absolute;
    width: 21px;
    height: 21px;
    background-color: red;
    border-radius: 50%;
    top: 1%;
    right: 2.7%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    font-size: 15px;
`



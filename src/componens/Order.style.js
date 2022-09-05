import styled from "styled-components";

export const OrderBox = styled.div`
    width: 40%;
    height: 50%;
    box-shadow: 0px 0px 15px 1px #cfc5c5;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1100px) {
        width: 55%;
        height: 60%;
        box-shadow: 0px 0px 15px 1px #cfc5c5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 660px) {
        width: 85%;
        height: 75%;
        box-shadow: 0px 0px 15px 1px #cfc5c5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const OrderContainer = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Form = styled.form`
    display: contents; 
`
export const WrapperI = styled.div`
width: ${(props) => props.width};
display: flex;
justify-content: ${(props) => props.justifyContent};;
`
export const Input = styled.input`
    height: 35px;
    background-color:  #e9e9e9;
    border: none;
    outline: none;
    box-shadow: 0px 3px 5px 2px #ffffff;
    border: none;
    width: ${(props) => props.width};
`
export const BtnBuy = styled.input`
    width: 120px;
    height: 30px;
    font-size: 18px;
    border: solid #e9e9e9 1px;
    display:flex ;
    align-items: center;
    justify-content: center;
    background-color: #e9e9e9;
    &:hover{
        cursor: pointer;
        color: black;
        background-color: #fffefb;
    }
    &:active{
        background-color: #020202;
        color: #ffffff;
    }
`
import styled from "styled-components";

export const Btn = styled.div`
    width: ${(props) => props.width};
    height: 30px;
    font-size: 18px;
    font-weight: ${(props) => props.fontWeight};
    border: solid #cfcecc 1px;
    display:flex ;
    align-items: center;
    justify-content: center;
    background-color: #edecea;;

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

// .addToCartbtn{
//     width: 148px;
//     height: 30px;
//     font-size: 18px;
//     border: solid #cfcecc 1px;
//     display:flex ;
//     align-items: center;
//     justify-content: center;
//     background-color: #cfcecc;
// }
// .addToCartbtn:hover{
//     cursor: pointer;
//     color: black;
//     background-color: #fffefb;
// }
// .addToCartbtn:active{
//     background-color: #020202;
//     color: #ffffff;
// }
import styled from "styled-components";

export const ProductWrapper = styled.div`
    display: flex;
    padding-top: 60px;
    width: 100%;
    height: calc(100% - 60px);
    justify-content: center;
    @media (max-width: 900px) {
        padding-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0px;
    }

` 
export const ProContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 900px) {
        width: 97%;
        height: 92%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }
    @media (max-width: 800px) {
        overflow: hidden;
    }
` 
export const MainContent = styled.div`
    width: 60%;
    @media (max-width: 900px) {
        height: 70%;
        width: 80%;
        overflow: auto;
    }
    @media (max-width: 800px) {
        height: 70%;
        width: 80%;
    }
    @media (max-width: 600px) {
        height: 80%;
        width: 90%;
    }

` 
export const ContentFooter = styled.div`
    width: 80%;
    display: flex;
    font-size: 18px;
` 
export const WrapContentFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2%;
` 
export const WrapperCenter = styled.div`
    display: flex;
    justify-content: center;
` 
export const MainDescription = styled.div`
margin-top: 5%;
margin-bottom: 5%;

@media (max-width: 900px){
    font-size: smaller;
    height: 30%;
    overflow: auto;
}
 
` 
export const NavHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
` 
export const NavHwRAP = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
` 
export const NavContainer = styled.div`
    width: 95%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-weight: 550;
` 
export const Nav= styled.div`
    width:300px;
    height: 60%;
    box-shadow: inset 0px -1px 15px 0px #cfc5c5;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 900px){
        width:300px;
        height: 22%;
        box-shadow: inset 0px -1px 15px 0px #cfc5c5;
        background-color: rgb(255, 255, 255);
    }

` 



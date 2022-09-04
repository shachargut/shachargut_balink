import styled from "styled-components";

export const WraPpage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const PageContainer = styled.div`
  width: 95%;
  padding-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1000px){
        width: 95%;
        padding-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
  }
  @media (max-width: 550px){
        width: 95%;
        padding-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
  }
`
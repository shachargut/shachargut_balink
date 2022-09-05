import styled from "styled-components";

export const Container = styled.div`
    height: ${(props) => props.height};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
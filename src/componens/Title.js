import styled from "styled-components";

export const Title = styled.div`
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
`
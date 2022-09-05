import styled from "styled-components";

export const Title = styled.div`
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    @media (max-width: 800px) {
        font-size: ${(props) => props.fontSizeE};
        font-weight: ${(props) => props.fontWeightE};
    }


`
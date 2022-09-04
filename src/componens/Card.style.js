import styled from "styled-components";

export const Card = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: 2%;
    background: radial-gradient(#faf9fb,#faf9fb,#faf9fb, #ece5e5);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-direction: column;

    &:hover{
        background: radial-gradient(#faf9fb,#faf9fb, #e9e9e9);
        box-shadow: 0px 3px 5px 5px #e6dede;
    }
`
export const BOokcWwrapper = styled.div`
    width: 100%;
    height: 88%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-between;
`
export const BcartContent = styled.div`
    width: 80%;
    display: flex;
    flex-direction:${(props) => props.flexDirection};
    justify-content: space-between;
    align-items: center;
`
export const FooterBook = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
`
export const TextArea = styled.div`
    font-size:${(props) => props.fontSize};
    font-weight:${(props) => props.fontWeight};
    margin-left:${(props) => props.marginLeft}
`
export const DivWrapper = styled.div`
    
`;







{/* <div className='bookcard' onClick={()=>{onClickStore(props.id)}}> */}
        // <div className='bookc-wrapper'>
        // <div className='bcart-content'>
    //       <div className='img-wrapper'><div style={{"font-size":"4rem"}}>📖</div></div>
    //       <div className='details-wrapper'>
    //          <div  style={{"font-size":"17px"}}>{props.name}</div>
    //          <div style={{"font-size":"12px","font-weight":"700"}}>{props.author}</div>
    //          <div style={{"font-size":"11px"}}>{props.type}</div>
    //       </div>
    //     </div>
    //     <div className='footer-book'>
    //         <div>🛒</div>
    //         <div style={{"font-weight":"700"}}>{props.price}€</div>
    //     </div>
    //     </div>
    // </div>
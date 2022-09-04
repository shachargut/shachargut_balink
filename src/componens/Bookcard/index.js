import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BcartContent, BOokcWwrapper, Card, DivWrapper, FooterBook, TextArea } from '../Card.style';


function Bookcard(props) {
    let navigate = useNavigate();
  
    const onClickStore = (id) =>{
        navigate( `/product/?${id}`);
    }

  return (
      <Card height="200px" width="300px" onClick={()=>{onClickStore(props.id)}}>
        <BOokcWwrapper>
        <BcartContent flexDirection="row">
          <TextArea fontSize="4rem">📖</TextArea>
          <DivWrapper>
             <TextArea fontSize="17px">{props.name}</TextArea>
             <TextArea fontSize="12px" fontWeight={700}>{props.author}</TextArea>
             <TextArea fontSize="11px">{props.type}</TextArea>
          </DivWrapper>
        </BcartContent>
        <FooterBook>
            <TextArea>🛒</TextArea>
            <TextArea fontWeight={700}>{props.price}€</TextArea>
        </FooterBook>
        </BOokcWwrapper>
     </Card>
  )
}

export default Bookcard
import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { BcartContent, Card, TextArea } from '../Card.style';


function Storecard(props) {
    let navigate = useNavigate();
  

    const onClickStore = (id) =>{
        navigate( `store/?${id}`);
    }

  return (
    <Card height="220px" width="250px" onClick={()=>{onClickStore(props.id)}}>
        <BcartContent flexDirection="column"> 
          <TextArea fontSize="100px">🏪</TextArea>
          <TextArea fontWeight="600">{props.name}</TextArea>
          <TextArea fontWeight="600">{props.address}</TextArea>
          <TextArea fontWeight="600">{props.city}</TextArea>
        </BcartContent> 
    </Card>    
  )
}

export default Storecard
import React from 'react'
import tranzlation from '../../languages/tranzlation';
import {useSelector, useDispatch} from 'react-redux';
import { WraPpage } from '../../componens/Pages';
import { Title } from '../../componens/Title';
import { Container } from '../../componens/Container';

function Thanks() {
    const order = useSelector((state)=> state.order)
    const language = useSelector((state)=> state.languageSelected)

  return (
  <WraPpage height="100%" alignItem="center">
    <Container height='40%'> 
      <Title justifyContent="center" fontSize="3rem" fontSizeE="2rem" fontWeight="500">{tranzlation[language].Thanks.congrats}, {order.firstName} {order.lastName}</Title>
      <Title justifyContent="center" fontSize="30px" fontSizeE="0.9rem" fontWeight="450">{tranzlation[language].Thanks.yOrder}: {order.id}</Title>
      <Title justifyContent="center" fontSize="30px" fontSizeE="0.9rem" fontWeight="450">{order.store} {tranzlation[language].Thanks.hopeSeeAG}</Title>
    </Container>
  </WraPpage> 
  )
}

export default Thanks


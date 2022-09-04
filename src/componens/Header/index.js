import React from 'react'
import logo from '../../assest/image/logoRead.png'
import {useSelector, useDispatch} from 'react-redux'
import './style.css'
import {CartLogo,CounterProduct, Hcontainer, HeaderLogo,HeaderA } from './HeaderStyle'
import { useNavigate } from 'react-router-dom';
import { DivWrapper } from '../Card.style'

function Header() {
  let navigate = useNavigate();
  const cart = useSelector((state)=> state.cart);

  function navigateToHomePage(){
    navigate( `/`);
  }
  function navigateToCart(){
    navigate('/cart')
  }

  return (
    <HeaderA>
      <Hcontainer>
         <HeaderLogo src = {logo} alt="logo" onClick={()=>{navigateToHomePage()}}/>
         <DivWrapper onClick={()=>{navigateToCart()}}>
           <CounterProduct>{cart?.length}</CounterProduct>
           <CartLogo>🛒</CartLogo>
         </DivWrapper>
      </Hcontainer>
    </HeaderA>
  )
}

export default Header
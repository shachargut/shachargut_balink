import React from 'react'
import logo from '../../assest/image/logoRead.png'
import {useSelector, useDispatch} from 'react-redux'
import './style.css'
import { useNavigate } from 'react-router-dom';

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
    <div className='header'>
      <div className='hContainer'>
         <img src = {logo} alt="logo" className='headerLogo' onClick={()=>{navigateToHomePage()}}/>
         <div onClick={()=>{navigateToCart()}}>
           <div className='counterProduct'>{cart?.length}</div>
           <div className='cartLogo'>🛒</div>
         </div>
      </div>
    </div>
  )
}

export default Header
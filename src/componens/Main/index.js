import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../../pages/Homepage'
import Store from '../../pages/Store'
import Product from '../../pages/Product'
import Cart from '../../pages/Cart'
import Order from '../../pages/Order'
import Thanks from '../../pages/Thanks'
import SelectLang from '../SelectLang'
import { DivWrapper } from '../Card.style'
import styled from "styled-components";

function Main() {
  const mainElem = React.createRef();

  return (
    <DivWrapper>
      <Margintoptomain></Margintoptomain>
     <MainS ref={mainElem}>
        <SelectLang mainElem={mainElem}/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/thanks' element={<Thanks/>}/>
        </Routes>
     </MainS>
    </DivWrapper>
  )
}

export default Main



const Margintoptomain = styled.div`
   height: 60px;
`
const MainS = styled.div`
  height: calc(100vh - 60px) !important;
  overflow: auto;
`
import React from 'react'
import './style.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../../pages/Homepage'
import Store from '../../pages/Store'
import Product from '../../pages/Product'
import Cart from '../../pages/Cart'
import Order from '../../pages/Order'
import Thanks from '../../pages/Thanks'
import SelectLang from '../SelectLang'

function Main() {
  return (
    <div className='main-main'>
      <div className='margintoptomain'></div>
    <div className='main'>
      <SelectLang/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/thanks' element={<Thanks/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default Main
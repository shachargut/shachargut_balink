import React from 'react'
import './style.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../../pages/Homepage'
import Store from '../../pages/Store'
import Product from '../../pages/Product'
import Cart from '../../pages/Cart'
import Order from '../../pages/Order'

function Main() {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </div>
  )
}

export default Main
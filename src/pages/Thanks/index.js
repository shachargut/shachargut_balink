import React from 'react'
import './style.css'
import {useSelector, useDispatch} from 'react-redux'

function Thanks() {
    const order = useSelector((state)=> state.order)
  return (
   <div className='thanks-wrapper'>
    <div className='thanks-container'> 
    <div className='tnk-tlt' >Congrats, {order.firstName} {order.lastName}</div>
    <div className='thk-content'> your order: {order.id}</div>
    <div className='thk-content'>{order.store} will hope to see you again</div>
    </div>
  </div> 
  )
}

export default Thanks
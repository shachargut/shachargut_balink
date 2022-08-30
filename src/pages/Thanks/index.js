import React from 'react'
import './style.css'
import tranzlation from '../../languages/tranzlation';
import {useSelector, useDispatch} from 'react-redux'

function Thanks() {
    const order = useSelector((state)=> state.order)
    const language = useSelector((state)=> state.languageSelected)

  return (
   <div className='thanks-wrapper'>
    <div className='thanks-container'> 
    <div className='tnk-tlt' >{tranzlation[language].Thanks.congrats}, {order.firstName} {order.lastName}</div>
    <div className='thk-content'>{tranzlation[language].Thanks.yOrder}: {order.id}</div>
    <div className='thk-content'>{order.store} {tranzlation[language].Thanks.hopeSeeAG}</div>
    </div>
  </div> 
  )
}

export default Thanks
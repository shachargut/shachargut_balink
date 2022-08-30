import React, { useEffect, useState } from 'react'
import './style.css'
import tranzlation from '../../languages/tranzlation';
import {useSelector, useDispatch} from 'react-redux'
import{deleteItem} from '../../redux/action'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [total,setTotal] = useState(0)  
  const cart = useSelector((state)=> state.cart);
  const language = useSelector((state)=> state.languageSelected)
  const dispatch = useDispatch();
  let navigate = useNavigate();
  
  function deleteItemFromCart(product){
    dispatch(deleteItem(product))
  }

  function NavigateToOrder(){
    navigate('/order')
  }

  function totalToPay(){
    let counter = 0
    cart?.forEach((v)=>{
        counter = counter + v.quantity*v.price
    })
    setTotal(counter)
  }

  useEffect(()=>{
    totalToPay();
  },[cart])

  return (
    <div className='cart'>
      <div className='cart-wrap'> 
      <div className='cart-table'>
        <table>
            <tr>
               <th>{tranzlation[language].Cart.table.fristLine.Name}</th>
               <th>{tranzlation[language].Cart.table.fristLine.Quantity}</th>
               <th>{tranzlation[language].Cart.table.fristLine.Price}</th>
               <th>{tranzlation[language].Cart.table.fristLine.Del}</th>
             </tr>
        {cart?.map((v)=>{
            return(
                <tr>
                   <td><div style={{"fontWeight":"660"}}>{v.name}</div>{v.description}</td>
                   <td>{v.quantity}</td>
                   <td>{v.price} €</td>
                   <td className='garbage'onClick={()=>deleteItemFromCart(v)}>🗑️</td>
                 </tr>
            )
        })}
                 <tr>
                 <th>{tranzlation[language].Cart.table.totalPay}</th>
                   <td></td>
                   <td>{total} €</td>
                   <td></td>
                 </tr>
        </table>
      </div>
      <div className='btn-n-wrap'>
          <div className='nextbtn' onClick={()=>NavigateToOrder()}>{tranzlation[language].Cart.btnNext}</div>
      </div>
      </div> 
    </div>
  )
}


export default Cart
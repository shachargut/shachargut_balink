import React, { useEffect, useState } from 'react'
import './style.css'
import {useSelector, useDispatch} from 'react-redux'
import{deleteItem} from '../../redux/action'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [total,setTotal] = useState(0)  
  const cart = useSelector((state)=> state.cart);
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
               <th>Name</th>
               <th>Quantity</th>
               <th>Price</th>
               <th>del</th>
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
                 <th>Total to pay</th>
                   <td></td>
                   <td>{total} €</td>
                   <td></td>
                 </tr>
        </table>
      </div>
      <div className='btn-n-wrap'>
          <div className='nextbtn' onClick={()=>NavigateToOrder()}>Next</div>
      </div>
      </div> 
    </div>
  )
}


export default Cart
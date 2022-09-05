import React, { useEffect, useState } from 'react'
import tranzlation from '../../languages/tranzlation';
import {useSelector, useDispatch} from 'react-redux'
import{deleteItem} from '../../redux/action'
import { useNavigate } from 'react-router-dom';
import { Btn } from '../../componens/Button';
import { WraPpage } from '../../componens/Pages';
import { CartTable, CartWrap, Table, Td, Th, Tr, WrapBtbNext } from '../../componens/Cart.style';

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
    <WraPpage height="100%" alignItem="center">
      <CartWrap> 
      <CartTable>
        <Table>
            <Tr>
               <Th>{tranzlation[language].Cart.table.fristLine.Name}</Th>
               <Th>{tranzlation[language].Cart.table.fristLine.Quantity}</Th>
               <Th>{tranzlation[language].Cart.table.fristLine.Price}</Th>
               <Th>{tranzlation[language].Cart.table.fristLine.Del}</Th>
             </Tr>
        {cart?.map((v)=>{
            return(
                <Tr>
                   <Td><div style={{"fontWeight":"660"}}>{v.name}</div>{v.description}</Td>
                   <Td>{v.quantity}</Td>
                   <Td>{v.price} €</Td>
                   <Td className='garbage'onClick={()=>deleteItemFromCart(v)}>🗑️</Td>
                 </Tr>
            )
        })}
                 <Tr>
                 <Th>{tranzlation[language].Cart.table.totalPay}</Th>
                   <Td></Td>
                   <Td>{total} €</Td>
                   <Td></Td>
                 </Tr>
        </Table>
      </CartTable>
      <WrapBtbNext>
          <Btn fontWeight="660" width="120px"  onClick={()=>NavigateToOrder()}>{tranzlation[language].Cart.btnNext}</Btn>
      </WrapBtbNext>
      </CartWrap> 
    </WraPpage>
  )
}


export default Cart
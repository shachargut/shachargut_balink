import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import{addOrderDetails} from '../../redux/action'
import { useNavigate,useLocation } from 'react-router-dom';

function Order() {
   const [formD, setFormD] = useState({})
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const cart = useSelector((state)=> state.cart)

   function changeD(e){
    const name = e.target.name;
    const value = e.target.value;
    setFormD((currentFormData)=>{
      return {
        ...currentFormData,
        [name]:value
      }
    })}

    async function onClickBuy(){
      if (formD.firstName&&formD.lastName&&formD.phoneNumber&&formD.address) {
        let data = cart
        let bookOjects = {}
        let dataB = cart?.forEach((v)=>{
          bookOjects={
            ...bookOjects,
            [v.id]:v.price
          }
         })
         console.log(bookOjects);
        // data = data?.map((v))
        const result = await axios.post("https://logical-calf-89.hasura.app/v1/graphql",{
          query: `mutation Insert_orders($objects: [orders_insert_input!]!) {
            insert_orders(objects: $objects) {
              returning {
                id
              }
              affected_rows
            }
          }`,variables: {
            "objects":  [
              {
                "address": formD.address,
                "amount": cart.length,
                "books": {"8f48a306-a096-4e35-b12e-34bd6c00ff04":4},
                "firstName": formD.firstName,
                "lastName": formD.lastName,
                "phone_number": formD.phoneNumber
              }
            ]
          }
          })
          console.log(result.data.data.insert_orders.returning[0].id);
          dispatch(addOrderDetails({id:result.data.data.insert_orders.returning[0].id,firstName:formD.firstName, lastName:formD.lastName, store:cart[0].store.name}))
          navigate('/thanks')
        }
          else{
            alert("you need to fill all the fields")
          }
    }

   console.log(formD);

  return (
    <div className='order-wrap'>
      <div className='order-box'>
        <div className='order-container'>
          <div className='order-title'>Finalize Order</div>
          <div className='inpName-wrap'>
            <input className='inputShort halfI' placeholder='First name' name='firstName' onChange={(e)=>changeD(e)}/>
            <input className='inputShort halfI' placeholder='Last name' name='lastName' onChange={(e)=>changeD(e)}/>
          </div>
          <input className='inputShort'  placeholder='Address' name='address' onChange={(e)=>changeD(e)}/>
          <input className='inputShort' type={'number'} placeholder='Phone number' name='phoneNumber' onChange={(e)=>changeD(e)}/>
          <div className='btnB-wrapper'>
             <div className='btnBuy' onClick={()=>{onClickBuy()}}>Buy</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order;
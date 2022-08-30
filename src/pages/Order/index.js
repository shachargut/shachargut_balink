import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import tranzlation from '../../languages/tranzlation';
import {useSelector, useDispatch} from 'react-redux'
import{addOrderDetails, addToCart, restartCart} from '../../redux/action'
import { useNavigate,useLocation } from 'react-router-dom';
import Loading from '../../componens/Loading'

function Order() {
   const [formD, setFormD] = useState({})
   const [loadingO,setLoadingO] = useState(false)
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const cart = useSelector((state)=> state.cart)
   const language = useSelector((state)=> state.languageSelected)


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
        setLoadingO(true)
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
          dispatch(restartCart())
          navigate('/thanks')
        }
          else{
            alert("you need to fill all the fields")
          }
    }
  if(loadingO){
    return(
      <Loading page={tranzlation[language].Order.page}/>
    )
  }
   console.log(formD);

  return (
    <div className='order-wrap'>
      <div className='order-box'>
        <div className='order-container'>
          <div className='order-title'>{tranzlation[language].Order.title}</div>
          <div className='inpName-wrap'>
            <input className='inputShort halfI' placeholder={tranzlation[language].Order.placeHolder.fName} name='firstName' onChange={(e)=>changeD(e)}/>
            <input className='inputShort halfI' placeholder={tranzlation[language].Order.placeHolder.lName} name='lastName' onChange={(e)=>changeD(e)}/>
          </div>
          <input className='inputShort'  placeholder={tranzlation[language].Order.placeHolder.address} name='address' onChange={(e)=>changeD(e)}/>
          <input className='inputShort' type={'number'} placeholder={tranzlation[language].Order.placeHolder.pNumber} name='phoneNumber' onChange={(e)=>changeD(e)}/>
          <div className='btnB-wrapper'>
             <div className='btnBuy' onClick={()=>{onClickBuy()}}>{tranzlation[language].Order.btnBuy}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order;
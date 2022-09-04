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

    async function onClickBuy(e){
      
      if (formD.firstName&&formD.lastName&&formD.phoneNumber>500000000&&formD.phoneNumber<599999999&&formD.address) {
        setLoadingO(true)
        let data = cart
        let bookOjects = {}
        let dataB = cart?.forEach((v)=>{
          bookOjects={
            ...bookOjects,
            [v.id]:v.price
          }
         })
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
                "books": bookOjects,
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
    }
  if(loadingO){
    return(
      <Loading page={tranzlation[language].Order.page}/>
    )
  }

  return (
    <div className='order-wrap'>
      <div className='order-box'>
        <div className='order-container'>
          <div className='order-title'>{tranzlation[language].Order.title}</div>
          <form className='form'>
          <div className='inpName-wrap'>
            <input className='inputShort halfI' placeholder={tranzlation[language].Order.placeHolder.fName} name='firstName' onChange={(e)=>changeD(e)} required/>
            <input className='inputShort halfI' placeholder={tranzlation[language].Order.placeHolder.lName} name='lastName' onChange={(e)=>changeD(e)} required/>
          </div>
          <input className='inputShort'  placeholder={tranzlation[language].Order.placeHolder.address} name='address' onChange={(e)=>changeD(e)} required/>
          <input className='inputShort' type={'number'} placeholder={tranzlation[language].Order.placeHolder.pNumber} name='phoneNumber' minLength={'10'} maxLength={'10'}  min="0500000000" max="0599999999" onChange={(e)=>changeD(e)} required/>
          <div className='btnB-wrapper'>
             <input type={"submit"} className='btnBuy' value={tranzlation[language].Order.btnBuy} onClick={(e)=>{onClickBuy(e)}}></input>
             {/* <div itemType='submit' className='btnBuy' onClick={()=>{onClickBuy()}}>{tranzlation[language].Order.btnBuy}</div> */}
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Order;
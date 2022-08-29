import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';


function Storecard(props) {
    let navigate = useNavigate();
  

    const onClickStore = (id) =>{
        navigate( `store/?${id}`);
    }

  return (
    <div className='storecard' onClick={()=>{onClickStore(props.id)}}>
        <div className='cart-content'>
          <div style={{"font-size":"100px"}}>🏪</div>
          <div style={{"fontWeight":"600"}}>{props.name}</div>
          <div style={{"fontWeight":"600"}}>{props.address}</div>
          <div style={{"fontWeight":"600"}}>{props.city}</div>
        </div>
    </div>
  )
}

export default Storecard
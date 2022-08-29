import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';


function Bookcard(props) {
    let navigate = useNavigate();
  
    const onClickStore = (id) =>{
        navigate( `/product/?${id}`);
    }

  return (
    <div className='bookcard' onClick={()=>{onClickStore(props.id)}}>
        <div className='bookc-wrapper'>
        <div className='bcart-content'>
          <div className='img-wrapper'><div style={{"font-size":"4rem"}}>📖</div></div>
          <div className='details-wrapper'>
             <div  style={{"font-size":"17px"}}>{props.name}</div>
             <div style={{"font-size":"12px","font-weight":"700"}}>{props.author}</div>
             <div style={{"font-size":"11px"}}>{props.type}</div>
          </div>
        </div>
        <div className='footer-book'>
            <div>🛒</div>
            <div style={{"font-weight":"700"}}>{props.price}€</div>
        </div>
        </div>
    </div>
  )
}

export default Bookcard
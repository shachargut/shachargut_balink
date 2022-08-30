import React from 'react'
import './style.css'
import{addToCart, changaeLanguage} from '../../redux/action'
import {useSelector, useDispatch} from 'react-redux'

function SelectLang() {
  const slanguage = useSelector((state)=> state.languageSelected)
  const dispatch = useDispatch();
  function changelan(language){
    dispatch(changaeLanguage(language))
  }


  return (
    <div className='lan-selector'>
        <div onClick={(e)=>{changelan(e.target.className)}} className="English">🇬🇧</div>
        <div onClick={(e)=>{changelan(e.target.className)}} className="Hebrew">🇮🇱</div>
        <div onClick={(e)=>{changelan(e.target.className)}} className="French">🇫🇷</div>
    </div>
  )
}

export default SelectLang
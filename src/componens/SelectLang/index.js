import React from 'react'
import{addToCart, changaeLanguage} from '../../redux/action'
import {useSelector, useDispatch} from 'react-redux'
import styled from "styled-components";

function SelectLang({mainElem}) {
  const dispatch = useDispatch();

  function changelan(language){
    if(language=='Hebrew'){
      mainElem.current.setAttribute("dir","rtl")
    }
    else{mainElem.current.setAttribute("dir","")}
    dispatch(changaeLanguage(language))
  }
  
  return (
    <LanSelector>
        <Langue onClick={(e)=>{changelan(e.target.id)}} id="English">🇬🇧</Langue>
        <Langue onClick={(e)=>{changelan(e.target.id)}} id="Hebrew">🇮🇱</Langue>
        <Langue onClick={(e)=>{changelan(e.target.id)}} id="French">🇫🇷</Langue>
    </LanSelector>
  )
}

export default SelectLang


const LanSelector = styled.div`
    width: 20%;
    position: fixed;
    display: flex;
    justify-content: space-around;
`
const Langue = styled.div`
    &:hover{
      font-size: x-large;
      cursor: pointer;
      box-shadow: inset;
      box-shadow: 0px 2px 13px 5px #edebeb;
    }
`
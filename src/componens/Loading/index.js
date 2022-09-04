import React from 'react'
import './style.css'
import tranzlation from '../../languages/tranzlation'
import {useSelector, useDispatch} from 'react-redux'
import styled from "styled-components";

function Loading({page}) {

  const language = useSelector((state)=> state.languageSelected)
  
  return (
    <BodyLoading>{page} {tranzlation[language].Loading}</BodyLoading>
  )
}

export default Loading


const BodyLoading = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`
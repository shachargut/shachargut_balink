import React from 'react'
import './style.css'
import tranzlation from '../../languages/tranzlation'
import {useSelector, useDispatch} from 'react-redux'

function Loading({page}) {
  const language = useSelector((state)=> state.languageSelected)
  console.log(language);

  return (
    <div className='bodyLoading'>
   {page} {tranzlation[language].Loading}
</div>
  )
}

export default Loading
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../../componens/Loading';
import Storecard from '../../componens/Storecard';
import tranzlation from '../../languages/tranzlation';
import {useSelector, useDispatch} from 'react-redux'
import './style.css'
import styled from "styled-components";
import { PageContainer, WraPpage } from '../../componens/Pages';

function Homepage() {
  const [stores,setStores] = useState([]);
  const [loading,setLoading] = useState(false);
  const language = useSelector((state)=> state.languageSelected)

  useEffect(()=>{
    const bringData = async () => {
        const data ={query: `Stores {
            stores {
              city
              id
            }
          }`
         }
        const result = await axios.post("https://logical-calf-89.hasura.app/v1/graphql",{
            query: `{stores {
                  id
                  name
                  city
                  lang
                  address
                }}`,
            });
        setStores(result.data.data.stores);
        setLoading(true);
    }

    bringData();

  },[])

  if (!loading) {
    return (
        <Loading page = {tranzlation[language].Homepage.page}/>
    )
  } 

  return (
    <WraPpage>
         <PageContainer>{stores?.map((v)=><Storecard {...v}/>)}</PageContainer>
    </WraPpage>
  )
}

export default Homepage



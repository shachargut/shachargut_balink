import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../../componens/Loading';
import Storecard from '../../componens/Storecard';
import './style.css'

function Homepage() {
  const [stores,setStores] = useState([]);
  const [loading,setLoading] = useState(false);

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
        console.log(result.data.data.stores);
        setStores(result.data.data.stores);
        setLoading(true);
    }

    bringData();

  },[])

  if (!loading) {
    return (
        <Loading page = {"home page"}/>
    )
  } 

  return (
    <div className='home-page'>
    <div className='hp-container'>
        {stores?.map((v)=><Storecard {...v}/>)}
    </div>
    </div>
  )
}

export default Homepage
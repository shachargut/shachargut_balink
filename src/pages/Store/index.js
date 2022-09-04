import './style.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import tranzlation from '../../languages/tranzlation';
import {useSelector, useDispatch} from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Storecard from '../../componens/Storecard';
import Bookcard from '../../componens/Bookcard';
import Loading from '../../componens/Loading';
import { PageContainer, WraPpage } from '../../componens/Pages';

function Store() {
    const [books,setBooks] = useState([]);
    const [loading,setLoading] = useState(false);
    const [id, setId] = useSearchParams();
    const language = useSelector((state)=> state.languageSelected)


    useEffect(()=>{
      const bringData = async () => {
          
          const result = await axios.post("https://logical-calf-89.hasura.app/v1/graphql",{
              query: `query Books($where: books_bool_exp) {
                books(where: $where) {
                  id
                  name
                  type
                  isActive
                  price
                  author
                  store_id
                }
              }`,variables: {
                "where": {
                    "store_id": {
                        "_eq": String(id).replace("=","")
                    }
                  }
              }
            });
          setBooks(result.data.data.books);
          setLoading(true);
      }
  
      bringData();
  
    },[])

    if (!loading) {
      return (
          <Loading page = {tranzlation[language].Store.page}/>
      )
    } 
  
    return (
      <WraPpage>
           <PageContainer>{books?.map((book)=><Bookcard {...book}/>)}</PageContainer>
      </WraPpage>
    )
  }
export default Store
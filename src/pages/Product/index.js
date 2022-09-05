import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BcartContent, Card, DivWrapper, TextArea } from '../../componens/Card.style';
import tranzlation from '../../languages/tranzlation';
import { useSearchParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import{addToCart,updateCart} from '../../redux/action'
import Loading from '../../componens/Loading'
import { Title } from '../../componens/Title';
import { ContentFooter, MainContent, MainDescription, Nav, NavContainer, NavHeader, NavHwRAP, ProContainer, ProductWrapper, Rating, WrapContentFooter, WrapperCenter } from '../../componens/Product.style';
import { Btn } from '../../componens/Button';

function Product() {
    const [book,setBook] = useState([]);
    const [id, setId] = useSearchParams();
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector((state)=> state.cart)
    const language = useSelector((state)=> state.languageSelected)

    
    function addBookToCart () {
      let result = cart?.find((v)=>v.id==book.id)
      let addQbook = book;
      if(result){
        dispatch(updateCart(book));
      }
      else{
        addQbook.quantity = 1
        dispatch(addToCart(book));
      }
    }

    useEffect(()=>{
      const bringData = async () => {
          
          const result = await axios.post("https://logical-calf-89.hasura.app/v1/graphql",{
              query: `query Books_by_pk($booksByPkId: uuid!) {
                books_by_pk(id: $booksByPkId) {
                    id
                    name
                     type
                     isActive
                     price
                    store_id
                    author
                    description
                    publisher
                    language
                    paperback
                    ratings
                    stars
                    store {
                      name
                    }
                }
              }`,variables: {
                "booksByPkId":  String(id).replace("=","")
              }
            });
          setBook(result.data.data.books_by_pk);
          setLoading(true);
      }
  
      bringData();
  
    },[])

    if (!loading) {
      return (
          <Loading page = {tranzlation[language].Product.page}/>
      )
    } 
  
    return (
      <ProductWrapper>
       <ProContainer>
        <MainContent>
            <DivWrapper>
                <Title justifyContent="center" fontSize="35px" fontSizeE="25px" fontWeight="700">{book.name}</Title>
                <Title justifyContent="center" fontSize="20px" fontWeight="500">{book.author}</Title>
                <WrapperCenter>
                    <TextArea>{`⭐️`.repeat(book.stars)}</TextArea>
                    <TextArea>{`(${book.ratings} rating)`}</TextArea>
                </WrapperCenter>
            </DivWrapper>
            <MainDescription>
                {book.description}
            </MainDescription>
            <DivWrapper>
                <Title justifyContent="start" fontSize="30px" fontSizeE="25px" fontWeight="580">{tranzlation[language].Product.main.titleDetailes}:</Title>
                <WrapContentFooter>
                    <ContentFooter><TextArea fontWeight="550">{tranzlation[language].Product.main.Publisher}:</TextArea><TextArea marginLeft="1%">{book.publisher}</TextArea></ContentFooter>
                    <ContentFooter><TextArea fontWeight="550">{tranzlation[language].Product.main.Language}:</TextArea><TextArea marginLeft="1%">{book.language}</TextArea></ContentFooter>
                    <ContentFooter><TextArea fontWeight="550">{tranzlation[language].Product.main.Paperback}:</TextArea><TextArea marginLeft="1%">{book.paperback}</TextArea></ContentFooter>
                </WrapContentFooter>
            </DivWrapper>
        </MainContent>
        <Nav>
            <NavContainer>
                <NavHwRAP>
                 <NavHeader>
                    <TextArea>{tranzlation[language].Product.nav.buy}:</TextArea><TextArea>{book.price}€</TextArea>
                    <TextArea>{tranzlation[language].Product.nav.quantity}:</TextArea><TextArea>{book.quantity}</TextArea>
                 </NavHeader>
               </NavHwRAP>
               <WrapperCenter>
                 <Btn width="148px" onClick={()=>{addBookToCart()}}>{tranzlation[language].Product.nav.btnAddToCart}</Btn>
               </WrapperCenter>
            </NavContainer>
        </Nav>
        </ProContainer>
      </ProductWrapper>
    )
  }
export default Product
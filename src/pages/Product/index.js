import './style.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import{addToCart,updateCart} from '../../redux/action'
import Loading from '../../componens/Loading'

function Product() {
    const [book,setBook] = useState([]);
    const [id, setId] = useSearchParams();
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector((state)=> state.cart)
    
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

    console.log(cart);

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
          console.log(result.data.data.books_by_pk);
          setBook(result.data.data.books_by_pk);
          setLoading(true);
      }
  
      bringData();
  
    },[])

    if (!loading) {
      return (
          <Loading page = {"Book details"}/>
      )
    } 
  
    return (
      <div className='product-wrapper'>
       <div className='pro-container'>
        <div className='main-content'>
            <div className='main-header'>
                <div className='t-bookname'>{book.name}</div>
                <div className='author'>{book.author}</div>
                <div className='rating'>
                    <div className='stars'>{`⭐️`.repeat(book.stars)}</div>
                    <div className='rating'>{`(${book.ratings} rating)`}</div>
                </div>
            </div>
            <div className='main-description'>
                {book.description}
            </div>
            <div className='main-footer'>
                <div className='PD-details'>Product details</div>
                <div className='wrap-content-footer'>
                    <div className='content-footer'><div style={{"font-weight":"550"}}>Publisher: </div><div style={{"margin-left":"1%"}}>{book.publisher}</div></div>
                    <div className='content-footer'><div style={{"font-weight":"550"}}>Language: </div><div style={{"margin-left":"1%"}}> {book.language}</div></div>
                    <div className='content-footer'><div style={{"font-weight":"550"}}>Paperback: </div><div style={{"margin-left":"1%"}}> {book.paperback}</div></div>
                </div>
            </div>
        </div>
        <div className='nav-content'>
            <div className='container-nav'>
                <div className='wrap-h-c'>
                 <div className='nav-header'>
                    <div>buy:</div><div>{book.price}€</div>
                 </div>
               </div>
               <div className='nav-footer'>
                 <div className='addToCartbtn' onClick={()=>{addBookToCart()}}>add to cart</div>
               </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
export default Product
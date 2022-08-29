import {ADD_TO_CART,UPDATE_CART,DELETE_FROM_CART,ORDER,RESTART_CART} from './action'
const initialState ={
    cart:[],
    order:""
}
export const orederReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TO_CART:
            return{...state,cart:[...state.cart,action.payload]}                
        case UPDATE_CART:
            return{...state,cart:[...state.cart?.map((v)=>{
                                               if(v.id==action.payload.id){
                                                v.quantity++ 
                                                return v}
                                               else{return v}})]}
        case DELETE_FROM_CART:
            return {...state, cart:state.cart?.filter((v)=>v.id!=action.payload.id)}
        case ORDER:
            return {...state, order:action.payload}                                                           
        case RESTART_CART:
            return {...state, cart:[]}                                                           
        default:
            return state;    
    }
}
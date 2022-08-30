export const ADD_TO_CART = 'ADD_TO_CART' 
export const UPDATE_CART = 'UPDATE_CART' 
export const DELETE_FROM_CART = 'DELETE_FROM_CART' 
export const ORDER = 'ORDER' 
export const RESTART_CART = 'RESTART_CART' 
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE' 


export const addToCart = (product) => ({
    type:'ADD_TO_CART',
    payload:product
})
export const updateCart = (product) => ({
    type:'UPDATE_CART',
    payload:product
})
export const deleteItem = (product) => ({
    type:'DELETE_FROM_CART',
    payload:product
})
export const addOrderDetails = (id) => ({
    type:'ORDER',
    payload:id
})
export const restartCart = () => ({
    type:'RESTART_CART',
})
export const changaeLanguage = (language) => ({
    type:'CHANGE_LANGUAGE',
    payload:language
})


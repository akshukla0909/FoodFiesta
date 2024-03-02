import { createSlice } from '@reduxjs/toolkit'
// slice mtlb chota piece of box

const CartSlice = createSlice({
   name : "cart",
   initialState : {
    cart : []
   },
   reducers : {
     addToCart : (state, action)=>{
        const existingItem = state.cart.find( (item)=> item.id === action.payload.id)
        if(existingItem){
         state.cart =  state.cart.map((item)=> item.id === action.payload.id ? {...item , qty : item.qty +1} : item )
        }
        else{
         //  state mtlb cart
        // action ek function jaisa kuch
        state.cart.push(action.payload) //payload mtlb data -- ddta ko payload bolte yaha
        }   
     },
     removeFromCart : (state, action)=>{
         state.cart.pop(action.payload)
         
        state.cart = state.cart.filter(item => item.id !== action.payload.id)
     },
     incrementQty : (state,action)=>{
       state.cart = state.cart.map((item)=>
        item.id === action.payload.id ? {... item , qty : item.qty + 1 } : item 
       )
     },
     decrementQty : (state,action)=>{
      state.cart = state.cart.map((item)=>
       item.id === action.payload.id ? {... item , qty : item.qty - 1 } : item 
      )
    },
     setCart : (state,action)=>{
        state.cart = action.payload
     }

   }

})

export const {addToCart, removeFromCart , incrementQty, decrementQty, setCart} = CartSlice.actions
export default CartSlice.reducer;

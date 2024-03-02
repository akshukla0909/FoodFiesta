import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;


function Cart() {

  const [toggleCart, setToggle] = useState(false);

 const cartItems =  useSelector((state)=> state.cart.cart)
 const totalQty = cartItems.reduce((totalQty, item)=>{
     return totalQty + item.quantity
 }, 0)

 const totalPrice = cartItems.reduce((total, item)=>{
         return total + item.quantity * item.price
 },0) 

 const navigate = useNavigate()

 const checkOut = async()=>{
   const res = await axios.get('https://food-fiesta-server.onrender.com/checkout')
   console.log(res.data);
   const {url} = res.data
   console.log(url);
   window.location.href = url
 }

  return (
    <>
      <div className={`fixed top-0 right-0 lg:w-[24vw] w-full h-full p-4 bg-white ${toggleCart?"translate-x-0" : "translate-x-full"} transition-all duration-300 ease-in-out z-50`}>
        <div className='flex justify-between items-center m-2'>
            <span className='text-xl font-medium text-gray-700 '>My Order</span>
            <IoMdClose 
            onClick={()=>setToggle(!toggleCart)}
            className='border-[1.5px] hover:text-red-400 hover:border-red-400 cursor-pointer rounded-md border-gray-600 text-gray-600 font-bold text-xl' />
        </div>

        { cartItems.length > 0 ?
          cartItems.map((food)=>{
          return  <ItemCard 
          key={food.id} 
          {...food}
          />
        }) : 
          <h2 className='text-center text-lg font-bold text-red-600'>Your cart is empty.</h2>
         }

     
        <div className='bottom-0 left-0 absolute mx-8'>
        <h3 >Items : {totalQty} </h3>
        <h3>Total amount : {totalPrice}</h3>
        <hr className='w-[90vw] lg:w-[20vw] my-2' />
        <button 
         onClick={checkOut}
        className='border bg-green-500 py-1 px-3 font-medium rounded-lg lg:w-[20vw] w-[100vw] text-white mb-5'>Checkout</button>
      </div>
      </div>

      <FaShoppingCart 
       onClick={()=>setToggle(!toggleCart)}
       className={`fixed bottom-4 right-1 rounded-full shadow-md bg-white text-5xl p-3 
       cursor-pointer ${totalQty > 0 && "animate-bounce delay-400 transition-all" } `}
      />
    </>
  )
}

export default Cart
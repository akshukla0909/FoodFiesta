import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'
axios.defaults.withCredentials = true;
import axios from 'axios';
import { Link } from 'react-router-dom';

function Success() {

  const [loading, setloading] = useState(true)

  useEffect(() => {
    
    setTimeout(() => {
      setloading(false)
    }, 2500);
  }, []);

  const clearCart = async()=>{
        const res = axios.get('https://food-fiesta-server.onrender.com/clear-cart')
        const data = res.data
        console.log(data);
  }

  useEffect(() => {
      clearCart()
  }, [])
  

  return (
    <div className='flex flex-col items-center justify-center h-screen text-gray-700 font-medium'>
      {
        loading ? (<PropagateLoader color="#36d7b7"/>) 
        :
      (<div className='flex flex-col items-center'>
        <h2 className='text-3xl font-semibold mb-4 text-center'>Order successful!</h2>
        <p>Your order has been successfully placed.</p>
        <Link to='/' className='text-center font-bold mt-2 rounded-md bg-green-500 text-white py-3 px-4'>Back to home</Link>
       </div>
       )}
     
    </div>
  )
}

export default Success
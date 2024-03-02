import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const ResetPassword = () => {
    const foodBg = '../../public/burger-pizza-fast-food-design-isolated-vector-14340074-removebg-preview.png'

    const navigate = useNavigate()
    const [email, setemail] = useState('')

    const handleReset = async(e)=>{
      e.preventDefault()

      try {
         const res = await axios.put('https://food-fiesta-server.onrender.com/reset-password', {email})
         const data = await res.data;
         if(data.success){
            toast.success(data.success);
            navigate('/verify-otp')

         }
      } catch (error) {
        console.log(error.message);
      }
    }

  return (
    <>
<div className="bg-gray-100 flex justify-center items-center h-screen overflow-hidden">

<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl text-gray-600 font-normal mb-6 text-center">Recover Password</h1>
  <form
   onSubmit={handleReset}>
    <div className="mb-4">
      <label for="email" className="block text-gray-600">Email</label>
      <input type="email" id="email" 
      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-00" autoComplete="off" 
      name="email" 
      placeholder='enter email to recover password' 
      required
      value={email}
      onChange={e=> setemail(e.target.value)}
      />
    </div>
   
    <div className="mb-4 text-green-500">
      <Link to="/forgot-password" className="hover:underline cursor-pointer">Forgot email?</Link>
    </div>
    <button type="submit" className="bg-green-500 hover:bg-green-300 text-white font-semibold rounded-md py-2 px-4 w-full">Send</button>
  </form>
  {/* <div className="mt-6 text-black text-center ">
    <Link to="/signup" className="text-green-500 hover:underline cursor-pointer">Sign up Here</Link>
  </div> */}
</div>
</div>
    </>
  )
}

export default ResetPassword
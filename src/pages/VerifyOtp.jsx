import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const VerifyOtp = () => {

    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')

  return (
    <>
<div className="bg-gray-100 flex justify-center items-center h-screen overflow-hidden">

<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl text-gray-600 font-normal mb-6 text-center">Change Password</h1>
  <form action="#" method="POST">
    <div className="mb-4">
      <label for="email" className="block text-gray-600">Enter your otp</label>
      <input type="email" id="email" 
      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-00" autoComplete="off" 
      name="email" 
      placeholder='enter otp' 
      required
      value={otp}
      onChange={e=> setOtp(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label for="email" className="block text-gray-600">Enter a new password</label>
      <input type="email" id="email" 
      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-00" autoComplete="off" 
      name="email" 
      placeholder='enter new password' 
      required
      value={password}
      onChange={e=> setPassword(e.target.value)}
      />
    </div>
   
    <button type="submit" className="bg-green-500 hover:bg-green-300 text-white font-semibold rounded-md py-2 px-4 w-full">Set password</button>
  </form>
  {/* <div className="mt-6 text-black text-center ">
    <Link to="/signup" className="text-green-500 hover:underline cursor-pointer">Sign up Here</Link>
  </div> */}
</div>
</div>
    </>
  )
}

export default VerifyOtp
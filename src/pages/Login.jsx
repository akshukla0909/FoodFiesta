import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../redux/slices/AuthSlice'
import toast from 'react-hot-toast'
import axios from 'axios'

const Login = () => {
    const foodBg = '../../public/burger-pizza-fast-food-design-isolated-vector-14340074-removebg-preview.webp'

    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async (e)=>{
          e.preventDefault()
          
      try {
        const res = await axios.post('http://localhost:3000/login', {email,password})
          const data = await res.data
         
        if(res.status === 200){
          dispatch(loginUser())
          navigate('/')
          setTimeout(() => {
          toast.success(data.message);
          }, 300);

        }
        else{
          toast.error("gtlt")
        }
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <>
<div className="bg-gray-100 flex justify-center items-center h-screen overflow-hidden">
<div className="w-1/2 h-screen hidden lg:block mt-10 scale-[.9]">
  <img src={foodBg} alt="Placeholder Image" className="object-cover object-center w-[100%] h-[90%]" />
</div>
<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
<Link to="/" className="text-green-500 hover:underline cursor-pointer absolute right-6 top-2">Skip login</Link>
  <h1 className="text-2xl font-semibold mb-4">Login</h1>
  <form onSubmit={handleLogin} >
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-600">Email</label>
      <input type="email" id="email" 
      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-00" autoComplete="off" 
      name="email" 
      placeholder='youremail@gmail.com' 
      required
      value={email}
      onChange={e=> setemail(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600">Password</label>
      <input type="password" id="password" 
      name="password" 
      placeholder='*******'
      required
      value={password}
      onChange={e=>setPassword(e.target.value)} 
      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-00" autoComplete="off" />
    </div>
    <div className="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" className= "text-white accent-green-500" />
      <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
    </div>
    <div className="mb-6 text-green-500">
      <Link to="/forgot-password" className="hover:underline cursor-pointer">Forgot Password?</Link>
    </div>
    <button type="submit" className="bg-green-500 hover:bg-green-300 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
  </form>
  <div className="mt-6 text-black text-center">
    <Link to="/signup" className="text-green-500 hover:underline cursor-pointer">Sign up Here</Link>
  </div>
</div>
</div>
    </>
  )
}

export default Login
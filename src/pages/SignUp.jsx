import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate()

    const foodBg = '/src/assets/06img.webp'

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = async(e)=>{
         e.preventDefault()

        try {
          const res = await axios.post('https://food-fiesta-server.onrender.com/signup', {name, email,password})
          const data = await res.data
          console.log(data);
          if(res.status === 201){
           toast.success(data.message)
           navigate('/login')
          }
          else if(res.status === 400 || res.status === 500){
           toast.error(data.message)
          }
        } catch (error) {
          console.error('Error:', error);
          toast.error('An error occurred. Please try again later.');
        }


    }

  return (
    <>
<div className="bg-gray-100 flex justify-center items-center h-screen overflow-hidden">
<div className="w-1/2 h-screen hidden lg:block mt-10 scale-[.9]">
  <img src={foodBg} alt="Placeholder Image" className="object-cover object-center w-[100%] h-[90%]" />
</div>
<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
<Link to="/" className="text-green-500 hover:underline cursor-pointer absolute right-6 top-2">Skip signup</Link>
  <h1 className="text-2xl font-semibold mb-4">Create your account</h1>
  <form 
  onSubmit={handleSignUp} 
  method="POST">
    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-600">Name</label>
      <input type="text" id="name" name="name" 
      required
      value={name}
      onChange={e=> setName(e.target.value)}
      placeholder='John Doe' className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-00" autoComplete="off" />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-600">Email</label>
      <input type="email" id="email" name="email"
      required
      value={email}
      onChange={e=> setEmail(e.target.value)}
      placeholder='email@gmail.com' className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-00" autoComplete="off" />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600">Password</label>
      <input type="password" id="password" name="password" 
      required
      value={password}
      onChange={e=>setPassword(e.target.value)}
      placeholder='make a strong password' className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-00" autoComplete="off" />
    </div>
    <div className="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" className="text-green-500" />
      <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
    </div>
    {/* <div className="mb-6 text-green-500">
      <a href="#" className="">Forgot Password?</a>
    </div> */}
    <button type="submit" className="bg-green-500 text-white font-semibold rounded-md py-2 px-4 w-full">Signup</button>
  </form>
  <div className="mt-6 text-black text-center ">
    <Link to="/login" className="text-green-500">Already have an account ?</Link>
  </div>
</div>
</div>
    </>
  )
}

export default SignUp

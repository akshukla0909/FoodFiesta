import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const NavList = ({toggleNav, setToggleNav, auth}) => {
 
    const navigate = useNavigate()
    const handleLogOut = async ()=>{
        const res = await axios.get('http://localhost:3000/logout')
        const data = res.data
        console.log(data);
        toast.success("logout success")
        navigate('/login')
        location.reload()
    }

  return (
    <div className={`${!toggleNav && "translate-x-[200px]"} fixed top-12 right-5 lg:right-8 p-3 w-fit
     bg-white bg-opacity-10 backdrop-blur-sm text-gray-600 transition-all duration-500 ease-in-out`}>
        {
            
            auth ? (
                <li onClick={handleLogOut} className='select-none cursor-pointer list-none hover:text-black'>logout</li>
            ) : (
                <div className='flex flex-col gap-2'>
                    <Link to="/login"  className='hover:text-black select-none' >Login</Link>
                    <Link to="/signup" className='hover:text-black select-none' >SignUp</Link>
                </div>
            )
        }
    </div>
  )
}

export default NavList
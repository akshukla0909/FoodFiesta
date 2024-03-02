import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import NavList from './NavList'
import axios from 'axios'
import { useEffect } from 'react'
import { loginUser, setUser } from '../redux/slices/AuthSlice'
import { getCart } from '../../helper'
import { setCart } from '../redux/slices/CartSlices'
axios.defaults.withCredentials =true;

function Navbar() {

  const dispatch = useDispatch()
  const [toggleNav, setToggleNav] = useState(false)

  const auth = useSelector(state=>state.auth.isAuth)
  const user = useSelector(state=>state.auth.user)

  const getUser = async ()=>{
      try {
        const res = await axios.get('https://food-fiesta-server.onrender.com/get-user', 
        { withCredentials : true });
 
        const data = res.data
        dispatch(setUser(data.user))
        dispatch(loginUser())
       //  console.log(user);
      } catch (error) {
        console.log(error.message);
      }
  }

  getCart(user).then((data)=> dispatch(setCart(data.cartItems)));

  useEffect(() => {
     getUser()
  }, [])
  

  return (
      
      <nav className='flex flex-col lg:flex-row justify-between my-3 mx-6'>
        <div>
            <h3 className='text-xl font-semibold text-gray-500'>{new Date().toUTCString().slice(0,16) }</h3>
            <h1 className='font-medium text-2xl'>FoodFiesta</h1>
        </div>
        <div className='flex items-center gap-5'>
        <div >
            <input type="search" 
            id=''
            name="search" placeholder='Search here' 
            autoComplete='off' 
            className='p-2 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[18vw]'
            />
        </div>
        <GiHamburgerMenu className={`text-xl cursor-pointer ${toggleNav && 'hidden'} 
        transition-all ease-in-out duration-500`}
        onClick={()=>{setToggleNav(true)}}
        />
        <MdClose className={`text-xl cursor-pointer ${ !toggleNav && 'hidden'} 
        transition-all ease-in-out duration-500`}
        onClick={()=>{setToggleNav(false)}}
        />
        <NavList auth={auth} toggleNav={toggleNav} setToggleNav={setToggleNav} />
        </div>
      </nav>
  )
}

export default Navbar
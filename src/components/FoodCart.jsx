import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/slices/CartSlices';


function FoodCart({id,name,price, rating, img,desc, handleToast}) {
  
     const dispatch =  useDispatch()
  return (
    <div className='font-bold w-[270px] p-6 bg-white flex flex-col rounded-lg gap-3'>
        <img 
        src={img}
        alt=""
        className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500
        ease-in-out
        '
        />

        <div className='text-sm flex justify-between'>
            <h2>{name}</h2>
            <span className='text-green-500'>₹{price}</span>
        </div>
        <p className='text-sm font-normal leading-4'>{desc.slice(0,50)}...</p>
        <div className='flex items-center justify-between'> 
            <span className='flex items-center gap-[2.5px]'>
                <FaStar className='text-yellow-400' />{rating}
            </span>
            <button 
            onClick={()=>{
              dispatch(addToCart({id, name, price, img, rating ,qty : 1 }))
              handleToast(name);
            }} 
             className='p-1 px-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg'>Add to cart</button>
        </div>
    </div>
  )
}

export default FoodCart
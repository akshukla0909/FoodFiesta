import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { addToCart, removeFromCart, incrementQty, decrementQty } from '../redux/slices/CartSlices';
import { useDispatch } from 'react-redux';


function ItemCard({id,name,qty,price,img}) {

  const dispatch = useDispatch()

  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-2'>
        <MdDelete 
         onClick={()=>{
          dispatch(removeFromCart({id, img, name, price , qty}));
          toast(`${name} removed`,{
            icon : "👋"
          })
         }}
        className='absolute right-0 mx-7  text-gray-600 cursor-pointer'/>
      <div>
        <img src={img} alt="" 
        className='w-[60px]'
        />
      </div>
      <div>
        <h2 className='font-bold text-gray-800'>{name}</h2>
        <div className='flex justify-between '>
         <span className='text-green-500 font-bold'>₹{price}</span>
        <div className='flex items-center gap-2 absolute right-7'>
        <AiOutlineMinus 
          onClick={()=>
             qty > 1 ? dispatch(decrementQty({id}))
            : (qty == 0)
          }
          className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
           <span>{qty}</span>

           <AiOutlinePlus
            onClick={()=> 
              qty >= 1 ? 
              dispatch(incrementQty({id}))
              : (qty == 0 )
            }
            className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
           
        </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
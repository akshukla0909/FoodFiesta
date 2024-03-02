import axios from 'axios';
import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { getCart } from '../../helper';
import { setCart } from '../redux/slices/CartSlices';


function ItemCard({id,name,quantity,price,image, _id}) {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user);

  const removeFromCart = async (id) => {
    const res = await axios.delete(
      `http://localhost:3000/remove-from-cart/${id}`
    );
    const data = await res.data;
    toast.success(data.message);
    getCart(user).then((data) => dispatch(setCart(data.cartItems)));
  };

  const incrementQuantity = async (id) => {
    console.log(id);
    const res = await axios.put(
      `http://localhost:3000/increment-quantity/${id}`
    );
    const data = await res.data;
    getCart(user).then((data) => dispatch(setCart(data.cartItems)));
  };

  const decrementQuantity = async (id) => {
    console.log(id);
    const res = await axios.put(
      `http://localhost:3000/decrement-quantity/${id}`
    );
    const data = await res.data;
    toast.success("one item removed")
    getCart(user).then((data) => dispatch(setCart(data.cartItems)));
  };


  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-2'>
        <MdDelete 
         onClick={()=>{
            removeFromCart(_id)
         }}
        className='absolute right-0 mx-7  text-gray-600 cursor-pointer'/>
      <div>
        <img src={image} alt="" 
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
             quantity > 1 ? decrementQuantity(_id)
            : (quantity == 0)
          }
          className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
           <span>{quantity}</span>

           <AiOutlinePlus
            onClick={()=> 
              quantity >= 1 ? 
              incrementQuantity(_id)
              : (quantity == 0 )
            }
            className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
           
        </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
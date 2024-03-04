import React from 'react'
import FoodCart from './FoodCart'
import FoodData from '../data/FoodData.js'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';


const Fooditem = () => {

  const category = useSelector((state)=> state.category.category);
  const handleToast = (name)=> toast.success(`Added ${name} to cart`);
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-0 gap-y-6 lg:justify-start my-10'>
       
       {
        FoodData.filter((food)=>{
          if(category === "All"){
            return food;
          }
          else {
           return  category === food.category;
          }
        }).map((food)=>(
              < FoodCart 
                key={food.id} 
                id={food.id} 
                price={food.price} 
                name={food.name} 
                desc={food.desc}
                img = {food.img} 
                rating={food.rating}
                handleToast = {handleToast}
              />
        ))
       }

        {/* {
            FoodData.map((food)=>{
                // console.log(food);
                return  
            })
        } */}

    </div>
    </>
  )
}

export default Fooditem

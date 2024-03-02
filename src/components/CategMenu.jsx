import React, { useEffect, useState } from 'react'
import FoodData from '../data/FoodData'
import { useDispatch, useSelector } from 'react-redux'
import { setCateg } from '../redux/slices/CategSlices'

function CategMenu() {

  const [categ, setcateg] = useState([])

  const listUniqCateg = ()=>{
    const uniqCateg = [... new Set(FoodData.map((food)=> food.category))]
    setcateg(uniqCateg)
    console.log(categ);

  }

  useEffect(() => {
    listUniqCateg()
   
  }, [])
  
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category )

  return (
    <div className='mx-6 my-[3vw]'>
        <h3 className='text-lg font-semibold'>Select the best food</h3>
        <div className='flex gap-3 my-3 overflow-x-scroll lg:overflow-x-hidden'>
                <button
                  onClick={()=> dispatch(setCateg("All"))}
                  className={`px-3 py-[4px] bg-gray-200 rounded-lg font-medium hover:bg-green-500 hover:text-white ${selectedCategory === "All" &&  "bg-green-500 text-white"}`}>
                  All
                </button> 
            {
              categ.map((category, index)=>{
                return ( 
                   <button
                  onClick={()=> dispatch(setCateg(category))}
                   key={index} className={`px-3 py-[4px] bg-gray-200 rounded-lg font-medium ${selectedCategory === category &&  "bg-green-500 text-white"}`}>
                  { category }
                   </button>
                )
              })
            }
            {/* <button className='px-3 py-[4px] bg-gray-200 rounded-lg font-medium hover:bg-green-500 hover:text-white'>Lunch</button>
            <button className='px-3 py-[4px] bg-gray-200 rounded-lg font-medium hover:bg-green-500 hover:text-white'>Breakfast</button>
            <button className='px-3 py-[4px] bg-gray-200 rounded-lg font-medium hover:bg-green-500 hover:text-white'>Dinner</button>
            <button className='px-3 py-[4px] bg-gray-200 rounded-lg font-medium hover:bg-green-500 hover:text-white'>Snacks</button> */}
        </div>
    </div>
  )
}

export default CategMenu
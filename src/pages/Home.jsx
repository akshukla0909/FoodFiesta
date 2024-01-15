import React from 'react'
import Navbar from '../components/Navbar'
import CategMenu from '../components/CategMenu'
import Fooditem from '../components/Fooditem'
import Cart from '../components/Cart'

function Home() {
  return (
    <div>
      <Navbar />
      <CategMenu/>
      < Fooditem />
      <Cart />
    </div>
  )
}

export default Home
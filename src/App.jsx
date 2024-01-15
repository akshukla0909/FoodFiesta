import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/success' element={ < ProtectedRoute elem={<Success/>} /> } />
          <Route path='*' element={ <Error/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
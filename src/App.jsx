import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import VerifyOtp from './pages/VerifyOtp'


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/success' element={ <Success/> } />
          {/* <Route path='/success' element={ < ProtectedRoute elem={<Success/>} /> } /> */}
          <Route path='*' element={ <Error/> } />
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/forgot-password' element={<ResetPassword/>}></Route>
          <Route path='/verify-otp' element={<VerifyOtp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
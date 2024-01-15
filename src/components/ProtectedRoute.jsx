import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({elem}) {

    const cartItens = useSelector((state)=> state.cart.cart)
  return (
    cartItens.length > 0 ? elem : <Navigate to="/" />
  )
}

export default ProtectedRoute
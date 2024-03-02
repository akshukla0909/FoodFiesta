import { configureStore } from '@reduxjs/toolkit'
import CartSlices from './slices/CartSlices';
import CategSlices from './slices/CategSlices';
import AuthSlice from './slices/AuthSlice';

const Store = configureStore({
    reducer : {
        cart : CartSlices,
        category : CategSlices,
        auth : AuthSlice
    }
})

export default Store;
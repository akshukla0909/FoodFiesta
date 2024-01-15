import { configureStore } from '@reduxjs/toolkit'
import CartSlices from './slices/CartSlices';
import CategSlices from './slices/CategSlices';

const Store = configureStore({
    reducer : {
        cart : CartSlices,
        category : CategSlices
    }
})

export default Store;
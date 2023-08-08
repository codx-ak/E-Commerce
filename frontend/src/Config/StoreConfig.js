import CartSlice from '../Store/CartSlice'
import {configureStore} from '@reduxjs/toolkit'

export const store=configureStore({
    reducer:{
        CartStore: CartSlice
    }
})
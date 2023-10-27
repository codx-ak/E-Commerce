import AuthSlice from '../Auth/AuthSlice'
import CartSlice from '../Store/CartSlice'
import OrderSlice from '../Store/OrderSlice'
import {configureStore} from '@reduxjs/toolkit'

export const store=configureStore({
    reducer:{
        CartStore: CartSlice,
        OrderStore:OrderSlice,
        AuthStore:AuthSlice
    }
})
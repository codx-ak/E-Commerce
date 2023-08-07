import ProductSlice from "../Store/ProductSlice";
import {configureStore} from '@reduxjs/toolkit'

export const store=configureStore({
    reducer:{
        ProductStore: ProductSlice
    }
})
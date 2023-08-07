import {createSlice} from '@reduxjs/toolkit'
import { fetchProduct } from '../Api/ProductApi'


const initialState={
    value:[]
}

const ProductSlice=createSlice({
    name:'ProductStore',
    initialState:initialState,
    reducers:{
        AllProducts:(state,actions)=>{
            state.value=initialState.value
        },
        FilterProducts:(state,actions)=>{

        }
    }
})

export const {AllProducts,FilterProducts}=ProductSlice.actions

export default ProductSlice.reducer
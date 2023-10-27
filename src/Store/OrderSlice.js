import {createSlice} from '@reduxjs/toolkit'
import { toast } from "react-toastify";
const initialState={
    value:[]
}

const OrderSlice=createSlice({
    name:'OrderStore',
    initialState:initialState,
    reducers:{

        AddOrder:(state,action)=>{
            const Product={
                orderId:12345,
                date:new Date(),
                totalprice:10000,
                product:[
                    {...action.payload.Product,
                    status:'Order Placed',
                    deliveryDate:new Date()}
                ],
                User:action.payload.User
                }
            state.value.push(Product)
            console.log(state.value);
            toast.success("Purchase Successfully");  
        },

        RemoveOrder:(state,action)=>{
            const ProductIndex =state.value.findIndex((data)=>action.payload.id === data.id)
            state.value.splice(ProductIndex,1)
            toast.error("Order Removed");         
               
        }

}})

export const {AddOrder,RemoveOrder}=OrderSlice.actions
export default OrderSlice.reducer
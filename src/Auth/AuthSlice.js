import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const AuthSlice=createSlice({
    name:"AuthStore",
    initialState:{
        value:[{
            name:'user',
            email:'user@gmail.com',
            pass:'1234',
            
        }]
    },
    reducers:({
        AuthCreate:(state,action)=>{
            state.value.push({
                name:action.payload.name,
                email:action.payload.email,
                psss:action.payload.psw
            })
            toast.success('Account Created')
        }
        
    })
})

export const  {AuthCreate} = AuthSlice.actions

export default AuthSlice.reducer
import {createSlice} from '@reduxjs/toolkit'

const initialState={
    value:[
        {
        "orderId":'1234356',
        "date":"12 Nov 2023",
        'totalprice':20000,
        "product":[
            {
            "id": 12,
            "title": "Brown Perfume",
            "description": "Royal_Mirage Sport Brown Perfu...",
            "price": 40,
            "discountPercentage": 15.66,
            "rating": 4,
            "stock": 52,
            "count":3,
            "status":'Order Placed',
            "deleveryDate":'12 Nov 2023',
            "total":233,
            "brand": "Royal_Mirage",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
            "images": [
              "https://i.dummyjson.com/data/products/12/1.jpg",
              "https://i.dummyjson.com/data/products/12/2.jpg",
              "https://i.dummyjson.com/data/products/12/3.png",
              "https://i.dummyjson.com/data/products/12/4.jpg",
              "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
            ]
            }
        ]
    },
        {
        "orderId":'87899098',
        "date":"12 Nov 2023",
        'totalprice':20000,
        "product":[
            {
            "id": 12,
            "title": "Perfume",
            "description": "Royal_Mirage Sport Brown Perfu...",
            "price": 40,
            "discountPercentage": 15.66,
            "rating": 4,
            "stock": 52,
            "count":3,
            "status":'Order Placed',
            "deleveryDate":'12 Nov 2023',
            "total":233,
            "brand": "Royal_Mirage",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/12/2.jpg",
            "images": [
              "https://i.dummyjson.com/data/products/12/1.jpg",
              "https://i.dummyjson.com/data/products/12/2.jpg",
              "https://i.dummyjson.com/data/products/12/3.png",
              "https://i.dummyjson.com/data/products/12/4.jpg",
              "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
            ]
            }
        ]
    }
      ]
}

const OrderSlice=createSlice({
    name:'OrderStore',
    initialState:initialState,
    reducers:{

        AddOrder:(state,action)=>{
            const Product={
                ...action.payload.product,
                date:new Date(),
                status:'Order Placed',
                deliveryDate:new Date(),
                total:action.payload.total
                }
            state.value.push(Product)
            alert("Purchase Successfully")     
        },

        RemoveOrder:(state,action)=>{
            let ProductIndex=null
            state.value.find((data,index)=>{
                if(action.payload.orderId == data.orderId){
                    ProductIndex=index
                }
            })
            state.value.splice(ProductIndex,1)
                alert("Order Removed ")
            
            
               
        }

}})

export const {AddOrder,RemoveOrder}=OrderSlice.actions
export default OrderSlice.reducer
import axios from 'axios';
import {toast} from 'react-toastify'

export const ProductsAPI=()=>{
      try{
           const res= axios.get('https://dummyjson.com/products').then(value=>value.data.products)
           return res
      }
      catch(err){
            toast.error('Something Error')
      }
}
export const ProductCategory=()=>{
      try{
           const res= axios.get('https://dummyjson.com/products/category/smartphones').then(value=>value.data.products)
           return res
      }
      catch(err){
            toast.error('Something Error')
      }
}

export const FilterProductID=(id)=>{
      try{
           const res= axios.get('https://dummyjson.com/products/'+id).then(value=>value.data)
           return res
      }
      catch(err){
            toast.error('Something Error')
      }
}
export const SearchProduct=(data)=>{
      try{
           const res= axios.get('https://dummyjson.com/products/search?q='+data).then(value=>value.data.products)
           return res
      }
      catch(err){
            toast.error('Something Error')
      }
}
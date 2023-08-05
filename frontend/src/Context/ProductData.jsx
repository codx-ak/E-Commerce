import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import {Result} from '../Api/getData'

export const ProductDataList=createContext()

const ProductData = ({children}) => {
    const [Product,setProduct]=useState([])

  useEffect(()=> {
    async function Fetcher(){
      return await Result.then(data=>{ 
        const Data=data.products
        return setProduct(Data)
      })
    }
    Fetcher()
  },[Product])
  return (
    <ProductDataList.Provider value={Product}>{[children]}</ProductDataList.Provider>
  )
}

export default ProductData
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { ProductApi } from '../Api/ProductApi'

export const ProductDataList=createContext()

const ProductData = ({children}) => {
    
  const [AllProduct,setAllProduct]=useState([])
  const [FilteredByMobile,setFilteredByMobile]=useState([])
  const [FilteredByLaptops,setFilteredByLaptops]=useState([])
  const [FilteredByDecoration,setFilteredByDecoration]=useState([])
  const [FilteredByFragrances,setFilteredByFragrances]=useState([])

  const [FilteredByRating,setFilteredByRating]=useState([])
  const [FilteredByBrand,setFilteredByBrand]=useState([])

 
  useEffect(()=> {
    async function Fetcher(){
      const Data= await ProductApi
      setAllProduct(Data)
      
      setFilteredByMobile(Data.filter(data=>data.category==='smartphones'))
      setFilteredByLaptops(Data.filter(data=>data.category==='laptops'))
      setFilteredByDecoration(Data.filter(data=>data.category==='home-decoration'))
      setFilteredByFragrances(Data.filter(data=>data.category==='fragrances'))
      setFilteredByRating(Data.filter(data=>data.rating >= 4.8))
      setFilteredByBrand(Data.filter(data=>data.brand==='Apple'))
    }
    Fetcher()
  },[AllProduct])

  function FilterById(id){
    return AllProduct.find(value=>value.id==id)
  }

  const Product={
    AllProduct,
    FilteredByMobile,
    FilteredByLaptops,
    FilteredByDecoration,
    FilteredByFragrances,
    FilteredByRating,
    FilteredByBrand,
    FilterById
  }

  return (
    <ProductDataList.Provider value={Product}>{[children]}</ProductDataList.Provider>
  )
}

export default ProductData
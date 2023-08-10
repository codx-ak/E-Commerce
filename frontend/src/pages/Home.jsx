import React, { useContext } from 'react'
import ProductCard from '../components/Card/ProductCard'
import { Box, Button, Card, Container, Typography } from '@mui/material'
import { ProductDataList } from '../Context/ProductData'
import Banner from '../components/Home/Banner'

const Home = () => {
  const {FilteredByRating,FilteredByBrand}=useContext(ProductDataList)

  return (
    <>
    <Box>
      <Banner/>
    </Box>
    <Container>
    <Typography variant='h4' sx={{textAlign:'center'}}>Popular Products</Typography>
    <Box sx={{display:'flex',flexWrap:'wrap',gap:'5px',marginTop:4}}>
      {FilteredByRating.length ? FilteredByRating.map((product)=>{
        return(<ProductCard key={product.id} ProductData={product}/>)
      }):<Typography variant='h4' color='gray' sx={{textAlign:'center',padding:'10%',width:'100%'}}>No Products Available</Typography>}
    </Box>
      {FilteredByBrand.length ?
      <>
    <Typography variant='h4' sx={{textAlign:'center',marginTop:10}}>Brand Products</Typography>
    <Box sx={{display:'flex',flexWrap:'wrap',gap:'5px',marginTop:4}}>
      {FilteredByBrand.map((product)=>{
        return(<ProductCard key={product.id} ProductData={product}/>)
      })}
    </Box>
    </>
    : ''}
    </Container>
    </>
  )
}

export default Home
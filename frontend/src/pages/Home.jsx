import React, { useContext } from 'react'
import ProductCard from '../components/Card/ProductCard'
import { Box, Button, Card, Container, Typography } from '@mui/material'
import { ProductDataList } from '../Context/ProductData'
import {Link} from 'react-router-dom'
import Banner from '../components/Home/Banner'
import Newsletter from '../components/Home/Newsletter'

const Home = () => {
  const Product=useContext(ProductDataList)
  const filterdProducts =Product.filter((value)=>value.rating > 4.8)
  const filterdBrandProducts =Product.filter((value)=>value.category == 'smartphones')
  return (
    <>
    <Box>
      <Banner/>
    </Box>
    <Container>
    <Typography variant='h4' sx={{textAlign:'center'}}>Popular Products</Typography>
    <Box sx={{display:'flex',flexWrap:'wrap',gap:'5px',marginTop:4}}>
      {filterdProducts.length ? filterdProducts.map((product,index)=>{
        return(<Card variant="outlined" sx={{width:280,height:350,cursor:'pointer'}} key={product.id}><Link to={`/product/${product.id}`}><ProductCard ProductData={product}/></Link></Card>)
      }):<Typography variant='h4' color='gray' sx={{textAlign:'center',padding:'10%',width:'100%'}}>No Products Available</Typography>}
    </Box>

    <Typography variant='h4' sx={{textAlign:'center',marginTop:10}}>Brand Mobiles</Typography>
    <Box sx={{display:'flex',flexWrap:'wrap',gap:'5px',marginTop:4}}>
      {filterdBrandProducts.length && filterdBrandProducts.map((product,index)=>{
        return(<Card variant="outlined" sx={{width:280,height:350,cursor:'pointer'}} key={product.id}><Link to={`/product/${product.id}`}><ProductCard ProductData={product}/></Link></Card>)
      })}
    </Box>
    </Container>
    <Newsletter/>
    </>
  )
}

export default Home
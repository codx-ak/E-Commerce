import React, { useContext } from 'react'
import {Container,Breadcrumbs,Link,Typography, Button, Box, Card, Pagination, PaginationItem, List, ListItem} from '@mui/material'
import ProductCard from '../components/Card/ProductCard'
import { ProductDataList } from '../Context/ProductData'
const Products = () => {
  const Product=useContext(ProductDataList)
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" sx={{margin:2}}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        
        <Typography>
        Category
        </Typography>
      </Breadcrumbs>
      <Box>
        <Box sx={{display:'flex',justifyContent:"space-around",alignItems:"center",gap:1}}>
          <Box>
          <Button type='button' variant='contained'>All</Button>
          <Button type='button' variant='outlined'>Mobiles</Button>
          <Button type='button' variant='outlined'>Laptops</Button>
          <Button type='button' variant='outlined'>Cloths</Button>
          <Button type='button' variant='outlined'>Shoes</Button>
          </Box>
          <Box>
            Sort
          </Box>
        </Box>
        <Box sx={{display:'flex',flexWrap:'wrap',gap:1,marginTop:4}}>
        {Product.length ? Product.map((product,index)=>{
        return(<Card variant="outlined" sx={{width:280,height:350}} key={index}><ProductCard ProductData={product}/></Card>)
      }):<Typography>No Products</Typography>}
        </Box>
      </Box>
      <Pagination sx={{marginTop:3,marginLeft:8}}>
        <PaginationItem  selected>1</PaginationItem>
      </Pagination>
    </Container>
  )
}

export default Products
import React  from 'react'
import { Box, Card, Container, Typography} from '@mui/material'
import HomeImg from '../assets/home.jpg'
import SecurityIcon from '@mui/icons-material/Security';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ChatIcon from '@mui/icons-material/Chat';
import { ProductCategory } from '../Api/ProductApi';
import Loader from '../components/Spinner/Loader';
import ProductCard from '../components/Card/ProductCard';
import { useQuery } from '@tanstack/react-query';
const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["Mobileproduct"],
    queryFn: ProductCategory,
  });


  const Products=data || []
  return (
    <>
    <Box>
      <img src={HomeImg} height={370} width={'100%'} loading='lasy' alt="Home Img" />
    </Box>
    <Container>
        <Typography variant='h5' align='center' p={2}>Popular Products</Typography>
      <Box sx={{display:'flex',gap:1,flexFlow:'row wrap'}}>
        {
          isLoading && <Loader/>
        }
        {
          Products.map((product, index) => {
            return <ProductCard key={product.id} ProductData={product} />;
          })
        }
      </Box>
      <Typography variant='h5' align='center' p={2}>Our Service</Typography>
      <Box className='benifits'>
        <Card className='b-item' sx={{boxShadow:2}} variant='outlined'>
          <Typography component='div' className='b-icon'><SecurityIcon color='warning'/></Typography>
          <Typography variant='h6'>Secure Package</Typography>
          <Typography component='p'>Lorem ipsum, dolor sit amet consectetur adipisicing sit amet  adipisicing elit. Ducimus, rem.</Typography>
        </Card>
        <Card className='b-item' sx={{boxShadow:2}} variant='outlined'>
          <Typography component='div' className='b-icon'><LocalShippingIcon color='warning'/></Typography>
          <Typography variant='h6'>Free Delivery</Typography>
          <Typography component='p'>Lorem ipsum, dolor sit amet consectetur adipisicing sit amet  adipisicing elit. Ducimus, rem.</Typography>
        </Card>
        <Card className='b-item' sx={{boxShadow:2}} variant='outlined'>
          <Typography component='div' className='b-icon'><ChatIcon color='warning'/></Typography>
          <Typography variant='h6'>24/7 Service</Typography>
          <Typography component='p'>Lorem ipsum, dolor sit amet consectetur adipisicing sit amet  adipisicing elit. Ducimus, rem.</Typography>
        </Card>
      </Box>
    </Container>
    </>
  )
}

export default Home
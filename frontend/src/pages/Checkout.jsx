import React from 'react'
import { Box, Button, Card, Container, TextField, Typography} from '@mui/material'
import {useForm} from "react-hook-form"

const Checkout = () => {
  const {register,handleSubmit,formState:{errors}}=useForm()
  return (
    <Container sx={{display:'flex',justifyContent:"space-around",alignItems:"center",padding:5}}>
      <Box>
      <form action="" method="post" onSubmit={handleSubmit((e)=>console.log(e))}>
      <Card variant='outlined'sx={{display:'flex',justifyContent:"center",alignItems:"center",flexFlow:'column',gap:5,padding:3,width:500}}>
      <Typography variant='h4'>Checkout</Typography>
      <TextField {...register("Address",{required:"Enter Address"})} variant='outlined'  label="Enter Address" type='text'/>
      <TextField {...register("city",{required:"Enter City"})} variant='outlined'  label="Enter City" type='text'/>
      <TextField {...register("State",{required:"Enter State"})} variant='outlined'  label="Enter State" type='text'/>
      <TextField {...register("Pincode",{required:"Enter Pincode"})} variant='outlined'  label="Enter PIN" type='number'/>
      <Box sx={{width:"100%",display:'flex',justifyContent:"space-around",alignItems:"center"}}>
      <Button variant='outlined' >Cancel</Button>
      <Button variant='contained' type='submit' >Book Now</Button>
      </Box>
    </Card>
    </form>
    </Box>
    <Box>
      <Card variant='elevation'sx={{width:250,padding:5}}>

      <Typography variant='h5'>Price List</Typography>
      <Typography variant='p' component='div'>Total Items : 2</Typography>
      <Typography variant='p'component='div'>Delivery Charges : $20</Typography>
      <Typography variant='p'component='div'>Extra Charges : 0</Typography>
      <Typography variant='p'component='div'>Total Price : $500</Typography>
      </Card>
    </Box>
    </Container>
  )
}

export default Checkout
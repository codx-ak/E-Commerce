import React, { useEffect } from 'react'
import { Box, Button, Card, Container, TextField, Typography} from '@mui/material'
import {useForm} from "react-hook-form"
import './checkout.css'
import {Link,useNavigate} from 'react-router-dom'

const Checkout = () => {
  const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors}}=useForm()
  function ValidateSubmit(){
    try{
      navigate('payment',{replace:true})
    }
    catch(err){
      alert(err)
    }
  }

  return (
    <Container  sx={{display:'flex',justifyContent:"center",alignItems:"center",padding:5}}>
      <Card variant='outlined' className='checkout'>
      <Typography variant='h4'textAlign='center' paddingTop={1} >Checkout</Typography>
      <form action="" method="post" onSubmit={handleSubmit(ValidateSubmit)}>
      <Box className='form-container'>
      <Box sx={{display:'flex',justifyContent:"center",alignItems:"start",flexFlow:'column',gap:4,padding:3,width:'50%'}}>
      <Typography component='p' variant='h6' >Personal Details</Typography>
      <TextField {...register("Name",{required:"Enter Name"})} variant='outlined'  label="Enter Name" type='text'/>
      <TextField {...register("email",{required:"Enter Email"})} variant='outlined'  label="Enter Email" type='email'/>
      <TextField {...register("mobile",{required:"Enter mobile"})} variant='outlined'  label="Enter Mobile" type='number'/>
      <TextField {...register("phone",{required:"Enter Pincode"})} variant='outlined'  label="Enter phone" type='number'/>
      </Box>
      <Box sx={{display:'flex',justifyContent:"center",alignItems:"start",flexFlow:'column',gap:4,padding:3,width:'50%'}}>
      <Typography component='p' variant='h6'textAlign='start' >Address Details</Typography>
      <TextField {...register("Address",{required:"Enter Address"})} variant='outlined'  label="Enter Address" type='text'/>
      <TextField {...register("city",{required:"Enter City"})} variant='outlined'  label="Enter City" type='text'/>
      <TextField {...register("State",{required:"Enter State"})} variant='outlined'  label="Enter State" type='text'/>
      <TextField {...register("Pincode",{required:"Enter Pincode"})} variant='outlined'  label="Enter PIN" type='number'/>
      </Box>
      </Box>
      <Box sx={{width:"90%",display:'flex',padding:2,justifyContent:"right",gap:3,alignItems:"center"}}>
      <Button variant='contained'><Link to='/cart'>Cancel</Link></Button>
      <Button variant='outlined' type='submit'>Pay Now</Button>
      </Box>
      
    </form>
    </Card>
    </Container>
  )
}

export default Checkout
import React from 'react'
import { Box, Button, Card, Container, TextField, Typography} from '@mui/material'
import {useForm} from "react-hook-form"
import './checkout.css'
import {Link,useNavigate} from 'react-router-dom'
import PaidIcon from '@mui/icons-material/Paid';
import StepperPage from '../components/Process/StepperPage'

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
    <Container sx={{marginTop:3}}>
    <StepperPage activeStep={1}/>

    <Box className='checkout'>
    <form action="" method="post" onSubmit={handleSubmit(ValidateSubmit)}>
      <Card variant='outlined' className='form-container'>
      <Typography variant='h6'textAlign='center' paddingTop={1} >Billing Details</Typography>
      <TextField {...register("Name",{required:"Enter Name"})} variant='outlined'  label="Name" type='text'/>
      <TextField {...register("mobile",{required:"Enter mobile"})} variant='outlined'  label="Mobile" type='number'/>
      <TextField {...register("Address",{required:"Enter Address"})} variant='outlined'  label="Street" type='text'/>
      <TextField {...register("city",{required:"Enter City"})} variant='outlined'  label="City" type='text'/>
      <Box>
      <TextField {...register("State",{required:"Enter State"})} variant='outlined' sx={{width:'45%',marginRight:1}}  label="State" type='text'/>
      <TextField {...register("Pincode",{required:"Enter Pincode"})} variant='outlined' sx={{width:'45%'}} label="Postal" type='number'/>
      </Box>
      
      <Box sx={{display:'flex',padding:2,justifyContent:"center",gap:3,alignItems:"center"}}>
      <Button variant='contained'><Link to='/cart'>Cancel</Link></Button>
      <Button variant='outlined' type='submit' startIcon={<PaidIcon/>} >Pay Now</Button>
      </Box>
      </Card>
    </form>
    </Box>

    </Container>
  )
}

export default Checkout
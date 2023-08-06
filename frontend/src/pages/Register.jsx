import React from 'react'
import { Box, Button, Card, Container, TextField, Typography} from '@mui/material'
import {useForm} from "react-hook-form"
import { ArrowBack} from '@mui/icons-material'
import './auth.css'

const Register = () => {
  const {register,handleSubmit,formState:{errors}}=useForm()

  return (
    <Container className='Auth'>
    <Button variant='text' startIcon={<ArrowBack/>} sx={{marginTop:3}}  href='/home'>Back</Button>
    <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",height:550}}>
    <form action="" method="post" onSubmit={handleSubmit((e)=>console.log(e))}>
    <Card className='card' variant='outlined'>
      <Typography variant='h4'>Sign Up</Typography>
      <TextField {...register("Name",{required:"Enter Name"})} variant='standard'  label="Enter Name" type='text'/>
      <TextField {...register("Email",{required:"Enter Email"})} variant='standard'  label="Enter Email" type='email'/>
      <TextField {...register("Psw",{required:"Enter Password"})} variant='standard'  label="Enter Password" type='password'/>
      <Box sx={{width:"100%",display:'flex',justifyContent:"space-around",alignItems:"center"}}>
      <Button variant='outlined' href='/login' >Login</Button>
      <Button variant='contained' type='submit' >Create Now</Button>
      </Box>
    </Card>
    </form>
    </Box>
    </Container>
  )
}

export default Register


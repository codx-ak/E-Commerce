import React from 'react'
import { Box, Button, Card, Container, TextField, Typography} from '@mui/material'
import {useForm} from "react-hook-form"
import { ArrowBack } from '@mui/icons-material'

const Login = () => {

  const {register,handleSubmit,formState:{errors}}=useForm()

  return (
    <Container>
      <Button variant='text' startIcon={<ArrowBack/>} sx={{marginTop:3}}>Back</Button>
      <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",height:550}}>
    <form action="" method="post" onSubmit={handleSubmit((e)=>console.log(e))}>
    <Card variant='outlined'sx={{display:'flex',justifyContent:"center",alignItems:"center",flexFlow:'column',gap:5,padding:3,width:350}}>
      <Typography variant='h4'>Sign In</Typography>
      <TextField {...register("Email",{required:"Enter Email"})} variant='standard'  label="Enter Email" type='email'/>
      <TextField {...register("Psw",{required:"Enter Password"})} variant='standard'  label="Enter Password" type='password'/>
      <Box sx={{width:"100%",display:'flex',justifyContent:"space-around",alignItems:"center"}}>
      <Button variant='outlined' >Cancel</Button>
      <Button variant='contained' type='submit' >Login Now</Button>
      </Box>
    </Card>
    </form>
    </Box>
    </Container>
  )
}

export default Login
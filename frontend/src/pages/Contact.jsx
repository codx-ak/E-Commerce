import React from 'react'
import { Box, Button, Card, Container, Rating, TextField, Typography} from '@mui/material'
import {useForm} from "react-hook-form"
import {Send } from '@mui/icons-material'
import './contact.css'

const Contact = () => {
  const {register,handleSubmit,formState:{errors}}=useForm()

  return (
    <Container className='contact'>
      <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",height:550}}>
    <form action="" method="post" onSubmit={handleSubmit((e)=>console.log(e))}>
      <Card className='card' variant='outlined'>
      <Typography variant='h4'>Contact us</Typography>
      <TextField {...register("Name",{required:"Enter Name"})} variant='standard'  label="Enter Name" type='text'/>
      <TextField {...register("Email",{required:"Enter Email"})} variant='standard'  label="Enter Email" type='email'/>
      <TextField {...register("message",{required:"Enter message"})} variant='standard'  label="Enter message" type='text'/>
      <Typography component='p'> <span>Rating :</span> <Rating  aria-label='Rating' precision={0.5}/></Typography>
      <Box sx={{width:"100%",display:'flex',justifyContent:"space-around",alignItems:"center"}}>
      <Button variant='outlined' href='/' >Cancel</Button>
      <Button variant='contained' type='submit' startIcon={<Send/>} >Send</Button>
      </Box>
    </Card>
    </form>
    </Box>
    </Container>
  )
}

export default Contact
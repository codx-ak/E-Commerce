import React, { useContext } from 'react'
import { Avatar, Box, Button, Card, Checkbox, Container, FormControlLabel, TextField, Typography} from '@mui/material'
import {useForm} from "react-hook-form"
import AvatarImg from '../assets/avatar.png'
import './auth.css'
import BackButton from '../components/BackButton/BackButton'
import { Link } from 'react-router-dom'
import { RegisterAccount } from '../Auth/Authentication'
import {useNavigate} from 'react-router-dom'
import { ProductDataList } from '../Context/ProductData'

const Register = () => {
  const {setAuthCheck}=useContext(ProductDataList)
  const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors}}=useForm()

  return (
    <Container className='Auth'>
    <BackButton/>
    <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",height:550}}>
    <form action="" method="post" onSubmit={handleSubmit((e)=>RegisterAccount(e,navigate,setAuthCheck))}>
    <Card className='card' variant='outlined'>
    <Avatar alt="Ak" src={AvatarImg} sx={{ width: 80, height: 80 }}/>
      <Typography variant='h5'>Sign Up</Typography>
      <TextField {...register("Name",{required:"Enter Name"})} error={errors.Name?true:false} variant='standard'  label="Enter Name" type='text'/>
      <TextField {...register("Email",{required:"Enter Email"})} error={errors.Email?true:false} variant='standard'  label="Enter Email" type='email'/>
      <TextField {...register("Psw",{required:"Enter Password"})} error={errors.Psw?true:false} variant='standard'  label="Enter Password" type='password'/>
      <FormControlLabel sx={{marginRight:25}} control={<Checkbox color="success"/>} label="Remember Me" />
      <Box sx={{width:"100%",display:'flex',justifyContent:"space-around",alignItems:"center"}}>
      <Link to='/login'><Button variant='text'>Login</Button></Link>
      <Button variant='contained' type='submit' >Create Now</Button>
      </Box>
    </Card>
    </form>
    </Box>
    </Container>
  )
}

export default Register


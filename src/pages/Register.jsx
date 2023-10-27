import React, { useContext } from 'react'
import { Avatar, Box, Button, Card, Checkbox, Container, FormControlLabel, TextField, Typography} from '@mui/material'
import {useForm} from "react-hook-form"
import AvatarImg from '../assets/avatar.png'
import './auth.css'
import BackButton from '../components/BackButton/BackButton'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { AuthCreate } from '../Auth/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Authenticate } from '../Auth/AuthContext'

const Register = () => {
  const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors}}=useForm()
  const dispatch=useDispatch()
  const {setAuth}=useContext(Authenticate)
  const Accounts=useSelector(state=>state.AuthStore.value)
  function AccountCreate(data){
    dispatch(AuthCreate(data))
    setAuth({user:Accounts.length,check:true})
    navigate('/')
}
  return (
    <Container className='Auth'>
    <BackButton/>
    <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",height:550}}>
    <form action="" method="post" onSubmit={handleSubmit(AccountCreate)}>
    <Card className='card' variant='outlined'>
    <Avatar alt="Ak" src={AvatarImg} sx={{ width: 80, height: 80 }}/>
      <Typography variant='h5'>Sign Up</Typography>
      <TextField {...register("name",{required:"Enter Name"})} error={errors.Name?true:false} variant='standard'  label="Enter Name" type='text'/>
      <TextField {...register("email",{required:"Enter Email"})} error={errors.Email?true:false} variant='standard'  label="Enter Email" type='email'/>
      <TextField {...register("psw",{required:"Enter Password"})} error={errors.Psw?true:false} variant='standard'  label="Enter Password" type='password'/>
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


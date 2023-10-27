import React, { useContext } from 'react'
import { Avatar, Box, Button, Card, Checkbox, Container, FormControlLabel, TextField, Typography} from '@mui/material'
import {useForm} from "react-hook-form"
import './auth.css'
import AvatarImg from '../assets/avatar.png'
import BackButton from '../components/BackButton/BackButton'
import { Link } from 'react-router-dom'
import {ArrowForward } from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { Authenticate } from '../Auth/AuthContext'
import { toast } from 'react-toastify'

const Login = () => {
  const AuthData=useSelector(state=>state.AuthStore.value)
  const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors}}=useForm()
  const {setAuth}=useContext(Authenticate)
  function handleLogin(data){
    if(AuthData.some(e=>e.email===data.Email && e.pass===data.Psw)){
      const Account=AuthData.findIndex(e=>e.email===data.Email)
      toast.success("Login Successfully!");
      setAuth({user:Account,check:true})
      navigate('/')
  }
  else{
      toast.error("Invalid Account!");
  }
  }

  return (
    <Container className='Auth'>
      <BackButton/>
      <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",height:550}}>
    <form action="" method="post" onSubmit={handleSubmit(handleLogin)}>
      <Card className='card' variant='outlined'>
      <Avatar alt="Ak" src={AvatarImg} sx={{ width: 80, height: 80 }}/>
      <Typography variant='h5'>Sign In</Typography>
      <TextField {...register("Email",{required:"Enter Email"})} error={errors.Email?true:false} variant='standard'  label="Enter Email" type='email'/>
      <TextField {...register("Psw",{required:"Enter Password"})} error={errors.Psw?true:false} variant='standard'  label="Enter Password" type='password'/>
      <FormControlLabel sx={{marginRight:25}} control={<Checkbox color="success"/>} label="Remember Me" />
      <Box sx={{width:"100%",display:'flex',justifyContent:"space-around",alignItems:"center"}}>
      <Link to='/register'><Button variant='text'>Create Account</Button></Link>
      <Button variant='contained' type='submit' endIcon={<ArrowForward/>} >Login</Button>
      </Box>
    </Card>
    </form>
    </Box>
    </Container>
  )
}

export default Login
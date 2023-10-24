import { Avatar, Box, Button, Card, Container, TextField } from '@mui/material'
import React, { useContext } from 'react'
import AvatarImg from '../assets/avatar.png'
import './profile.css'
import {useForm} from "react-hook-form"
import BackButton from '../components/BackButton/BackButton'
import { DeleteAccount, UpdateAccount } from '../Auth/Authentication'
import { ProductDataList } from '../Context/ProductData'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  let User=localStorage.getItem('user')
  User=JSON.parse(User) || ""
  const {setAuthCheck}=useContext(ProductDataList)
  const navigate=useNavigate()
  const {register,handleSubmit}=useForm()
  return (
    <Container >
        <BackButton/>
        <form action="" method="post" onSubmit={handleSubmit((e)=>UpdateAccount(e))}>
        <Box className='profile'>
            <Card className='card' variant='outlined'>
                <Avatar alt="Ak" src={AvatarImg} sx={{ width: 80, height: 80 }}/>
                <TextField {...register("Name")} defaultValue={User.Name ||''} type="text" label="Name" variant='outlined'/>
                <TextField {...register("Email")} defaultValue={User.Email ||''} type="email" label="Email" variant='outlined'/>
                <TextField {...register("City")} defaultValue={User.City || ''} type="text" label='City' variant='outlined'/>
                <TextField {...register("Pin")} defaultValue={User.Pin || ''} type="number" label="Postal" variant='outlined'/>
                <Button variant='contained' color='success' type='submit'>Update Account</Button>
                <Button variant='outlined' onClick={()=>DeleteAccount(navigate,setAuthCheck)} color='error' type='button'>Delete Account</Button>
            </Card>
        </Box>
        </form>
    </Container>
  )
}

export default Profile
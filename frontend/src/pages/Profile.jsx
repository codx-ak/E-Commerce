import { Avatar, Box, Button, Card, Container, TextField } from '@mui/material'
import React from 'react'
import AvatarImg from '../assets/avatar.png'
import './profile.css'
import { ArrowBack } from '@mui/icons-material'
import BackButton from '../components/BackButton/BackButton'
const Profile = () => {
  return (
    <Container >
        <BackButton/>
        <Box className='profile'>
            <Card className='card' variant='outlined'>
                <Avatar alt="Ak" src={AvatarImg} sx={{ width: 80, height: 80 }}/>
                <TextField  aria-readonly value="Ak" type="text" label="Name" variant='outlined'/>
                <TextField  aria-readonly value="Ak@gmail.com" type="email" label="Email" variant='outlined'/>
                <TextField  aria-readonly value="Hosur" type="text" label='City' variant='outlined'/>
                <TextField  aria-readonly value="635117" type="text" label="PIN" variant='outlined'/>
                <Button variant='contained' color='success' type='submit'>Update Account</Button>
                <Button variant='outlined' color='error' type='submit'>Delete Account</Button>
            </Card>
        </Box>
    </Container>
  )
}

export default Profile
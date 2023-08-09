import React from 'react'
import { Box, Button, Card, Container, TextField, Typography} from '@mui/material'
import {useForm} from "react-hook-form"
import {Link,useNavigate} from 'react-router-dom'


const PaymentForm = () => {
    const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors}}=useForm()
  function ValidateSubmit(){
    try{
      navigate('/orders',{replace:true})
    }
    catch(err){
      alert(err)
    }
  }
  return (
    <Box className='Payment-Form'>
    <form action="" method="post" onSubmit={handleSubmit(ValidateSubmit)}>
      <Card variant='outlined' className='form-container'>
      <TextField {...register("CardNumber",{required:"Card Number",maxLength:16})} variant='outlined'  label="Card Number" type='tel'/>
      <TextField {...register("cardName",{required:"Enter cardName",maxLength:15})} variant='outlined'  label="Card Holders" type='text'/>
      <FormControl>
        <InputLabel id="cardMonth">Age</InputLabel>
        <Select
            labelId="cardMonth"
            id=""
            value={0}
            label="Expiration Date"
        >
        <MenuItem value={10}>1</MenuItem>
        <MenuItem value={20}>2</MenuItem>
        <MenuItem value={30}>3</MenuItem>
        </Select>
        </FormControl>
        <FormControl>
        <InputLabel id="cardYear">Age</InputLabel>
        <Select
            labelId="Year"
            id=""
            value={0}
            label="Year"
        >
        <MenuItem value={10}>2023</MenuItem>
        <MenuItem value={20}>2024</MenuItem>
        <MenuItem value={30}>2025</MenuItem>
        </Select>
        </FormControl>
      <Button variant='outlined' type='submit' startIcon={<PaidIcon/>} >Submit Now</Button>
      </Card>
    </form>
    </Box>
  )
}

export default PaymentForm
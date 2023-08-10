import React,{useState} from 'react'
import {Box, Container,Typography} from '@mui/material'
import StepperPage from '../components/Process/StepperPage'
import PaymentCard from '../components/Payment/PaymentCard'
import {useForm} from "react-hook-form"
import {useNavigate} from 'react-router-dom'
import { ClearCart } from '../Store/CartSlice'
import {useDispatch} from 'react-redux'

const Payment = () => {

  const navigate=useNavigate()
  const {register,handleSubmit}=useForm()
  const dispatch=useDispatch()
  function ValidateSubmit(){
    try{
      navigate('/orders',{replace:true})
      dispatch(ClearCart())
    }
    catch(err){
      alert(err)
    }
  }
  const [cardNumber,setCardNumber]=useState(null)
  const [userName,setUserName]=useState(null)
  const [expMonth,setExpMonth]=useState(null)
  const [expYear,setExpYear]=useState(null)
  const [cardCvv,setCardCvv]=useState(null)
  const [rotateCard,setRotateCard]=useState(false)
  const [cardType,setCardType]=useState('default')

   function cartTypeCheck(){
      const cardNumber2=String(cardNumber?cardNumber:null);
      if(cardNumber2.startsWith(4,0)) return setCardType('visa')
      if(cardNumber2.startsWith(34||37,0)) return setCardType('amex')
      if(cardNumber2.startsWith(5,0)) return setCardType('mastercard')
      if(cardNumber2.startsWith(6011,0)) return setCardType('discover')
      if(cardNumber2.startsWith(62,0)) return setCardType('unionpay')
      if(cardNumber2.startsWith(35,0)) return setCardType('jcb')
      return setCardType("default")
    }

let values={
  cardNumber,
  expMonth,
  expYear,
  userName,
  cardCvv,
  rotateCard,
  cardType
}

  return (
    <Container sx={{paddingTop:3}}>
      <StepperPage activeStep={2}/>
    <Box className='payment'>
    <div className="card-form">
    <form action="" method="post" onSubmit={handleSubmit(ValidateSubmit)}>
    <div className="card-form__inner">
      <Typography variant='h6' textAlign='center' sx={{marginBottom:2}}>Payment Info</Typography>
      <div className="card-input">
        <label htmlFor="cardNumber" className="card-input__label">Card Number</label>
        <input
        {...register("CardNumber",{required:true})}
          type="tel"
          id="cardNumber"
          className="card-input__input"
          maxLength={16}
          minLength={16}
          data-card-field
          onFocus={(e)=>setRotateCard(false)}
          onChange={(e)=>{setCardNumber(e.target.value)
                          cartTypeCheck()}}
          autoComplete="true"
        />
      </div>

      <div className="card-input">
        <label htmlFor="cardName" className="card-input__label">Card Holders</label>
        <input
        {...register("CardName",{required:true})}
          type="text"
          id="cardName"
          maxLength={15}
          minLength={1}
          onFocus={(e)=>setRotateCard(false)}
          onChange={(e)=>setUserName(e.target.value)}
          className="card-input__input"
          data-card-field
          autoComplete='true'
        />
      </div>
      
      <div className="card-form__row">
        <div className="card-form__col">
          <div className="card-form__group">
            <label htmlFor="cardMonth" className="card-input__label">Expiration Date</label>
            <select
              className="card-input__input -select"
              id="cardMonth"
              onChange={(e)=>setExpMonth(e.target.value)}
              onFocus={(e)=>setRotateCard(false)}
              data-card-field
              defaultValue={0}
              required
            >
              <option disabled value={0}>Month</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                
            </select>

            <select
              className="card-input__input -select"
              id="cardYear"
              data-card-field
              onChange={(e)=>setExpYear(e.target.value)}
              onFocus={(e)=>setRotateCard(false)}
              defaultValue={1}
              required
            >
              <option disabled value={1} >Year</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
              <option value="30">2030</option>
              <option value="31">2031</option>
            </select>

          </div>
        </div>

        <div className="card-form__col -cvv">
          <div className="card-input">
            <label htmlFor="cardCvv" className="card-input__label">CVV</label>
            <input
              type="tel"
              {...register("Cardcvv",{required:true})}
              className="card-input__input"
              maxLength={3}
              minLength={3}
              id="cardCvv"
              data-card-field
              autoComplete="true"
              onFocus={()=>setRotateCard(true)}
              onChange={(e)=>setCardCvv(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button className="card-form__button" type='submit'>Checkout Now</button>
    </div>
    </form>
    </div>
    <div className="card-form">
    <div className="card-list">
      <PaymentCard values={values}/>
    </div>
    </div>
    </Box>
    </Container>
  )
}

export default Payment

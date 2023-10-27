import { Button, Card, Typography } from '@mui/material'
import React, { useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import {ArrowForward} from '@mui/icons-material'
import { Authenticate } from '../../Auth/AuthContext';

const PriceCard = ({Product}) => {

    const {IsAuth}=useContext(Authenticate)

  return ( 
    <Card className='cart-price-card' variant='outlined'>
        {
            Product.length && 
            <>
            <TableContainer sx={{width:'100%'}}>
              <Typography variant='h6' sx={{textTransform:'uppercase',textAlign:'center'}}>Order Summary</Typography>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={{color:'gray'}}>Subtotal</TableCell>
                  <TableCell sx={{color:'gray'}} align="right"> $ {Product.reduce((prev,curr)=>prev+curr.price*curr.count,0)}.00</TableCell>
                </TableRow>
                <TableRow >
                  <TableCell sx={{color:'gray'}}>Shipping</TableCell>
                  <TableCell sx={{color:'gray'}}  align="right"> free</TableCell>
                </TableRow>
                <TableRow sx={{border:0}} >
                  <TableCell sx={{fontWeight:'bold',color:'gray'}}> Total</TableCell>
                  <TableCell sx={{fontWeight:'bold',color:'gray'}} align="right"> $ {Product.reduce((prev,curr)=>prev+curr.price*curr.count,0)}.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{border:0}} >
                    {
                      IsAuth.check ?
                      <Link to='checkout'><Button variant="contained" endIcon={<ShoppingCartIcon />}>Buy Now</Button></Link>
                      :
                      <Link to='/login'><Button variant="contained"  endIcon={<ArrowForward />}>Login Now</Button></Link>
                    }
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </TableContainer>
            </>
        }
        </Card>
  )
}

export default PriceCard

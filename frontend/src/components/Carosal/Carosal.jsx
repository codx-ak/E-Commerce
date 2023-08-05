import { Box } from '@mui/material'
import React, { useState } from 'react'

const Carosal = ({images}) => {
    const [displayImage,setImage]=useState(images[0])
  return (
    <>
    { images &&
    <Box sx={{width:'50%',display:'flex',gap:2}}>
        <Box sx={{width:'20%',display:'flex',gap:2,flexFlow:"column"}}>
          {images && images.map((img,index)=>{
            return ( <img src={img} key={index} alt={img} style={{height:50,width:'100%',overflow:'hidden',cursor:'pointer',borderRadius:2}} onClick={(e)=>setImage(e.target.currentSrc)} /> )
          })}
        </Box>
        <img src={displayImage} style={{height:'100%',width:'100%',overflow:'hidden',borderRadius:5}} alt="" />
    </Box>
        }
        </>
  )
}

export default Carosal
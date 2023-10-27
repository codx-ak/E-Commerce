import React from 'react'
import './spinner.css'
const Loader = () => {
  return (
    <div className='spinner'>
        <div className='item'></div>
        <div className='item-name'>Please Loading...</div>
    </div>
  )
}

export default Loader
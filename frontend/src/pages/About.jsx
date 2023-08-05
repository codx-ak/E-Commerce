import React, { useContext } from 'react'
import { ProductDataList } from '../Context/ProductData';

const About = () => {
  const Product=useContext(ProductDataList)
  console.log(Product);
  return (
    <div>About</div>
  )
}

export default About
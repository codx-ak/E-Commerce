import axios from 'axios';

export const ProductApi=axios.get('https://dummyjson.com/products')
      .then(value=>value.data.products)
      .catch(err=>console.log(err))

export const Result=fetch("https://dummyjson.com/products")
    .then((data)=>data.json())
    .catch((err)=>console.log(err))

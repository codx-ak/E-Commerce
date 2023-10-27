import React from "react";
import {
  Container,
  Breadcrumbs,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import ProductCard from "../components/Card/ProductCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ProductsAPI, SearchProduct } from "../Api/ProductApi";
import Loader from "../components/Spinner/Loader";
const Products = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: ProductsAPI,
  });

  const {mutateAsync:SearchProductQuery,isPending}=useMutation({
    mutationFn:SearchProduct,
    onSuccess: (data) => {
      queryClient.setQueriesData(["products"],data);
    }
  })
  const AllProduct = data || [];

  function Searchs(e){
    SearchProductQuery(e.target.value)
  }
  
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" sx={{ margin: 2 }}>
        <Link to="/home">Home</Link>

        <Typography>Category</Typography>
      </Breadcrumbs>
      <Box>
        <Box
        className='search-box'>
            <TextField type="search" onChange={Searchs}  placeholder="Search Products..."/>
        </Box>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: 4 }}
        >
          {(isLoading || isPending) && <Loader />}
          {AllProduct.length ? (
            AllProduct.map((product, index) => {
              return <ProductCard key={product.id} ProductData={product} />;
            })
          ) : (
            <Typography
              variant="h4"
              color="gray"
              sx={{ textAlign: "center", padding: "10%", width: "100%" }}
            >
              No Products Available
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Products;

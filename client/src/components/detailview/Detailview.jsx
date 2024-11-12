import { useEffect, useState,useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getProductDetail } from "../../redux/actions/productActions.js";
import { Grid, Typography, Button, Box, Paper } from "@mui/material";
import TableData from "./Table.jsx";
import { addtoCart,setCartItems } from "../../redux/actions/cartActions.js";


const Detailview = () => {
  const [quantity] = useState(1);
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product } = useSelector((state) => state.getDetail);
  const { cartItems } = useSelector((state) => state.cart);

  const addItemToCart = useCallback(() => {
    dispatch(addtoCart(id, quantity));
    navigate('/cart');
  }, [dispatch, id, navigate, quantity]);

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartprdcts')) || [];
    console.log(storedCartItems)
    if (cartItems.length === 0 && storedCartItems.length > 0) {
      dispatch(setCartItems(storedCartItems));
    }
  }, [dispatch, cartItems, addItemToCart]);

  useEffect(() => {
    localStorage.setItem('cartprdcts', JSON.stringify(cartItems));
  }, [cartItems, addItemToCart]);



  return (
    <div style={{ marginTop: 56, backgroundColor: '#EBE8E7' }}>
      {product && product.data ? (
        <Grid container spacing={1}>
          <Grid
            item
            xs={6}
            md={5}
            style={{ display: "flex", justifyContent: "center", flexDirection: 'column', marginTop: 12 }}
          >
            <Paper>
              <img
                src={product.data.detailUrl}
                alt={product.data.id}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 20,
                  height: '75vh',
                  width: '30vw',
                }}
              />
            </Paper>
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" style={{ margin: 5, width: 140, height: 45, backgroundColor: 'orange' }} onClick={addItemToCart}>
                ADD TO CART
              </Button>
              <Button variant="contained" style={{ margin: 5, width: 140, height: 45, backgroundColor: 'red' }}>
                BUY NOW
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6} md={7}>
            <Typography
              style={{
                fontSize: 22,
                fontWeight: 600,
                textDecorationLine: "underline",
                margin: 15,
              }}
            >
              {product.data.title.longTitle}
            </Typography>
            <TableData product={product} />
          </Grid>
        </Grid>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
};

export default Detailview;

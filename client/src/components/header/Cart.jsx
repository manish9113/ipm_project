import { Typography, Grid, Box, Paper,styled } from "@mui/material";
import { useSelector } from "react-redux";

import { useState,useEffect } from "react";
import GroupedButton from "./GroupButton";
const Styledtypography=styled(Typography)`
     margin:12px;
     color: rgb(151 128 128 / 87%);


`
const FixedPaper = styled(Paper)`
  position: fixed;
 
`;
const Cart = () => {

const [totalPrice,setPrice]=useState(0);
const [totalDiscount,setDiscount]=useState(0);
const [totalAmount,setAmount]=useState(0);





  const { cartItems } = useSelector((state) => state.cart);





  useEffect(() => {
    let totalPrice = 0;
    let totalDiscount = 0;
    let totalAmount=0;
    

    cartItems.forEach((item) => {

      totalPrice += item.price.mrp;
      totalDiscount += item.price.mrp - item.price.cost;
      totalAmount +=(item.price.cost);
    });

    setPrice(totalPrice);
    setDiscount(totalDiscount);
    setAmount(totalAmount);
  }, [cartItems]);





  

  return (
    <div style={{ marginTop: 56 }}>
      {cartItems.length ? (
        <Grid container>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Box style={{display:'flex',justifyContent:'center',marginTop:12,textDecoration:'underline'}}>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Box>
            {cartItems.map((item) => (
              <Paper elevation={3} style={{margin:10,padding:10,display:'flex'}}>
                <Box style={{display:'flex',flexDirection:'column'}}>
                  <img src={item.url} alt={item.title.longTitle} style={{height:246,width:256}}/>
                  <Box style={{margin:10 ,display:'flex',justifyContent:'center'}}>
                  <GroupedButton />
                  </Box>
                  
                </Box>
                <Box>
                  <Styledtypography >{item.title.longTitle}</Styledtypography>
                  <Styledtypography>Price:&nbsp;&nbsp;&nbsp;   Rs.{item.price.mrp}</Styledtypography>
                  <Styledtypography>Discount:&nbsp;&nbsp;&nbsp;   {item.price.discount}</Styledtypography>
                  <Styledtypography>Cost:&nbsp;&nbsp;&nbsp;  Rs.{item.price.cost}</Styledtypography>
                </Box>
              </Paper>
            ))}
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
          
            <FixedPaper style={{margin:20,padding:10}}>
            <Box style={{display:'flex',margin:10}}>
              <Typography>
                Total Price&nbsp;(({cartItems?.length} item)):&nbsp;&nbsp;&nbsp;
              </Typography>
              <Typography>
                Rs.&nbsp;{totalPrice}
              </Typography>
            </Box>
            <Box style={{display:'flex',margin:10}}>
              <Typography>
                Total Discount:&nbsp;&nbsp;&nbsp;
              </Typography>
              <Typography>
                Rs.&nbsp;{totalDiscount}
              </Typography>
            </Box>
            <Box style={{display:'flex',margin:10}}>
              <Typography>
                Total Amount:&nbsp;&nbsp;&nbsp;
              </Typography>
              <Typography>
                Rs.&nbsp;{totalAmount}
              </Typography>
            </Box>
            </FixedPaper>
             
          </Grid>
        

        </Grid>
      ) : (
        <div>empty</div>
      )}
    </div>
  );
};

export default Cart;

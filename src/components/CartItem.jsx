import {
    Button,Card,CardActions,CardContent,CardMedia,Container,Grid,Typography,
  } from "@mui/material";
import React, { useEffect, useState } from "react";
import { remove ,cartValues} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

  
  const CartItem = ({cartItem}) => {

  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  

  const [count ,setCount] = useState(1)

  const total = count * (cartItem?.market_data?.current_price?.usd).toFixed(2)


  const increseCount = (total) => {
    setCount(count + 1)

  }
  const decreseCount = (total) => {
    if(count > 0){
      setCount(count - 1)
    }
  }


  const handleTotal = (total) => {
    dispatch(cartValues(total))
    
  }

  useEffect(()=>{
    handleTotal(total)
  },[total])

  
    return (
      <Grid item  >
        <Card sx={{display:'flex',maxWidth:'400px'}}>
          <Container   sx={{ maxHeight: '200px' , width:'120px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <CardMedia  sx={{ height: "150px" , width:'100px'}}
          component="img"
          image={cartItem?.image?.large}
           />
          </Container >
          
  
          <CardContent sx={{display:'flex',alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
              {cartItem?.name}
            </Typography>
            <Typography textAlign={'center'} gutterBottom variant="h6" component="div">
              price : ${cartItem?.market_data?.current_price?.usd}
            </Typography>
            <Container  sx={{display:'flex',justifyContent:"center"}}>
            <Button onClick={decreseCount} size="small" variant="outlined">-</Button>
            <Typography  sx={{marginInline:'10px'}} variant="h6" component="div">
              {count}
            </Typography>
            
            <Button onClick={increseCount} size="small" variant="outlined">+</Button>

            
            </Container>

            <Typography  sx={{marginInline:'10px'}} variant="h6" component="div">
            {count} * ${cartItem?.market_data?.current_price?.usd} = {total}
            </Typography>

            <Button sx={{marginTop:'10px'}}
              size="small"
              variant="contained"
              onClick={() => handleRemove(cartItem.id)}
              color="error"
            >
              Remove
            </Button>
          </CardContent>
          <CardActions>
            
          </CardActions>
        </Card>
      </Grid>
    );
  };
  
  export default CartItem;
  
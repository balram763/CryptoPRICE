import { Avatar, Button, Card, CardContent, CardMedia, Container, List, ListItem, ListItemAvatar, ListItemText, Snackbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCoin } from '../features/coins/coinSlice';
import Loading from '../components/Loading';
import { add } from '../features/cart/cartSlice';

const CoinDetails = () => {

    // const FlexBox = {
    //     display:'flex',
    //     color:'error',
    //     justifyContent:'space-between',
    //     flexDirection:'column',
    //     alignItems:'center'
    // }


    const { coin, isLoading, isError, isSuccess } = useSelector((state) => state.Coins);
    const [open, setOpen] = useState(false);

    const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoin(id));
  }, []);

  if(isError){
    <Container sx={{ padding: "80px 0px" }}>
    <Typography variant="h4" textAlign={"center"} color={"primary"}>
      Please wait Something is Wrong
    </Typography>
  </Container>

  }

  if(!coin){
    return(<Loading/>)
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!coin) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <Typography variant="h4" textAlign={"center"} color={"primary"}>
          Please wait Something is Wrong
        </Typography>
      </Container>
    );
  }




  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };



  const handleAddToCart = (coin) => {
    dispatch(add(coin));
    setOpen(true);
  };

    return (
        <>

        <Container className='hiii' sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>

        <Card sx={{ maxWidth: 1200, border:'2px solid blue',width:"60vw", marginTop:'100px',display:'flex',justifyContent:'center',flexDirection:'column'
        }}>
          
          <CardMedia
          sx={{objectFit:'contain',width:'50w',padding:'0px',display:'flex',flexDirection:'column',
            alignItems:'center'}}
            component="img"
            height="300"
            image={coin?.image?.large}
            alt="chart"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {coin?.market_data?.price_change_24h}%
            </Typography>

            <List >
                <ListItem>
                <ListItemAvatar>
          <Avatar>
            <img  src={coin?.image?.thumb} alt="" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{maxWidth:'300px',width:'200px'}} primary={id} secondary={coin?.symbol} />
                </ListItem>
            </List>

           <Container >
           <Typography sx={{fontSize:'16px',width:'100%',marginBlock:'10px'}}  variant='h6'   paddingRight={'50px'}>About : {coin?.description?.en}</Typography>
           <Typography sx={{fontSize:'18px',width:'100%'}} variant='h6'   paddingRight={'50px'}>Price : {coin?.market_data?.current_price?.usd}</Typography>
        <Typography sx={{fontSize:'18px',width:'100%'}} variant='h6'   paddingRight={'20px'}>MarketCap : {coin?.market_data?.market_cap?.usd}</Typography>
        <Typography  sx={{fontSize:'18px',width:'100%'}} variant='h6'   paddingRight={'20px'}>Total Volume : {coin?.market_data?.total_volume?.usd}</Typography>


        <Typography  sx={{fontSize:'18px',width:'100%'}} variant='h6'   paddingRight={'20px'}>Circulation Supply : {coin?.market_data?.circulating_supply}</Typography>
        <Typography  sx={{fontSize:'18px',width:'100%'}} variant='h6'   paddingRight={'20px'}>Total Supply : {coin?.market_data?.max_supply}</Typography>
        <Typography  sx={{fontSize:'18px',width:'100%'}} variant='h6'   paddingRight={'20px'}>Rank : {coin?.market_cap_rank}</Typography>



           </Container>

           <Container sx={{marginTop:'10px'}}>
            <Button onClick={() => handleAddToCart(coin)}
             sx={{marginRight:'10px'}} color='primary' variant='contained'  >Add To Card </Button>
            <a target="_blank" href={coin?.links?.homepage[0]}>

            <Button color='secondary' variant='contained'>Official Link </Button>
            </a>
           </Container>
          </CardContent>
         
          
        </Card>

        <>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          message="Item Added To Cart"
        />
      </>


        </Container>
        </>
      );
    }


export default CoinDetails
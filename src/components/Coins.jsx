import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import Loading from './Loading';

const Coins = ({coin}) => {
    let price24 = coin.item.data.price_change_percentage_24h.usd
    if(!coin){
      return(<Loading/>)
    }
  return (
    <>
    

    <List   sx={{ width: '100%', maxWidth: 1300, bgcolor: 'primary.main',border:'2px solid white',color:'white'}}>
      <ListItem>
        <Typography variant='h6' sx={{minWidth:'20px'}} marginRight={'30px'}>{coin?.item?.market_cap_rank}</Typography>
        <ListItemAvatar>
          <Avatar>
            <img  src={coin?.item?.thumb}alt="" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{maxWidth:'300px',width:'200px'}} primary={coin?.item?.name} secondary={coin?.item?.symbol} />
        
       

       {
        price24 > 0 ?
        <Typography className='hidePrice'style={{color:'#91ff35'}} sx={{fontSize:'16px',width:'120px'}} variant='h6' textAlign={'center'}  paddingRight={'50px'}>{coin?.item?.data?.price.toFixed(2)}</Typography>
        :
        <Typography className='hidePrice' color='error' sx={{fontSize:'16px',width:'120px'}} variant='h6' textAlign={'center'}  paddingRight={'50px'}>{coin?.item?.data?.price.toFixed(3)}</Typography>
       }
        <Typography className='hideThis' sx={{fontSize:'16px',width:'120px'}} variant='h6' textAlign={'center'}  paddingRight={'20px'}>{coin?.item?.data?.market_cap}</Typography>
        <Typography className='hideThis' sx={{fontSize:'16px',width:'120px'}} variant='h6' textAlign={'center'}  paddingRight={'20px'}>{coin?.item?.data?.total_volume}</Typography>
        {
            price24 > 0 ?
            <Typography style={{color:'#91ff35'}} className='hideThis'  sx={{maxWidth:'120px',fontSize:'16px',minWidth:'80px'}} variant='h6' paddingRight={'20px'} >{coin?.item?.data?.price_change_percentage_24h?.usd.toFixed(2)}</Typography>
            :
            <Typography className='hideThis' color='error' sx={{maxWidth:'120px',fontSize:'16px',minWidth:'80px'}} variant='h6' paddingRight={'20px'} >{coin?.item?.data?.price_change_percentage_24h?.usd.toFixed(2)} %</Typography>
        }

       {/* <Button variant='contained'>View</Button> */}

  

        {/* <img style={{border : '2px solid gray', padding:'10px'}} width={'100px'} height={'20px'} src="https://www.coingecko.com/coins/39760/sparkline.svg" alt="" /> */}
      <Link to={`/coin/${coin.item.id}`}>
      <Button  variant='contained' color='secondary'>View</Button></Link>
      </ListItem>
      </List>

      
      </>
  )
}

export default Coins
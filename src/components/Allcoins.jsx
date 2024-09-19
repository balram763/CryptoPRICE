import { Avatar, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Coins from './Coins'
import { useSelector } from 'react-redux'
import Loading from './Loading'



const Allcoins = () => {
  const {coins , isLoading} = useSelector((state)=>state.Coins)



  if(!coins){
    return(<Loading/>)
  }

  if(isLoading){
    return(<Loading/>)
  }
  
  return (
    <>
 
    <Container className='hiii' sx={{padding:'80px 0px'}}>
        <Typography variant='h4' textAlign={'center'}>Top Trending coins</Typography>




        <List sx={{ width: '100%', maxWidth: 1400, bgcolor: 'background.paper',display:'flex', justifyContent:'space-between' ,flexWrap:'nowrap'}}>
      <ListItem>
        <Typography sx={{minWidth:'20px'}} variant='h6' marginRight={'30px'}>###</Typography>
        <ListItemAvatar>
          <Avatar>
            
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{maxWidth:'300px',width:'200px'}} primary="Coin" secondary=''  />
        
       

        <Typography className='hidePrice' sx={{fontSize:'16x',width:'120px'}} textAlign={'center'} variant='h6' paddingRight={'50px'}>Price</Typography>
        <Typography className='hideThis' sx={{fontSize:'16px',width:'120px'}} textAlign={'center'}   variant='h6' paddingRight={'20px'}>MarketCap</Typography>
        <Typography className='hideThis' sx={{fontSize:'16px',width:'120px'}} textAlign={'center'}   variant='h6' paddingRight={'20px'}>volume</Typography>
       
            <Typography className='hideThis' color='secondary' sx={{maxWidth:'120px',fontSize:'16px',minWidth:'80px'}} variant='h6' paddingRight={'20px'} >24h % </Typography>

        

       {/* <Button variant='contained'>View</Button> */}

  

        {/* <img style={{border : '2px solid gray', padding:'10px'}} width={'100px'} height={'20px'} src="https://www.coingecko.com/coins/39760/sparkline.svg" alt="" /> */}
      </ListItem>
      </List>


      {
        coins.map(coin => <Coins key={coin.item.coin_id} coin={coin}/>)
      }



    </Container>
    
    </>
  )
}

export default Allcoins
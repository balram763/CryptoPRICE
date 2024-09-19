
import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
    <Container  sx={{padding:'80px 0px',display:'flex',flexDirection:'column'}}>
        <Typography variant='h4' textAlign={'center'}>
            <img style={{height:'350px',width:'100%',objectFit:'contain',margin:'200'}} src="https://images.squarespace-cdn.com/content/v1/6006dd43893bc73c30c23d0d/1611062696335-6GPMFGGT0LNC898XH6OS/ezgif.com-crop.gif?format=1500w" alt="img" />
            <Link to={'/'}>
            <Button variant='contained' color='primary' sx={{margin : '40px 0px'}}>Go Back</Button></Link>
        </Typography>
    </Container></>
  )
}

export default PageNotFound
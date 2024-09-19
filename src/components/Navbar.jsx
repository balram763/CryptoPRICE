import { AppBar, Badge, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../features/auth/authSlice';





const Navbar = () => {

    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logOutUser())
    }

    const {user} = useSelector((state)=>state.auth)
  return (
    <AppBar sx={{bgcolor:'primary.main',borderBottom:'3px solid white'}}>

       
        <Toolbar>
            <Typography sx={{flexGrow : 1}} variant='h5'>
           <Button>
             <Link to={'/'}> Crypto Tracker</Link>
           </Button>
            </Typography>
        {
            user ? 
            (<>
            <Badge id='cart'  badgeContent={4} color='success'>

       
        <Button size='small' variant='contained' color='secondary'>
        <Link to={"/cart"}>  <AddShoppingCartIcon></AddShoppingCartIcon> </Link>
        </Button>
       
        </Badge>
        <Button
         onClick={handleLogOut} 
         sx={{marginLeft:'20px'}}
         color='error' 
         variant='contained' 
         size='small'>LogOut</Button>
</> )
           : (
                <>
           
           <Button sx={{marginLeft:'20px'}}
        color='success'
        variant='contained' 
       size='small'>
       <Link to={"/login"}> LogIn</Link>
       </Button>
    
    <Link to={"/register"}>
    <Button sx={{marginLeft:'20px'}}
    color='success' 
    variant='contained' 
    size='small'>Register
    </Button></Link>
            

            </>)

            
           

        }
        </Toolbar>
    </AppBar>

  )
}

export default Navbar
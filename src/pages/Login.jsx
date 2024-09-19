import {
  Button,Card,CardContent,Container,TextField,Typography,} from "@mui/material";
import { loginUser } from "../features/auth/authSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Login = () => {

   const dispatch = useDispatch()
   const navigate = useNavigate()


 

  const [formData,setFormData] = useState({
    email : " ",
    password : " "
  })

  const {email,password} = formData;


  const handleChance = (e) => {
    setFormData(
      {
        ...formData,
      [e.target.name] : e.target.value
    }
    )
  }
  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(loginUser(formData))
  }


  const {user} = useSelector((state)=>state.auth)

useEffect(()=>{
  if(user){
    navigate("/")
   }

},[user])


 



  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography variant="h3" align="center">
        Login !
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={handleLogin}>
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              label="Enter Email"
              type="email"
              onChange={handleChance}
              name="email"
              value={email}
              fullWidth
            />
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              label="Enter Password"
              type="password"
              onChange={handleChance}
              name="password"
              value={password}
              fullWidth
            />
            <Button type="submit" variant="contained" color="success" fullWidth>
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;

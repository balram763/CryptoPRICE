import {Button,Card,CardContent,Container,TextField,Typography,} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { registerUser } from "../features/auth/authSlice";
import Loading from "../components/Loading";

const Register = () => {


  const dispatch = useDispatch()

  const navigate = useNavigate()

  const {user,isLoading} = useSelector((state)=>state.auth)


 const [formData,setFormData] = useState({
  name : " ",
   email : " ",
   password : " ",
   password2 : ''
 })

 const {name,email,password,password2} = formData;


 const handleChance = (e) => {
   setFormData(
     {
       ...formData,
     [e.target.name] : e.target.value
   }
   )
 }

  useEffect(()=>{
  if(user){
    navigate("/")
  }
  if(isLoading){
   return(<Loading/>)
  }
 },[user])
 const handleRegister = (e) => {
   e.preventDefault()
   dispatch(registerUser(formData))
 }


  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography variant="h3" align="center">
        Create An Account
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={handleRegister}>
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              label="Enter Name"
              type="text"
              onChange={handleChance}
              fullWidth
              name="name"
              value={name}
            />
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              label="Enter Email"
              type="email"
              fullWidth
              onChange={handleChance}
              name="email"
              value={email}
            />
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              label="Enter Password"
              type="password"
              fullWidth
              onChange={handleChance}
              name="password"
              value={password}
            />
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              label="Confirm Password"
              type="password"
              onChange={handleChance}
              fullWidth
              name="password2"
              value={password2}
            />
            <Button type="submit" variant="contained" color="success" fullWidth>
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Register;

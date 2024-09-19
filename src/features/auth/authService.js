import axios from "axios"

const login = async(formData) => {
  const res = await axios.post("/api/user/login",formData)
  localStorage.setItem('user',JSON.stringify(res.data))
  return res.data
}
const register = async(formData) => {
  const res = await axios.post("/api/user",formData)
  localStorage.setItem('user',JSON.stringify(res.data))
  return res.data
}
const logOut = async() => {
  localStorage.removeItem("user")
}

const authService = {
  login,
  register,
  logOut
}
export default authService
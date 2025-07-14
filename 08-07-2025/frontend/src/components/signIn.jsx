import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import {Box,Card,CardContent,TextField,Button,Typography,Select,MenuItem,FormControl,InputLabel} from '@mui/material'

const SignIn = () => {
  const navigate = useNavigate()
  const [input, setinput] = useState({
    email: '',
    password: '',
    role: '',
  })

  const handleChange = (e) => {
    setinput({...input, [e.target.name]: e.target.value});
    console.log(input);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/api/users/login', input, {
        withCredentials: true,
      })
      console.log('Login Success:', response.data)

      if(response.data.success){
        localStorage.setItem("access-token", response.data.token);
      }
      navigate('/')
    } catch (error) {
      console.error('Login Error:', error)
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <Card sx={{ maxWidth: 400, width: '100%' }}>
        <CardContent>
          <Typography variant="h5" align="center">
            Sign In
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={input.email}
              onChange={handleChange}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={input.password}
              onChange={handleChange}
              margin="normal"
            />

            <FormControl fullWidth margin="normal">
              <InputLabel>Role</InputLabel>
              <Select
                name="role"
                value={input.role}
                onChange={handleChange}
                label="Role"
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2 }}
            >
              Sign In
            </Button>
          </form>

          <Typography align="center" sx={{ mt: 2 }}>
            Go To 
            <Link to="/signup"> Sign Up</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default SignIn

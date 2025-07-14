import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import {Box,Card,CardContent,TextField,Button,Typography,Select,MenuItem,FormControl,InputLabel,FormControlLabel,Checkbox} from '@mui/material'

const SignUp = () => {
  const navigate = useNavigate()
  const [input, setinput] = useState({
    name: '',
    email: '',
    phone: '',
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
      const response = await axios.post('http://localhost:3000/api/users/register', input)
      console.log('Signup Success:', response)
      navigate('/signin')
    } catch (error) {
      console.error('Signup Error:', error)
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
            Sign Up
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              label="Name"
              name="name"
              value={input.name}
              onChange={handleChange}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              value={input.email}
              onChange={handleChange}
              margin="normal"
            />

            <TextField
            required
              fullWidth
              label="Phone"
              name="phone"
              value={input.phone}
              onChange={handleChange}
              margin="normal"
            />

            <TextField
            required
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
              required
                name="role"
                value={input.role}
                onChange={handleChange}
                label="Role"
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body2">
                  I accept the terms and conditions
                </Typography>
              }
              sx={{ mb: 2 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2 }}
            >
              Sign Up
            </Button>
          </form>

          <Typography align="center" sx={{ mt: 2 }}>
            Go to
            <Link to="/signin"> Sign In</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default SignUp

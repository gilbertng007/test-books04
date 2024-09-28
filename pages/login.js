import { useState } from 'react'
import { Typography, TextField, Button, Paper } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // 這裡應該發送登錄請求到後端API
    // 假設登錄成功
    router.push('/')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Typography variant="h4" component="h1" gutterBottom>
        登錄
      </Typography>
      <Paper className="p-4 max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            label="電子郵件"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="密碼"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth className="mt-4">
            登錄
          </Button>
        </form>
      </Paper>
    </div>
  )
}

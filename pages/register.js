import { useState } from 'react'
import { Typography, TextField, Button, Paper } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('密碼不匹配')
      return
    }
    // 這裡應該發送註冊請求到後端API
    // 假設註冊成功
    router.push('/login')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Typography variant="h4" component="h1" gutterBottom>
        註冊
      </Typography>
      <Paper className="p-4 max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            label="姓名"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
          />
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
          <TextField
            required
            fullWidth
            label="確認密碼"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth className="mt-4">
            註冊
          </Button>
        </form>
      </Paper>
    </div>
  )
}

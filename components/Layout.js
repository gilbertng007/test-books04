import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function Layout({ children }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" className="text-white no-underline hover:underline">網上書店首頁</Link>
          </Typography>
          <Button color="inherit" component={Link} href="/cart">
            購物車
          </Button>
          <Button color="inherit" component={Link} href="/order-history">
            訂單歷史
          </Button>
          <Button color="inherit" component={Link} href="/login">
            登錄
          </Button>
          <Button color="inherit" component={Link} href="/register">
            註冊
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <main>{children}</main>
      </Container>
      <footer className="mt-8 py-4 bg-gray-100">
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © 2024 網上書店. 版權所有.
          </Typography>
        </Container>
      </footer>
    </>
  )
}

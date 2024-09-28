import { useState, useEffect } from 'react'
import { Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'
import React from 'react'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cart.reduce((sum, item) => sum + item.price * item.quantity, 0))
  }, [cart])

  return (
    <div className="container mx-auto px-4 py-8">
      <Typography variant="h4" component="h1" gutterBottom>
        購物車
      </Typography>
      {cart.length === 0 ? (
        <Typography>您的購物車是空的。</Typography>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>書名</TableCell>
                  <TableCell align="right">價格</TableCell>
                  <TableCell align="right">數量</TableCell>
                  <TableCell align="right">小計</TableCell>
                  <TableCell align="right">操作</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.title}
                    </TableCell>
                    <TableCell align="right">${item.price}</TableCell>
                    <TableCell align="right">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-16 text-center"
                      />
                    </TableCell>
                    <TableCell align="right">${item.price * item.quantity}</TableCell>
                    <TableCell align="right">
                      <Button onClick={() => removeFromCart(item.id)} color="secondary">
                        刪除
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="h5" className="mt-4">
            總計：${total.toFixed(2)}
          </Typography>
          <Link href="/checkout" passHref>
            <Button variant="contained" color="primary" className="mt-4">
              結帳
            </Button>
          </Link>
        </>
      )}
    </div>
  )
}

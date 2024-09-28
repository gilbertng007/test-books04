import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import React from 'react'

export default function OrderDetail() {
  const router = useRouter()
  const { id } = router.query
  const [order, setOrder] = useState(null)

  useEffect(() => {
    if (id) {
      // 這裡應該從後端API獲取訂單詳情
      // 暫時使用模擬數據
      setOrder({
        id: id,
        date: '2023-04-01',
        total: 59.99,
        status: '已完成',
        items: [
          { id: 1, title: '書籍1', price: 29.99, quantity: 1 },
          { id: 2, title: '書籍2', price: 15.00, quantity: 2 },
        ],
      })
    }
  }, [id])

  if (!order) {
    return <div>加載中...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Typography variant="h4" component="h1" gutterBottom>
        訂單詳情 #{order.id}
      </Typography>
      <Typography variant="body1" gutterBottom>
        日期：{order.date}
      </Typography>
      <Typography variant="body1" gutterBottom>
        狀態：{order.status}
      </Typography>
      <TableContainer component={Paper} className="mt-4">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>商品</TableCell>
              <TableCell align="right">價格</TableCell>
              <TableCell align="right">數量</TableCell>
              <TableCell align="right">小計</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell align="right">${item.price}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">${item.price * item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6" className="mt-4">
        總計：${order.total}
      </Typography>
    </div>
  )
}

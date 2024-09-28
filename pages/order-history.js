import { useState, useEffect } from 'react'
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function OrderHistory() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    // 這裡應該從後端API獲取訂單歷史
    // 暫時使用模擬數據
    setOrders([
      { id: 1, date: '2023-04-01', total: 59.99, status: '已完成' },
      { id: 2, date: '2023-04-15', total: 89.97, status: '處理中' },
    ])
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <Typography variant="h4" component="h1" gutterBottom>
        訂單歷史
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>訂單編號</TableCell>
              <TableCell>日期</TableCell>
              <TableCell>總金額</TableCell>
              <TableCell>狀態</TableCell>
              <TableCell>操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>${order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Link href={`/order/${order.id}`} passHref>
                    <Button color="primary">查看詳情</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

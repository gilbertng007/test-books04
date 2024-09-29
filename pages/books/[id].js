import { useState } from 'react'
import { useRouter } from 'next/router'
import { Typography, Button, TextField, Box } from '@mui/material'
import { useCart } from '@/hooks/useCart'
import React from 'react'

export default function BookDetail({ book }) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const router = useRouter()

  const handleAddToCart = () => {
    addToCart({ ...book, quantity })
    router.push('/cart')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center">
        <Box flexShrink={0} mr={{ md: 4 }} mb={{ xs: 4, md: 0 }}>
          <img src={book.cover_image} alt={book.title} className="w-full max-w-md rounded-lg shadow-lg" />
        </Box>
        <Box>
          <Typography variant="h3" component="h1" gutterBottom>
            {book.title}
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            作者：{book.author}
          </Typography>
          <Typography variant="body1" paragraph>
            {book.description}
          </Typography>
          <Typography variant="h4" color="primary" gutterBottom>
            價格：${book.price}
          </Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <TextField
              type="number"
              label="數量"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              inputProps={{ min: 1 }}
              sx={{ width: 100, mr: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handleAddToCart}>
              加入購物車
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  // const res = await fetch(`https://freetestapi.com/api/v1/books/${params.id}`)
  const res = await fetch(`http://localhost:3000/api/books/${params.id}`)
  const book = await res.json()
  return { props: { book } }
}

import { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Home({ books }) {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">歡迎來到我們的網上書店</h1>
      <Grid container spacing={4}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={book.cover_image}
                alt={book.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  作者：{book.author}
                </Typography>
                <Typography variant="h6" color="primary">
                  價格：${book.price}
                </Typography>
                <Link href={`/books/${book.id}`} passHref>
                  <Button variant="contained" color="primary">
                    查看詳情
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://freetestapi.com/api/v1/books')
  const books = await res.json()
  return { props: { books } }
}

import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'

const categories = [
  {
    id: 1,
    name: 'Politics',
    searchKey: 'politics',
  },
  {
    id: 2,
    name: 'Business',
    searchKey: 'business',
  },
  {
    id: 3,
    name: 'Tech',
    searchKey: 'technology',
  },
  {
    id: 4,
    name: 'Arts',
    searchKey: 'arts',
  },
  {
    id: 5,
    name: 'Science',
    searchKey: 'science',
  },
  {
    id: 6,
    name: 'Health',
    searchKey: 'health',
  },
  {
    id: 7,
    name: 'Sports',
    searchKey: 'sports',
  }
]

export const LatestNews = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('politics');

  return (
    <Stack spacing={6}>
      <Typography variant='h1' color={theme.palette.primary1}>Latest News</Typography>
      <Box display="flex" gap={1} flexWrap="wrap">
        {
          categories.map((category) => (
            <Button 
              key={category.id} 
              variant='primary' 
              type='outlined' 
              active={category.searchKey === selectedCategory}
              onClick={() => setSelectedCategory(category.searchKey)}
            >
              {category.name}
            </Button>
          ))
        }
      </Box>
    </Stack>
  )
}

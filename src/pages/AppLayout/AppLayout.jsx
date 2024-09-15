import { Box, Stack, useTheme } from '@mui/material'
import React from 'react'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  const theme = useTheme();

  return (
    <Box 
      height="100vh"
      width="100%"
      sx={{
        background: `linear-gradient(50deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 60%, ${theme.palette.background.default} 95%)`
      }}
    >
      <Stack padding="30px 50px" spacing={10}>
        <Header />
        <Box>
          <Outlet />
        </Box>
      </Stack>
    </Box>
  )
}

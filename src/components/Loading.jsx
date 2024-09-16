import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export const Loading = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="50vh">
      <CircularProgress disableShrink />
    </Box>
  )
}

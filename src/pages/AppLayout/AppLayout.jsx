import { Box, Stack, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollableRef = useRef();

  console.log(isScrolled)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableRef.current.scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const scrollableElement = scrollableRef.current;

    if (scrollableElement) {
      scrollableElement.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Box 
      height="100%"
      width="100%"
      sx={{
        background: `linear-gradient(50deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 60%, ${theme.palette.background.default} 95%)`
      }}
    >
      <Stack padding="30px 50px" spacing={10} overflow="auto" height="100vh" ref={scrollableRef}>
        <Header isScrolled={isScrolled} />
        <Box>
          <Outlet />
        </Box>
      </Stack>
    </Box>
  )
}

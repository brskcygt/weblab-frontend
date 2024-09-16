import React from 'react';
import { Avatar, Box, Stack, Typography, useTheme } from '@mui/material';
import moment from 'moment';

export const NewsCard = ({ article }) => {
  const theme = useTheme();

  return (
    <Stack justifyContent="space-between" alignItems="flex-start" spacing={3} padding={4} height="100%">
      <Stack spacing={3}>
        <Box
          component="img"
          src={article?.urlToImage || "/placeholder.svg?height=300&width=400"}
          alt={article?.title}
          sx={{
            width: '100%',
            height: 300,
            borderRadius: '14px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
            cursor: 'pointer'
          }}
        />
        <Typography variant='h4' color={theme.palette.primary1}>
          {article?.title}
        </Typography>
        <Box>
          <Typography variant='body1' color={theme.palette.primary1}>
            {article?.description}
          </Typography>
          <Typography variant='body2' color={theme.palette.neutral2} sx={{ mt: 1 }}>
            {moment(article?.publishedAt).fromNow()}
          </Typography>
        </Box>
      </Stack>
      <Box display="flex" alignItems="center" gap={2} marginTop="auto">
        <Avatar>
          {article?.author?.split(' ').map(name => name.charAt(0).toUpperCase()).join('') || 'JD'}
        </Avatar>
        <Stack>
          <Typography variant='h6' color={theme.palette.primary1}>
            {article?.author || 'John Doe'}
          </Typography>
          <Typography variant='body2' color={theme.palette.neutral2}>
            Writer
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};
import {
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  useTheme,
} from '@mui/material';
import { useGetNewsEverythingQuery } from '../../network/api';
import { Loading } from '../../components/Loading';

export const Home = () => {
  const theme = useTheme();
  const { data, isFetching } = useGetNewsEverythingQuery();

  if (isFetching) return <Loading />

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card>
              <CardActionArea
                sx={{ 
                  '.MuiCardContent-root': {
                    background: '#FFFFFF'
                  },
                  overflow: 'hidden'
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={data?.articles[0]?.urlToImage}
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data?.articles[0]?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data?.articles[0]?.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              News From World
            </Typography>
          </Grid>

          {[1, 2, 3].map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <Card sx={{ height: '100%'}}>
                <CardActionArea 
                  sx={{ 
                    '&.MuiButtonBase-root': {
                      height: '100%'
                    },
                    '.MuiCardContent-root': {
                      background: '#FFFFFF',
                      height: '100%'
                    },
                    overflow: 'hidden'
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={data?.articles[item]?.urlToImage}
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {data?.articles[item]?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data?.articles[item]?.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box component="footer" sx={{ bgcolor: theme.palette.background.default, py: 3, mt: 4, position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color={theme.palette.primary1} align="center">
            © 2024 HaberSitesi. All rights reserved.
          </Typography>
          <Typography variant="body2" color={theme.palette.primary1} align="center" sx={{ mt: 1 }}>
            <Button color="inherit" size="small">Hakkımızda</Button>
            <Button color="inherit" size="small">Gizlilik Politikası</Button>
            <Button color="inherit" size="small">İletişim</Button>
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

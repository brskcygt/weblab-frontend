import { Box, Button, Grid, Stack, TextField, Typography, useTheme } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { useGetLatestNewsQuery } from '../../network/api';
import { NewsCard } from '../../components/NewsCard';
import { Loading } from '../../components/Loading';
import { Search } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';

const categories = [
  { id: 1, name: 'Politics', searchKey: 'politics' },
  { id: 2, name: 'Business', searchKey: 'business' },
  { id: 3, name: 'Tech', searchKey: 'technology' },
  { id: 4, name: 'Arts', searchKey: 'arts' },
  { id: 5, name: 'Science', searchKey: 'science' },
  { id: 6, name: 'Health', searchKey: 'health' },
  { id: 7, name: 'Sports', searchKey: 'sports' }
];

const combinations = [[3, 6, 3], [3, 3, 6], [6, 3, 3]];

const getRandomCombination = () => {
  const idx = Math.floor(Math.random() * combinations.length);
  return combinations[idx];
};

const groupArticles = (articles, groupSize) => {
  const result = [];
  for (let i = 0; i < articles.length; i += groupSize) {
    result.push(articles.slice(i, i + groupSize));
  }
  return result;
};

export const LatestNews = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('politics');
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { data, error, isFetching } = useGetLatestNewsQuery({
    category: selectedCategory, 
    search, 
    startDate: moment(startDate).format('YYYY-MM-DD'), 
    endDate: moment(endDate).format('YYYY-MM-DD')},
    {skip: search.length > 0 && search.length < 3 }
  );

  useEffect(() => {
    if (!isFetching && data) {
      setArticles(data?.articles?.filter((i) => Object.values(i).every((i) => i !== null)) || []);
    }
  }, [data, isFetching]);

  const groupedArticles = useMemo(() => groupArticles(articles, 3), [articles]);

  if (error) return <Typography>Error fetching news</Typography>;

  return (
    <Stack spacing={6} position="sticky" top={100}>
      <Typography variant='h1' color={theme.palette.primary1}>Latest News</Typography>
      <Box display="flex" gap={1} flexWrap="wrap" alignItems="center" justifyContent="space-between">
      <TextField 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: <Search />
          }}
          placeholder='Search...'
        />
        <Box display="flex" gap={1}>
          {
            categories.map((category) => (
              <Button 
                key={category.id} 
                variant='primary' 
                type='outlined' 
                active={category.searchKey === selectedCategory}
                onClick={() => setSelectedCategory(category.searchKey)}
                disabled={isFetching}
              >
                {category.name}
              </Button>
            ))
          }
        </Box>
       <Box display="flex" alignItems="center" gap={2}>
        <DatePicker
          value={moment(startDate)}
          onChange={setStartDate}
          renderInput={(props) => (
            <TextField {...props} helperText="valid mask" />
          )}
          sx={{
            '.MuiInputBase-root': {
              width: '100%'
            }
          }}
        />
        <DatePicker
          value={moment(endDate)}
          onChange={setEndDate}
          renderInput={(props) => (
            <TextField {...props} />
          )}
          sx={{
            '.MuiInputBase-root': {
              width: '100%'
            }
          }}
        />
       </Box>
      </Box>
      {isFetching ? <Loading /> : (
        <Grid container rowSpacing={6}>
          {groupedArticles.map((group) => {
            const combs = getRandomCombination();
            return group.map((article, index) => (
              <Grid
                key={article?.source?.id || index}
                item
                md={12}
                lg={combs[index % combs.length]}
                flex={1}
              >
                <NewsCard article={article}/>
              </Grid>
            ));
          })}
        </Grid>
      )}
    </Stack>
  )
}

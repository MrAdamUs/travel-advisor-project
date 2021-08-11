import React, { useState } from 'react';
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';

const places = [
  { name: 'Cool place' },
  { name: 'Adam Place' },
  { name: 'Sami Place' },
  { name: 'Test Place' },
  { name: 'Shosho Place' },
  { name: 'Mark Place' },
  { name: 'Sam Place' },
];

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState('resturants');
  const [rating, setRating] = useState('');
  console.log(type);
  console.log(rating);
  return (
    <div className={classes.container}>
      <Typography variant='h4'>
        Resturants, Hotles & Attreactions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value='resturants'>Resturans</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>About 4.0</MenuItem>
          <MenuItem value={4.5}>About 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;

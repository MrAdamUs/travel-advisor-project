import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px');

  const defaultProps = {
    center: {
      lat: 43.0,
      lng: -75.0,
    },
    zoom: 11,
  };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        center={defaultProps.cente}
        defaultZoom={defaultProps.zoom}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
